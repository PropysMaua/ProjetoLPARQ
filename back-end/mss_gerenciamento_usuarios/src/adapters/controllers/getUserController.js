const {HttpResponse} = require("../helpers/httpHelpers");
const {GetUserUsecase} = require("../../domain/usecases/getUserUsecase");

class GetUserController {

    getUserUsecase

    constructor(repository){
        this.getUserUsecase = new GetUserUsecase(repository)
    }

    async execute(req){
        let httpResponse = new HttpResponse()
        try {
            const id = req.queryParameters.id
            const result = await this.getUserUsecase.execute(id)
            httpResponse.statusCode = 200
            httpResponse.body = result

        } catch (error) {
            switch (error){
                case "Id não informado.":
                    httpResponse.statusCode = 400
                    httpResponse.body = error
                    break
                case 'User não encontrado.':
                    httpResponse.statusCode = 404
                    httpResponse.body = error
                    break
                default:
                    httpResponse.statusCode = 500
                    httpResponse.body = error
                    break
            }
        }
        return httpResponse
    }
}

module.exports = {
    GetUserController
}
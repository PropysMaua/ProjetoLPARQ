const {HttpResponse} = require("../helpers/httpHelpers");
const {GetAllUsersUsecase} = require("../../domain/usecases/getAllUsersUsecase");

class GetAllUsersController {

    getAllUsersUsecase

    constructor(repository){
        this.getAllUsersUsecase = new GetAllUsersUsecase(repository)
    }

    async execute(req){
        let httpResponse = new HttpResponse()
        try {
            const result = await this.getAllUsersUsecase.execute()
            httpResponse.statusCode = 200
            httpResponse.body = result

        } catch (error) {
            switch (error){
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
    GetAllUsersController
}

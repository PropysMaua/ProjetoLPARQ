const {UpdateUserUsecase} = require("../../domain/usecases/updateUserUsecase")
const {User} = require("../../domain/entities/user");
const {HttpResponse} = require("../helpers/httpHelpers");


class UpdateUserController{
    // Controller →
    // Recebe um HttpRequest
    // Trata esse request (ex: instancia um User)
    // executa o usecase (regra de negocio)
    // retornar um HttpResponse com o resultado

    updateUserUsecase

    constructor(repository){
        this.updateUserUsecase = new UpdateUserUsecase(repository)
    }

    async execute(req){
        let httpResponse = new HttpResponse()
        try {
            const userId = req.queryParameters.userId
            const attributesToUpdate = req.body
            const result = await this.updateUserUsecase.execute(userId, attributesToUpdate)
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
    UpdateUserController
}

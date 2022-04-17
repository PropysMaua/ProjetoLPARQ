const {CreateUserUsecase} = require("../../domain/usecases/createUserUsecase");
const {User} = require("../../domain/entities/user");
const {UserRepositoryMock} = require("../../infra/userRepositoryMock");
const {HttpResponse} = require("../helpers/httpHelpers");


class CreateUserController {
    _createUserUsecase

    constructor(repository) {
        this._createUserUsecase = new CreateUserUsecase(repository)
    }

    async execute(req) {
        const response = new HttpResponse()
        try {
            const user = new User(req.body)
            const createdUser = await this._createUserUsecase.execute(user)
            response.statusCode=201
            response.body=createdUser
        } catch (error) {
            if (error === "User already exists") {
                response.statusCode = 400
                response.body = error
            } else {
                response.statusCode = 500
                response.body = error
            }
        }
        return response
    }

}

module.exports = {
    CreateUserController
}

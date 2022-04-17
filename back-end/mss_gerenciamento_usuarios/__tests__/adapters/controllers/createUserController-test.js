
const {User} = require("../../../src/domain/entities/user")
const {CreateUserController} = require("../../../src/adapters/controllers/createUserController")
const {UserRepositoryMock} = require("../../../src/infra/userRepositoryMock")
const {HttpRequest, HttpResponse} = require("../../../src/adapters/helpers/httpHelpers");




describe('createUserController', () => {
    it('should create a user', async () => {
        let userMock = new User(
            "Bruno Vilardi",
            "Brazilian",
            "15/01/2001",
            "M",
            {
                city: "São Paulo",
                country: "Brazil"
            },
            "bruno@bruno.com",
            "+5511912345678",
            "brvila",
            "Teste123!"
        )
        const repo = new UserRepositoryMock()
        const createUserController = new CreateUserController(repo)
        const httpRequest = new HttpRequest(userMock.toJson())
        const httpResponse = await createUserController.execute(httpRequest)
        expect(httpResponse.statusCode).toBe(201)
        expect(httpResponse.body).toEqual(userMock.toJson())
        const httpResponseFail = await createUserController.execute(httpRequest)
        expect(httpResponseFail.statusCode).toBe(400)
        expect(httpResponseFail.body).toEqual("User already exists")
    })
})

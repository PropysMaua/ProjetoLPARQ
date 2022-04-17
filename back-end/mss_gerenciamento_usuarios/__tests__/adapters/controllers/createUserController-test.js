
const {User} = require("../../../src/domain/entities/user")
const {CreateUserController} = require("../../../src/adapters/controllers/createUserController")
const {UserRepositoryMock} = require("../../../src/infra/userRepositoryMock")
const {HttpRequest, HttpResponse} = require("../../../src/adapters/helpers/httpHelpers");




describe('createUserController', () => {
    it('should create a user', async () => {
        let userMock = new User(

            {
                name: "Bruno Vilardi",
                nationality: "Brazilian",
                birthDate: "15/01/2001",
                gender: "M",
                currentLocation: {
                    city: "São Paulo",
                    country: "Brazil"
                },
                email: "bruno@bruno.com",
                phoneNumber: "+5511912345678",
                username: "brvila",
                password: "Teste123!"
            }
        )
        const repo = new UserRepositoryMock()
        const createUserController = new CreateUserController(repo)
        const httpRequest = new HttpRequest(userMock.toJson())
        const httpResponse = await createUserController.execute(httpRequest)
        expect(httpResponse.statusCode).toBe(201)
        expect(httpResponse.body.name).toEqual(userMock.name)
        expect(httpResponse.body.nationality).toEqual(userMock.nationality)
        expect(httpResponse.body.birthDate).toEqual(userMock.birthDate)
        expect(httpResponse.body.gender).toEqual(userMock.gender)
        expect(httpResponse.body.currentLocation).toEqual(userMock.currentLocation)
        expect(httpResponse.body.email).toEqual(userMock.email)
        expect(httpResponse.body.phoneNumber).toEqual(userMock.phoneNumber)
        expect(httpResponse.body.username).toEqual(userMock.username)

        const httpResponseFail = await createUserController.execute(httpRequest)
        expect(httpResponseFail.statusCode).toBe(400)
        expect(httpResponseFail.body).toEqual("User already exists")
    })
})

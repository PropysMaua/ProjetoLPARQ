
const {User} = require("../../../src/domain/entities/user")
const {CreateUserController} = require("../../../src/adapters/controllers/createUserController")
const {UserRepositoryMock} = require("../../../src/infra/userRepositoryMock")
const {HttpRequest, HttpResponse} = require("../../../src/adapters/helpers/httpHelpers");
const {UpdateUserController} = require("../../../src/adapters/controllers/updateUserController");




describe('updateUserController', () => {
    it('should update a user', async () => {

        const repo = new UserRepositoryMock()
        let userMock = repo.users[0]

        const updateUserController = new UpdateUserController(repo)
        const userToUpdate = {
            name: "new name",
            nationality: "Japanese",
            gender: "F"
        }

        const httpRequest = new HttpRequest(userToUpdate, {userId: userMock.id})
        const httpResponse = await updateUserController.execute(httpRequest)

        expect(httpResponse.statusCode).toBe(200)

        // New user data
        expect(httpResponse.body.name).toEqual(userToUpdate.name)
        expect(httpResponse.body.gender).toEqual(userToUpdate.gender)
        expect(httpResponse.body.nationality).toEqual(userToUpdate.nationality)

        // Old user data
        expect(httpResponse.body.birthDate).toEqual(userMock.birthDate)
        expect(httpResponse.body.currentLocation).toEqual(userMock.currentLocation)
        expect(httpResponse.body.email).toEqual(userMock.email)
        expect(httpResponse.body.phoneNumber).toEqual(userMock.phoneNumber)
        expect(httpResponse.body.username).toEqual(userMock.username)

    })
})

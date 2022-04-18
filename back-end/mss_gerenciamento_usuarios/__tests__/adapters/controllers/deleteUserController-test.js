const {UserRepositoryMock} = require("../../../src/infra/userRepositoryMock");
const {HttpRequest} = require("../../../src/adapters/helpers/httpHelpers");
const {DeleteUserController} = require("../../../src/adapters/controllers/deleteUserController");


describe(`deleteUserController`, () => {
    it(`should delete a user`, async () => {
        const repo = new UserRepositoryMock()
        let userMock = repo.users[0]

        const deleteUserController = new DeleteUserController(repo)

        const httpRequest = new HttpRequest({},{id:userMock.id},{})
        const httpResponse = await deleteUserController.execute(httpRequest)

        expect(httpResponse.statusCode).toBe(200)
        expect(httpResponse.body).toBe(userMock)

    })
})
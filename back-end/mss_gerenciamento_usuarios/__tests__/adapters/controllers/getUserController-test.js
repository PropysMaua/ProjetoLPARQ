const {UserRepositoryMock} = require("../../../src/infra/userRepositoryMock");
const {HttpRequest} = require("../../../src/adapters/helpers/httpHelpers");
const {GetUserController} = require("../../../src/adapters/controllers/getUserController");


describe(`getUserController`, () => {
    it(`shoul get a user`, async () => {
        const repo = new UserRepositoryMock()
        let userMock = repo.users[0]

        const getUserController = new GetUserController(repo)

        const httpRequest = new HttpRequest({},{id:userMock.id},{})
        const httpResponse = await getUserController.execute(httpRequest)

        expect(httpResponse.statusCode).toBe(200)
        expect(httpResponse.body).toBe(userMock)

    })
})
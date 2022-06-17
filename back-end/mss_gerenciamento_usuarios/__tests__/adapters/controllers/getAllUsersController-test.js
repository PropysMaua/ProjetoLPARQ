const {UserRepositoryMock} = require("../../../src/infra/userRepositoryMock");
const {HttpRequest} = require("../../../src/adapters/helpers/httpHelpers");
const {GetAllUsersController} = require("../../../src/adapters/controllers/getAllUsersController");


describe(`getUserController`, () => {
    it(`should get a user`, async () => {
        const repo = new UserRepositoryMock()
        let usersMock = repo.users

        const getAllUsersController = new GetAllUsersController(repo)

        const httpRequest = new HttpRequest({},{},{})
        const httpResponse = await getAllUsersController.execute(httpRequest)

        expect(httpResponse.statusCode).toBe(200)
        expect(httpResponse.body).toBe(usersMock)

    })
})

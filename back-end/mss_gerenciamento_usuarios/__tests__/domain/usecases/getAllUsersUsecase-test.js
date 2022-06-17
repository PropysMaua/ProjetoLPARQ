const {UserRepositoryMock} = require("../../../src/infra/userRepositoryMock");
const {GetAllUsersUsecase} = require("../../../src/domain/usecases/getAllUsersUsecase");

describe('getAllUsersUsecase', () => {
    it('should get all the user', async () => {

        const repo = new UserRepositoryMock()
        const userMocks = repo.users

        const getAllUsersUsecase = new GetAllUsersUsecase(repo)

        users = await getAllUsersUsecase.execute()
        expect(users).toBe(userMocks)

    })

})

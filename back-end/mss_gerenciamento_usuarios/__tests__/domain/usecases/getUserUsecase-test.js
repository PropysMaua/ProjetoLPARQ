const {UserRepositoryMock} = require("../../../src/infra/userRepositoryMock");
const {GetUserUsecase} = require("../../../src/domain/usecases/getUserUsecase");

describe('getUserUsecase', () => {
    it('should get the user', async () => {

        const repo = new UserRepositoryMock()
        const userMock = repo.users[0]

        const getUserUsecase = new GetUserUsecase(repo)

        userToGet = await getUserUsecase.execute(userMock.id)
        expect(userToGet).toBe(userMock)

    })

})
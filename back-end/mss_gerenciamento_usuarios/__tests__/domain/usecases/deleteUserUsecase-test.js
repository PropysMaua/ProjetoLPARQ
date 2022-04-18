const {UserRepositoryMock} = require("../../../src/infra/userRepositoryMock");
const {DeleteUserUsecase} = require("../../../src/domain/usecases/deleteUserUsecase");

describe('deleteUserUsecase', () => {
    it('should delete the user', async () => {

        const repo = new UserRepositoryMock()
        const userMock = repo.users[0]

        const deleteUserUsecase = new DeleteUserUsecase(repo)
        expect(repo.users).toContainEqual(userMock)
        userToDelete = await deleteUserUsecase.execute(userMock.id)
        expect(repo.users).not.toContainEqual(userMock)

    })

})
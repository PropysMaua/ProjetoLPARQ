

const {User} = require("../../../src/domain/entities/user")
const {UserRepositoryMock} = require("../../../src/infra/userRepositoryMock")
const {UpdateUserUsecase} = require("../../../src/domain/usecases/updateUserUsecase");




describe('updateUserUsecase', () => {
    it('should update the user', async () => {

        const repo = new UserRepositoryMock()
        const userMock = repo.users[0]

        const updateUserUsecase = new UpdateUserUsecase(repo)

        userToUpdate = new User({id: userMock.id})
        userToUpdate.name = "New Name"
        userToUpdate.email = "new@email.com"

        const updatedUser = await updateUserUsecase.execute(userToUpdate)

        expect(updatedUser.name).toBe("New Name")
        expect(updatedUser.email).toBe("new@email.com")

        expectedUpdateUser = new User(userMock)
        expectedUpdateUser.name = "New Name"
        expectedUpdateUser.email = "new@email"
        expect(updatedUser).toBe(userMock)

    })

})




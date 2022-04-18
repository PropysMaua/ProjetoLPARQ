const {UserRepositoryMock} = require("../../infra/userRepositoryMock");

class DeleteUserUsecase {

    _userRepository

    constructor(userRepository) {
        this._userRepository = userRepository
    }

    async execute(id){
        if (id === undefined) throw 'Id não informado.'

        const userToDelete = await this._userRepository.getUserById(id)

        if (userToDelete === undefined) throw 'User não encontrado.'

        this._userRepository.deleteUser(id)
        return userToDelete
    }
}

module.exports = {
    DeleteUserUsecase
}
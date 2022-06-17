class GetAllUsersUsecase {

    _userRepository

    constructor(userRepository) {
        this._userRepository = userRepository
    }

    async execute(){

        const users = await this._userRepository.getAllUsers()

        if (users === undefined) throw 'User não encontrado.'

        return users
    }
}

module.exports = {
    GetAllUsersUsecase
}

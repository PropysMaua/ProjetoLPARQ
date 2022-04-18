class GetUserUsecase {

    _userRepository

    constructor(userRepository) {
        this._userRepository = userRepository
    }

    async execute(id){
        if (id === undefined) throw 'Id não informado.'

        const userToGet = await this._userRepository.getUserById(id)

        if (userToGet === undefined) throw 'User não encontrado.'

        return userToGet
    }
}

module.exports = {
    GetUserUsecase
}
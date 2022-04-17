


class UpdateUserUsecase {
  // Recebe o que precisar (geralmente é uma instancia de User)
  // Aplica a regra de negocio (levanto erros)
  // faço a atualização no banco de dados (levanto erros)
  // Retorna o resultado

  _userRepository

  constructor(userRepository) {
    this._userRepository = userRepository
  }

  async execute(user) {
    const allowedToUpdate = ['name', 'nationality', 'birthDate', 'gender', 'currentLocation', 'email', 'phoneNumber']
    if (user.id === undefined) throw 'Id não informado.'

    const userToUpdate = await this._userRepository.getUserById(user.id)
    if (userToUpdate === undefined) throw 'User não encontrado.'

    for (let field of allowedToUpdate){
      if (user[field] !== undefined) {
        userToUpdate[field] = user[field]
      }
    }
    const updatedUser = await this._userRepository.updateUser(userToUpdate)
    return updatedUser
  }
}

module.exports = {
  UpdateUserUsecase
}




class UpdateUserUsecase {
  // Recebe o que precisar (geralmente é uma instancia de User)
  // Aplica a regra de negocio (levanto erros)
  // faço a atualização no banco de dados (levanto erros)
  // Retorna o resultado

  _userRepository

  constructor(userRepository) {
    this._userRepository = userRepository
  }

  async execute(userId, attributesToUpdate) {
    const allowedToUpdate = ['name', 'nationality', 'birthDate', 'gender', 'city', 'country', 'email', 'phoneNumber']
    if (userId === undefined) throw 'Id não informado.'

    const userToUpdate = await this._userRepository.getUserById(userId)
    if (userToUpdate === undefined) throw 'User não encontrado.'

    for (const attribute in attributesToUpdate) {
      if (!allowedToUpdate.includes(attribute)) throw `Atributo ${attribute} não permitido de ser alterado.`
    }

    const updatedUser = await this._userRepository.updateUser(userId, attributesToUpdate)
    return updatedUser
  }
}

module.exports = {
  UpdateUserUsecase
}

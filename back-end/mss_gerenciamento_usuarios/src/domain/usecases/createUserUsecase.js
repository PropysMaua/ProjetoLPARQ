
const {User} = require("../../../src/domain/entities/user")


class CreateUserUsecase {

  constructor(userRepository) {
    this._userRepository = userRepository
  }

  async execute(user) {
    try {
      if (user.id !== undefined) {
        throw "User already exists"
      }
      let duplicityFields = ['email', 'username', 'phoneNumber']
      let userExists = false
      for (let field of duplicityFields) {
        userExists = await this._userRepository.getUserByField(field, user[field])
        if (userExists) throw 'User already exists'
      }

      const newUser = await this._userRepository.createUser(user)

      return newUser
    }
    catch (error) {
      throw error
    }
  }
}


module.exports = {
  CreateUserUsecase
}



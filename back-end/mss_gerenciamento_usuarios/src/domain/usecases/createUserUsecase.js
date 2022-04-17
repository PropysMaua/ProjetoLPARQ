
const {User} = require("../../../src/domain/entities/user");

class CreateUserUsecase {

  constructor(userRepository) {
    this._userRepository = userRepository
  }

  async execute(user) {
    try {
      let duplicityFields = ['email', 'username', 'phoneNumber']
      let userExists = false
      for (let field of duplicityFields) {
        userExists = await this._userRepository.findByField(field, user[field])
        if (userExists) throw new Error(`${field} already exists`, null)
      }


      const newUser = await this._userRepository.createUser(user)

      return newUser
    }
    catch (error) {
      throw "User already exists"
    }
  }
}


module.exports = {
  CreateUserUsecase
}



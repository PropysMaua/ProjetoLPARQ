
const {User} = require("../../../src/domain/entities/user");

class CreateUserUsecase {

  constructor(userRepository) {
    this._userRepository = userRepository
  }

  async execute(user) {
    try {
      let duplicityFields = ['email', 'username', 'phoneNumber']
      let userExists = false
      duplicityFields.forEach(async field => {
        userExists = await this._userRepository.findByField(field, user[field])
        if (userExists) throw new Error(`${field} already exists`)
      })


      const newUser = await this._userRepository.createUser(user)

      return newUser
    }
    catch (error) {
      throw "Error creating user"
    }
  }
}


module.exports = {
  CreateUserUsecase
}



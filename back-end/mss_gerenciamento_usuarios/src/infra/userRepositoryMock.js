

class UserRepositoryMock {

  users

  constructor() {
    this.users = [];
  }

  async createUser(user) {
    this.users.push(user)
    return this.users[this.users.length - 1]
  }

  async findByField(field, value) {
    if (this.users.find(user => user[field] === value)) {
      return true
    } else {
      return false
    }
  }


}


module.exports ={
    UserRepositoryMock
}

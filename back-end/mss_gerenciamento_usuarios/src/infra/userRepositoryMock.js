

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
    return this.users.find(user => user[field] === value)
  }


}


module.exports ={
    UserRepositoryMock
}

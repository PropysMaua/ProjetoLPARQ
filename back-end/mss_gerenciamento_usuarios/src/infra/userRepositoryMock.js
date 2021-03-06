const {User} = require("../domain/entities/user");
const {v4: uuidv4} = require("uuid");


class UserRepositoryMock {

  users

  constructor() {
    this.users = [
        new User(
            {
              id: "82499efd-4385-435e-a894-b8432b01be58",
              name: "Jonas Brother",
              nationality: "Brasileiro",
              birthDate: "17/03/2005",
              gender: "M",
              city: "São Paulo",
              country: "Brasil",
              email: "jonas@brothers.com",
              phoneNumber: "+551165487912",
              username: "john",
              password: "Teste123!"
            }
        ),
        new User(
            {
              id: "e5325aee-efb6-4c00-917b-e8dbe4744335",
              name: "Tina Puentes",
              nationality: "Colombiana",
              birthDate: "17/04/2004",
              gender: "F",
              city: "São Paulo",
              country: "Brazil",
              email: "tina@peuntes.com",
              phoneNumber: "+5511648465451",
              username: "tinpuen",
              password: "Teste123!"
            }
        )

    ]
  }

  async createUser(user) {
    user.id = uuidv4()
    this.users.push(user)
    return this.users[this.users.length - 1]
  }

  async deleteUser(id){
    const index = this.users.findIndex(u => u.id === id)
    this.users.splice(index, 1)
    return
  }

  async getUserByField(field, value) {
    if (this.users.find(user => user[field] === value) === undefined) {
      return false
    } else {
      return true
    }
  }

  async getUserById(id) {
    return this.users.find(user => user.id === id)
  }

  async updateUser(userId, attributes) {
    const index = this.users.findIndex(u => u.id === userId)
    this.users[index] = {...this.users[index], ...attributes}
    return this.users[index]
  }

  async getAllUsers() {
    return this.users
  }

}


module.exports ={
    UserRepositoryMock
}

const {User} = require("../domain/entities/user");


class UserRepositoryMock {

  users

  constructor() {
    this.users = [
        new User(
            {
              id: "82499efd-4385-435e-a894-b8432b01be58",
              name: "Mauricio",
              nationality: "Brazilian",
              birthDate: "17/03/2005",
              gender: "M",
              city: "São Paulo",
              country: "Brazil",
              email: "mauricio@mauricio.com",
              phoneNumber: "+5511912345978",
              username: "mauricio",
              password: "Teste123!"
            }
        ),
        new User(
            {
              id: "e5325aee-efb6-4c00-917b-e8dbe4744335",
              name: "Laura",
              nationality: "Colombian",
              birthDate: "17/04/2004",
              gender: "F",
              city: "São Paulo",
              country: "Brazil",
              email: "laura@laura.com",
              phoneNumber: "+5511912335678",
              username: "laura",
              password: "Teste123!"
            }
        )

    ]
  }

  async createUser(user) {
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

  async updateUser(user) {
    const index = this.users.findIndex(u => u.id === user.id)
    this.users[index] = user
    return this.users[index]
  }

}


module.exports ={
    UserRepositoryMock
}

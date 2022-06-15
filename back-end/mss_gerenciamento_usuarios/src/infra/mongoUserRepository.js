const {User} = require("../domain/entities/user");
const mongoose = require('mongoose');
const {createConnection} = require("mongoose");
const {MongoUserDTO, MongoUserModel} = require("./dto/mongoUserDTO");


class MongoUserRepository {
    mongoConnection

    constructor() {

    }

    static async createConnection() {
        const connectString = `mongodb+srv://nodeUser:LPAQR@lpqar.fedrdic.mongodb.net/?retryWrites=true&w=majority`
        try {
            await mongoose.connect(connectString)
        } catch (err) {
            console.log("Error on connecting to Mongo: " + err)
        }
        console.log("Connection with Mongo OK!")

        return new MongoUserRepository()
    }


    async createUser(user) {
        const userDTO = MongoUserDTO.fromEntity(user)
        const mongoUser = userDTO.toMongoUser()
        await mongoUser.save()
        console.log("Created: " + mongoUser)

    }

    async getUserByField(field, value) {
        const resp = await MongoUserModel.findOne(
            {field: value}
        )
        const userDTO = MongoUserDTO.fromMongo(resp)
        return userDTO.toEntity()
    }


    async deleteUser(id){
        const index = this.users.findIndex(u => u.id === id)
        this.users.splice(index, 1)
        return
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
    MongoUserRepository
}

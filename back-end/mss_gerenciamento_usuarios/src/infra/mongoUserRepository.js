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
        if (resp === null) {
            return null
        }
        const userDTO = MongoUserDTO.fromMongo(resp)
        return userDTO.toEntity()
    }


    async deleteUser(id){
        const resp = await MongoUserModel.deleteOne(
            {_id: id}
        )
        if (resp.deletedCount === 1) {
            return true
        }
        return false
    }



    async getUserById(id) {
        return this.users.find(user => user.id === id)
    }

    /**
     *
     * @param userId
     * @param elementsToUpdate {{field: value}, {field: value}}
     * @returns {Promise<void>}
     */
    async updateUser(userId, elementsToUpdate) {
        const resp = await MongoUserModel.updateOne(
            {_id: userId},
            {$set: elementsToUpdate}
        )
        if (resp.modifiedCount === 1) {
            return true
        }
        return false

        return resp







    }

}


module.exports ={
    MongoUserRepository
}

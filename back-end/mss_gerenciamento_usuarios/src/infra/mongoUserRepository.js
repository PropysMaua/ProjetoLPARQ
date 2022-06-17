const {User} = require("../domain/entities/user");
const mongoose = require('mongoose');
const {createConnection} = require("mongoose");
const {MongoUserDTO, MongoUserModel} = require("./dto/mongoUserDTO");


class MongoUserRepository {
    constructor() {

    }

    static async createConnection(connectString) {
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
        const userCreated = await mongoUser.save()
        console.log("Created: " + mongoUser)
        return MongoUserDTO.fromMongo(userCreated).toEntity()

    }

    async getUserByField(field, value) {
        try{
            if (value === null || value === undefined) {
                return null
            }

            const resp = await MongoUserModel.findOne(
                {[field]: value}
            )
            if (resp === null) {
                return null
            }
            const userDTO = MongoUserDTO.fromMongo(resp)
            return userDTO.toEntity()
        } catch (err) {
            throw err
        }
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
        const resp = await MongoUserModel.find(
            {_id: id}
        )
        if (resp.length === 0) {
            return null
        }
        return MongoUserDTO.fromMongo(resp[0]).toEntity()
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

    }

    async getAllUsers() {
        const resp = await MongoUserModel.find()
        const users = resp.map(user => MongoUserDTO.fromMongo(user).toEntity())
        return users
    }

}


module.exports ={
    MongoUserRepository
}

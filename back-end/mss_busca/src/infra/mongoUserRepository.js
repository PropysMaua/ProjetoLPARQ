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




    async getUserById(id) {
        const resp = await MongoUserModel.find(
            {_id: id}
        )
        if (resp.length === 0) {
            return null
        }
        return MongoUserDTO.fromMongo(resp[0]).toEntity()
    }

    async getUsersByField(field, value) {
        try{
            if (value === null || value === undefined) {
                return null
            }

            const resp = await MongoUserModel.find(
              {[field]: value}
            )
            console.log("resp: " + resp)
            if (resp === null) {
                return null
            }
            const users = []

            resp.forEach((user) => {
                const userDTO = MongoUserDTO.fromMongo(user)
                users.push(userDTO.toEntity())
            })

            console.log("users: " + users)


            return users
        } catch (err) {
            throw err
        }
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


const mongoose = require('mongoose');
const {User} = require("../../domain/entities/user");
const { Schema } = mongoose;



const MongoUserSchema = new Schema({
    name: String,
    nationality: String,
    birthDate: String,
    gender: String,
    city: String,
    country: String,
    email: String,
    phoneNumber: String,
    username: String,
    password: String
});

const MongoUserModel = mongoose.model("Users", MongoUserSchema)


class MongoUserDTO {
    id
    name
    nationality
    birthDate
    gender
    city
    country
    email
    phoneNumber
    username
    password

    constructor(obj) {
        Object.assign(this, obj)
    }


    static fromEntity(user){
        return new MongoUserDTO(user)
    }

    static fromMongo(user) {
        const userJson = user._doc
        userJson.id = userJson._id.toString()
        return new MongoUserDTO(userJson)

    }

    toMongoUser(){
        return new MongoUserModel(this)
    }

    toEntity(){
        return new User(this)
    }

}

module.exports = {
    MongoUserDTO,
    MongoUserModel
}

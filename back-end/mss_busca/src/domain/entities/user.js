

class User {
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

    toJson() {
        return {
            id: this.id,
            name: this.name,
            nationality: this.nationality,
            birthDate: this.birthDate,
            gender: this.gender,
            city: this.city,
            country: this.country,
            email: this.email,
            phoneNumber: this.phoneNumber,
            username: this.username,
            password: this.password
        }
    }

}

class Refugee extends User{
    numberTogether
    lookingHost
    constructor(obj) {
        super(obj)
        this.numberTogether = obj.numberTogether
        this.lookingHost = obj.lookingHost
    }
}



module.exports = {
    User,
    Refugee
}

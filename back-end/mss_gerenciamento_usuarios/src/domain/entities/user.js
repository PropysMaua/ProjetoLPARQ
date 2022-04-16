
class User {
    name
    nationality
    birthDate
    gender
    currentLocation
    email
    phoneNumber
    username
    password

    constructor(name, nationality, birthDate, gender, currentLocation, email, phoneNumber, username, password) {

        this.name = name
        this.nationality = nationality
        this.birthDate = birthDate
        this.gender = gender
        this.currentLocation = currentLocation
        this.email = email
        this.phoneNumber = phoneNumber
        this.username = username
        this.password = password
    }

    toJson() {
        return {
            name: this.name,
            nationality: this.nationality,
            birthDate: this.birthDate,
            gender: this.gender,
            currentLocation: this.currentLocation,
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
    constructor(name, nationality, birthDate, gender, currentLocation, email, phoneNumber, username, password, numberTogether, lookingHost) {
        super(name, nationality, birthDate, gender, currentLocation, email, phoneNumber, username, password)
        this.numberTogether = numberTogether
        this.lookingHost = lookingHost
    }
}



module.exports = {
    User,
    Refugee
}

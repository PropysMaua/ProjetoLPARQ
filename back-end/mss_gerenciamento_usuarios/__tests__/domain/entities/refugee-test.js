
const {Refugee} = require("../../../src/domain/entities/user");



user = new Refugee(
    "Bruno Vilardi",
    "Brazilian",
    "15/01/2001",
    "M",
    {
        city: "São Paulo",
        country: "Brazil"
    },
    "bruno@bruno.com",
    "+5511912345678",
    "brvila",
    "Teste123!",
    10,
    true
)

jsonUser = {
    name: "Bruno Vilardi",
    nationality: "Brazilian",
    birthDate: "15/01/2001",
    gender: "M",
    currentLocation: {
        city: "São Paulo",
        country: "Brazil"
    },
    username: "brvila",
    phoneNumber: "+5511912345678",
    email: "bruno@bruno.com",
    password: "Teste123!",
    numberTogether: 10,
    lookingHost: true
}


test("User constructor", () => {
    expect(user.name).toBe(jsonUser.name)
    expect(user.nationality).toBe(jsonUser.nationality)
    expect(user.birthDate).toBe(jsonUser.birthDate)
    expect(user.gender).toBe(jsonUser.gender)
    expect(user.currentLocation).toStrictEqual(jsonUser.currentLocation)
    expect(user.email).toBe(jsonUser.email)
    expect(user.phoneNumber).toBe(jsonUser.phoneNumber)
    expect(user.username).toBe(jsonUser.username)
    expect(user.password).toBe(jsonUser.password)
    expect(user.numberTogether).toBe(jsonUser.numberTogether)
    expect(user.lookingHost).toBe(jsonUser.lookingHost)
})

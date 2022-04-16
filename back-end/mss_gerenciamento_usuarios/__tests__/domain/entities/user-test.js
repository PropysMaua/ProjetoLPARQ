
const {User, Refugee} = require("../../../src/domain/entities/user");




user = new User(
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
    "Teste123!"
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
    password: "Teste123!"
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
})

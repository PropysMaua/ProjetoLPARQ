


const {UserRepositoryMock} = require("./../../src/infra/userRepositoryMock");
const {MongoUserRepository} = require("./../../src/infra/mongoUserRepository");
const mongoose = require("mongoose");


// Deveria ser de um cluster separado, porem o mongo só deixa ter um cluster gratuito por vez
const MONGO_STRING_CONNECTION = `mongodb+srv://teste-user:teste-user@lpqar.fedrdic.mongodb.net/?retryWrites=true&w=majority`

describe('mongoUserRepository', () => {
    it('should connect to Mongo', async () => {
        const repo = await MongoUserRepository.createConnection(MONGO_STRING_CONNECTION)

    }),

    it("should create a User, get a user and delete a user", async () => {
        const repo = await MongoUserRepository.createConnection(MONGO_STRING_CONNECTION)
        const mockRepo = new UserRepositoryMock()

        user = mockRepo.users[0]

        await repo.createUser(user)

        const resp = await repo.getUserByField('username', mockRepo.users[0].username)
        console.log(resp)
        expect(resp.name).toBe(mockRepo.users[0].name)
        expect(resp.nationality).toBe(mockRepo.users[0].nationality)
        expect(resp.birthDate).toBe(mockRepo.users[0].birthDate)
        expect(resp.gender).toBe(mockRepo.users[0].gender)
        expect(resp.city).toBe(mockRepo.users[0].city)
        expect(resp.country).toBe(mockRepo.users[0].country)
        expect(resp.email).toBe(mockRepo.users[0].email)
        expect(resp.phoneNumber).toBe(mockRepo.users[0].phoneNumber)

        const resp2 = await repo.deleteUser(resp.id)
        expect(resp2).toBe(true)

        const resp3 = await repo.getUserByField('username', mockRepo.users[0].username)
        expect(resp3).toBe(null)
    })
    afterAll(done => {
        // Closing the DB connection allows Jest to exit successfully.
        mongoose.connection.close()
        done()
    })
})

describe('mongoUserRepository2', () => {
        it("should create a User, get a user updateUser and delete a user", async () => {
            const repo = await MongoUserRepository.createConnection(MONGO_STRING_CONNECTION)
            const mockRepo = new UserRepositoryMock()

            const user = mockRepo.users[1]

            await repo.createUser(user)

            const resp = await repo.getUserByField('username', mockRepo.users[1].username)
            console.log("Get user: \n:" + resp)
            expect(resp.name).toBe(mockRepo.users[1].name)
            expect(resp.nationality).toBe(mockRepo.users[1].nationality)
            expect(resp.birthDate).toBe(mockRepo.users[1].birthDate)
            expect(resp.gender).toBe(mockRepo.users[1].gender)
            expect(resp.city).toBe(mockRepo.users[1].city)
            expect(resp.country).toBe(mockRepo.users[1].country)
            expect(resp.email).toBe(mockRepo.users[1].email)
            expect(resp.phoneNumber).toBe(mockRepo.users[1].phoneNumber)

            user.id = resp.id

            const newUser = user
            newUser.name = "newName"
            newUser.nationality = "newNationality"
            newUser.email = "new@email.com"
            updateElements = {
                name: newUser.name,
                nationality: newUser.nationality,
                email: newUser.email
            }

            const resp2 = await repo.updateUser(resp.id, updateElements)
            expect(resp2).toBe(true)

            const userUpdated = await repo.getUserByField('username', mockRepo.users[1].username)
            console.log("Get user updated: \n" + userUpdated)
            expect(userUpdated.id).toBe(newUser.id)
            expect(userUpdated.name).toBe(newUser.name)
            expect(userUpdated.nationality).toBe(newUser.nationality)
            expect(userUpdated.birthDate).toBe(mockRepo.users[1].birthDate)
            expect(userUpdated.gender).toBe(mockRepo.users[1].gender)
            expect(userUpdated.city).toBe(mockRepo.users[1].city)
            expect(userUpdated.country).toBe(mockRepo.users[1].country)
            expect(userUpdated.email).toBe(newUser.email)
            expect(userUpdated.phoneNumber).toBe(mockRepo.users[1].phoneNumber)


            const resp3 = await repo.deleteUser(user.id)
            expect(resp3).toBe(true)

            const resp4 = await repo.getUserByField('username', mockRepo.users[1].username)
            expect(resp4).toBe(null)
        })
    afterAll(done => {
        // Closing the DB connection allows Jest to exit successfully.
        mongoose.connection.close()
        done()
    })
})

describe('mongoUserRepository3', () => {
    it("should create 2 Users, get all users and delete all users", async () => {
        const repo = await MongoUserRepository.createConnection(MONGO_STRING_CONNECTION)
        const mockRepo = new UserRepositoryMock()

        const user1 = mockRepo.users[0]
        const user2 = mockRepo.users[1]

        const resp1 = await repo.createUser(user1)
        const resp2 = await repo.createUser(user2)

        const resp = await repo.getAllUsers()
        console.log("Get all users: \n" + resp)
        expect(resp.length).toBeGreaterThan(1)

        const resp4 = await repo.deleteUser(resp1.id)
        const resp5 = await repo.deleteUser(resp2.id)

        expect(resp4).toBe(true)
        expect(resp5).toBe(true)

    })
    afterAll(done => {
        // Closing the DB connection allows Jest to exit successfully.
        mongoose.connection.close()
        done()
    })
})


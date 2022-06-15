

const {User} = require("../../src/domain/entities/user")
const {MongoUserRepository} = require("../../src/infra/MongoUserRepository")
const {UpdateUserUsecase} = require("../../src/domain/usecases/updateUserUsecase");
const {UserRepositoryMock} = require("../../src/infra/userRepositoryMock");




describe('mongoUserRepository', () => {
    it('should connect to Mongo', async () => {
        const repo = await MongoUserRepository.createConnection()
    }),

    it("should create a User", async () => {
        const repo = await MongoUserRepository.createConnection()
        const mockRepo = new UserRepositoryMock()

        user = mockRepo.users[0]

        await repo.createUser(user)
    })
})

describe("GetAndDelete", () => {
    it('should getUserData', async () => {
        const repo = await MongoUserRepository.createConnection()
        const mockRepo = new UserRepositoryMock()

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


    });
} )


jest.setTimeout(1000000);

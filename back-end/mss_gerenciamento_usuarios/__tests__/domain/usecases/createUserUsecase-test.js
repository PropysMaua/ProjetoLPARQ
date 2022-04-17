

const {User} = require("../../../src/domain/entities/user")
const {CreateUserUsecase} = require("../../../src/domain/usecases/createUserUsecase")
const {UserRepositoryMock} = require("../../../src/infra/userRepositoryMock")




describe('createUserUsecase', () => {
    it('should create a user', async () => {
        const repo = new UserRepositoryMock()


        let userMock = new User(
            {
                name: "Bruno Vilardi",
                nationality: "Brazilian",
                birthDate: "15/01/2001",
                gender: "M",
                currentLocation: {
                    city: "São Paulo",
                    country: "Brazil"
                },
                email: "bruno@bruno.com",
                phoneNumber: "+5511912345678",
                username: "brvila",
                password: "Teste123!"
            }
        )

        const createUserUsecase = new CreateUserUsecase(repo)
        const createdUser = await createUserUsecase.execute(userMock)
        expect(createdUser.username).toBe(userMock.username)
        expect(createdUser).toBe(userMock)


        // expect(async () => {await createUserUsecase.execute(userMock)}).toThrow(Error("User already exists"))
    })
    test('the fetch fails with an error', async () => {
        expect.assertions(1);
        let userMock = new User(
            {
                name: "Bruno Vilardi",
                nationality: "Brazilian",
                birthDate: "15/01/2001",
                gender: "M",
                currentLocation: {
                    city: "São Paulo",
                    country: "Brazil"
                },
                email: "bruno@bruno.com",
                phoneNumber: "+5511912345678",
                username: "brvila",
                password: "Teste123!"
            }
        )
        const repo = new UserRepositoryMock()
        const createUserUsecase = new CreateUserUsecase(repo)
        await createUserUsecase.execute(userMock)
        await createUserUsecase.execute(userMock).catch(e => expect(e).toMatch('User already exists'));
    });
})






const {User} = require("../../../src/domain/entities/user")
const {CreateUserUsecase} = require("../../../src/domain/usecases/createUserUsecase")
const {UserRepositoryMock} = require("../../../src/infra/userRepositoryMock")




describe('createUserUsecase', () => {
    it('should create a user', async () => {
        const repo = new UserRepositoryMock()


        let userMock = new User(
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

        const createUserUsecase = new CreateUserUsecase(repo)
        const createdUser = await createUserUsecase.execute(userMock)
        expect(createdUser.username).toBe(userMock.username)


        // expect(async () => {await createUserUsecase.execute(userMock)}).toThrow(Error("User already exists"))
    })
    test('the fetch fails with an error', async () => {
        expect.assertions(1);
        let userMock = new User(
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
        const repo = new UserRepositoryMock()
        const createUserUsecase = new CreateUserUsecase(repo)
        await createUserUsecase.execute(userMock)
        await createUserUsecase.execute(userMock).catch(e => expect(e).toMatch('User already exists'));
    });
})




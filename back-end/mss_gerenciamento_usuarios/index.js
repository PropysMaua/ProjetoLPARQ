const express = require('express')
const cors = require('cors')
const {UserRepositoryMock} = require("./src/infra/userRepositoryMock");
const {CreateUserController} = require("./src/adapters/controllers/createUserController");
const {HttpRequest, HttpResponse} = require("./src/adapters/helpers/httpHelpers");
const {UpdateUserController} = require("./src/adapters/controllers/updateUserController");
const {GetUserController} = require("./src/adapters/controllers/getUserController");
const { DeleteUserController } = require('./src/adapters/controllers/deleteUserController');
const {MongoUserRepository} = require("./src/infra/mongoUserRepository");
const {GetAllUsersController} = require("./src/adapters/controllers/getAllUsersController");
require('dotenv').config();

const app = express()
app.use(express.json())
app.use(cors())

const {
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_HOST,
    MONGO_CLUSTER,
} = process.env


const mongoConnectionURL = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.${MONGO_HOST}.mongodb.net/?retryWrites=true&w=majority`

// console.log(mongoConnectionURL)

const repo = MongoUserRepository.createConnection(mongoConnectionURL)


repo.then((repo) => {
    const createUserController = new CreateUserController(repo)
    const updateUserController = new UpdateUserController(repo)
    const getUserController = new GetUserController(repo)
    const deleteUserController = new DeleteUserController(repo)
    const getAllUsersController = new GetAllUsersController(repo)

    // Aqui ficam os Presenters

    // Presenter:
    // Ouve requisições nas rotas especificadas
    // Instancia um HttpRequest com os dados da requisição
    // Chama o Controller
    // Retorna um HttpResponse com o resultado da execução do Controller


    app.get('/', (req, res) => {
        res.send('Hello World!')
    })

    app.get('/user/getAll', async (req, res) => {
        console.log("GET /user/getAll Request Received")
        const request = new HttpRequest(req.body)
        const response = await getAllUsersController.execute(request)
        res.status(response.statusCode).json(response.body)
    })

    app.post('/user', async (req, res) => {
        const request = new HttpRequest(req.body)
        const response = await createUserController.execute(request)
        console.log("POST /user Request received: ", request)
        res.status(response.statusCode).json(response.body)
    })

    app.put('/user', async (req, res) => {
        const request = new HttpRequest(req.body, req.query)
        const response = await updateUserController.execute(request)
        console.log("PUT /user Request received: ", request)
        res.status(response.statusCode).json(response.body)
    })

    app.get('/user', async (req, res) => {
        const request = new HttpRequest({}, req.query, {})
        const response = await getUserController.execute(request)
        console.log("GET /user Request received: ", request)
        res.status(response.statusCode).json(response.body)
    })

    app.delete('/user', async (req, res) => {
        const request = new HttpRequest({}, req.query, {})
        const response = await deleteUserController.execute(request)
        console.log("DELETE /user Request received: ", request)
        res.status(response.statusCode).json(response.body)
    })


    app.listen(3001, () => {
        console.log('Mss gerenciamento de User. Listening on port 3000!')
    })
})

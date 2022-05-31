const express = require('express')
const cors = require('cors')
const {UserRepositoryMock} = require("./src/infra/userRepositoryMock");
const {CreateUserController} = require("./src/adapters/controllers/createUserController");
const {HttpRequest, HttpResponse} = require("./src/adapters/helpers/httpHelpers");
const {UpdateUserController} = require("./src/adapters/controllers/updateUserController");
const {GetUserController} = require("./src/adapters/controllers/getUserController");
const { DeleteUserController } = require('./src/adapters/controllers/deleteUserController');

const app = express()
app.use(express.json())
app.use(cors())
const repo = new UserRepositoryMock()
const createUserController = new CreateUserController(repo)
const updateUserController = new UpdateUserController(repo)
const getUserController = new GetUserController(repo)
const deleteUserController = new DeleteUserController(repo)

// Aqui ficam os Presenters

// Presenter:
// Ouve requisições nas rotas especificadas
// Instancia um HttpRequest com os dados da requisição
// Chama o Controller
// Retorna um HttpResponse com o resultado da execução do Controller


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user/getAll', (req, res) => {
    res.send(repo.users)
})

app.post('/user', async (req, res) => {
    const request = new HttpRequest(req.body)
    const response = await createUserController.execute(request)
    console.log("Request received: ", request)
    res.status(response.statusCode).json(response.body)
})

app.put('/user', async (req, res) => {
    const request = new HttpRequest(req.body)
    const response = await updateUserController.execute(request)
    res.status(response.statusCode).json(response.body)
})

app.get('/user', async (req, res) => {
    const request = new HttpRequest({},req.query,{})
    const response = await getUserController.execute(request)
    res.status(response.statusCode).json(response.body)
})

app.delete('/user', async (req, res) => {
    const request = new HttpRequest({}, req.query,{})
    const response = await deleteUserController.execute(request)
    res.status(response.statusCode).json(response.body)
})


app.listen(3000, () => {
  console.log('Mss gerenciamento de User. Listening on port 3000!')
})

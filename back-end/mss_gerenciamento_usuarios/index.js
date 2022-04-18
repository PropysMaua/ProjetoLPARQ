const express = require('express')
const {UserRepositoryMock} = require("./src/infra/userRepositoryMock");
const {CreateUserController} = require("./src/adapters/controllers/createUserController");
const {HttpRequest} = require("./src/adapters/helpers/httpHelpers");
const {UpdateUserController} = require("./src/adapters/controllers/updateUserController");
const {GetUserController} = require("./src/adapters/controllers/getUserController");
const { DeleteUserController } = require('./src/adapters/controllers/deleteUserController');

const app = express()
app.use(express.json())
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

app.post('/user', async (req, res) => {
    const request = new HttpRequest(req.body)
    const response = await createUserController.execute(request)
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

const express = require('express')
const {UserRepositoryMock} = require("./src/infra/userRepositoryMock");
const {CreateUserController} = require("./src/adapters/controllers/createUserController");
const {HttpRequest} = require("./src/adapters/helpers/httpHelpers");

const app = express()
app.use(express.json())
const repo = new UserRepositoryMock()
const createUserController = new CreateUserController(repo)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/user', async (req, res) => {
    const request = new HttpRequest(req.body)
    const response = await createUserController.execute(request)
    res.status(response.statusCode).json(response.body)
})


app.listen(3000, () => {
  console.log('Mss gerenciamento de User. Listening on port 3000!')
})

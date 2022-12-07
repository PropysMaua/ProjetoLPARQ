const express = require('express')
const cors = require('cors')
const {UserRepositoryMock} = require("./src/infra/userRepositoryMock");
const {HttpRequest, HttpResponse} = require("./src/adapters/helpers/httpHelpers");
const {MongoUserRepository} = require("./src/infra/mongoUserRepository");
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

  // Aqui ficam os Presenters

  // Presenter:
  // Ouve requisições nas rotas especificadas
  // Instancia um HttpRequest com os dados da requisição
  // Chama o Controller
  // Retorna um HttpResponse com o resultado da execução do Controller


  app.get('/', (req, res) => {
    res.send('Hello World from mss-busca!')
  })

  app.get('/search-user', async (req, res) => {
    console.log("GET /search-user Request Received")
    const city = req.query.city

    const users = await repo.getUsersByField("city", city)

    res.send(users)


  })




  app.listen(3002, () => {
    console.log('Mss busca. Listening on port 3000!')
  })
})

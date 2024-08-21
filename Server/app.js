import { loadHomePageData, signUp } from '../Server/Controllers/UserController.js'
import cors from "cors"
import express from 'express'

const app = express()
const router = express.Router()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api', router)

router.get('/', function (req, res) {
  res.send('Hello World')
})

router.get('/home', loadHomePageData)
router.post('/sign-up', signUp)

app.listen(3000)
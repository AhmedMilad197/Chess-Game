import userRouter from "./routes/UserRoutes.js"
import cors from "cors"
import express from 'express'

const app = express()
const router = express.Router()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/auth', userRouter)

app.listen(3000)
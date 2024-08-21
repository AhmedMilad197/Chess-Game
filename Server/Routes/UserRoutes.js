import express from 'express'
import { signUp } from '../Controllers/UserController.js'

const userRouter = express.Router()

userRouter.post('/sign-up', signUp)

export default userRouter

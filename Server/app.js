import { loadHomePageData } from '../Server/Controllers/UserController.js';
import express from 'express';
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/home', loadHomePageData)

app.listen(3000)
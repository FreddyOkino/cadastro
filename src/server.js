const express = require('express')

const perfilRoute = require('./routes/perfilRoute')
const loginRoute = require('./routes/loginRoute')
const app = express()

const db= require('./db/index')
const mongoose =require('mongoose')

db.connect()
app.use(express.json())

app.use("/perfil",perfilRoute)
app.use("/login", loginRoute)

module.exports = app
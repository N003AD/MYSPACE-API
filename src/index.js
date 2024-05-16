const express = require('express')
const bodyParser = require('body-parser')
const utilisateurRouter = require('./routes/utilisateurRouter')
const MessageRouter = require('./routes/messageRouter')
require('dotenv').config()


// instanciation de l'app
const app = express()

// Configurattion du bodyParser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Brancher les routes
app.use('/utilisateurs', utilisateurRouter)
app.use('/messages', MessageRouter)



app.listen(process.env.PORT || 3000)
console.log("Start Nodejs" + process.env.PORT || 3000);
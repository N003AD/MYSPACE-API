const express = require('express')
var bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    contenuHtml = `
        <html>
        <head>
            <title>Notre server</title>
        </head>
        <body>
            <div>
                <h1>Hello World!!!</h1>
            </div>
        </body>
        </html>
    `
    contenuJson = `
    {
        'message': 'Hello World'
    }
    `

     res.set('Content-Type', 'application/json');
     res.set("Server", "Myspace server");

  res.status(205).send(contenuJson)

})

app.listen(3000)
console.log("Start Nodejs");
const express = require('express')
var bodyParser = require('body-parser')


const path = require('path')
const app = express()


app.use(express.static(path.join(__dirname, 'static')))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Pour recupérer des informations dans le params on mets :filname
app.get('/static/:filename', function (req, res) {
    console.log("Valeur du params", req.params)
    console.log("Valeur du query", req.query)
    console.log("Valeur du body", req.body)
    console.log("Valeur du headers", req.headers)

// res.sendFile(path.join(__dirname, "static", "login.html"));
res.sendFile(path.join(__dirname, "static", req.params.filename));
})

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
const express = require("express");
const router = express.Router();
const ParametreRouter = require('../routes/parametreRouter')
const {json} = require("body-parser");

function callbackGetUser(req, res, rows) {
  
    console.log("rows", rows);
    res.set('Content-Type', 'application/json');
    res.set("Server", "Myspace server");
    res.status(200).send(rows)

}

router.use('/:id/parametres', ParametreRouter)

// Endpoints (GET)

router.get("/", function(req,res){
   // res.send("users");
    db.all("SELECT * FROM users",  (err, rows)=> {
        callbackGetUser(req, res, rows);
      } )
})

// Recupérer l'USER
router.get("/:id", (req,res)=>{
    res.send("user" + req.params.id)
})

// Endpoints 2
router.post('/', function (req, res) {
    const data = req.body;
    console.log('data from client', data);
    const Insert = `INSERT INTO users(firstname, lastname, login, password) VALUES('${data.firstname}','${data.lastname}', '${data.login}', '${data.password}')`;
    console.log('Insert', Insert);
    db.exec(Insert);

    userJson=data;

    res.set('Content-Type', 'application/json');
    res.set("Server", "Myspace server");

    res.status(201).send(userJson)
router.use('/parametres', ParametreRouter)

})

// Exporte notre module
module.exports = router;
 
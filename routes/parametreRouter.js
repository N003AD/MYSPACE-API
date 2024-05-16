const express = require("express");
const router = express.Router();
const db = require('../db')

function callbackGetUser(req, res, rows) {
  
    console.log("rows", rows);
    res.set('Content-Type', 'application/json');
    res.set("Server", "Myspace server");
    res.status(200).send(rows)

}
// Endpoints (GET)

router.get("/", function(req,res){
    res.send("Liste des parametres");

})

// Recupérer l'USER
router.get("/:id", (req,res)=>{
    res.send("parametre" + req.params.id)
})


// Exporte notre module
module.exports = router;
 
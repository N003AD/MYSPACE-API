const express = require("express");
const router = express.Router();



// Endpoints (GET)

router.get("/", function(req,res){
    res.send("Liste des messages");

})

// Recupérer l'USER
router.get("/:id", (req,res)=>{
    res.send("message" + req.params.id)
})


// Exporte notre module
module.exports = router;
 
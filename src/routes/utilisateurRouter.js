const express = require('express');
const userController= require('../controllers/userController'); 
const router = express.Router(); 

// Routage c'est pour faire le routage et brancher les controllers sur chaque endpoints
router.get('/', userController.getAll);
router.post('/', userController.create);
router.get('/:id', userController.getById);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

module.exports = router

const express = require('express')
const router = express.Router()
const contractController =   require('../controllers/contract.controller');
// Retrieve all contract
router.get('/', contractController.findAll);
// Create a new contract
router.post('/', contractController.create);
// Retrieve a single contract with id
// router.get('/:id', contractController.findById);
// Update a contract with id
router.put('/:id', contractController.update);
// Delete a contract with id
router.delete('/:id', contractController.delete);

module.exports = router
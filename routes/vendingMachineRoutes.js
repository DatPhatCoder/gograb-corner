const express = require('express');

const router = express.Router();
const vendingMachineController = require('../controllers/vendingMachineController');

// Routing for vending machine
router.post('/vendingMachineController', vendingMachineController.foo);

module.exports = router;
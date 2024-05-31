const express = require('express');

const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Routing for inventory
router.post('/inventoryController', inventoryController.foo);

module.exports = router;
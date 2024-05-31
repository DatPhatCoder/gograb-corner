const express = require('express');

const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Routing for inventory
router.get('/inventoryController', inventoryController.getInventory);
router.get('/getInventory', inventoryController.getInventory);

router.post('/addInventory', inventoryController.addInventory);
router.post('/removeInventory', inventoryController.removeInventory);


module.exports = router;
const express = require('express');

const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Routing for inventory
router.get('/inventoryController', inventoryController.getInventory);
router.get('/getInventory', inventoryController.getInventory);

router.post('/addInventory', inventoryController.addInventory);
router.put('/updateInventory', inventoryController.updateInventory);
router.delete('/removeInventory', inventoryController.removeInventory);



module.exports = router;
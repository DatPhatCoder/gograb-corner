const express = require('express');

const router = express.Router();
const locationController = require('../controllers/locationController');

// Routing for location
router.post('/locationController', locationController.foo);

module.exports = router;
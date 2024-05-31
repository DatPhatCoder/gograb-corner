const express = require('express');

const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Routing for location
router.post('/paymentController', paymentController.foo);

module.exports = router;
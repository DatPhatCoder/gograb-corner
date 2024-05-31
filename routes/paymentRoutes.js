const express = require('express');

const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Routing for location
router.post('/paymentController', paymentController.postPayment);
router.post('/postPayment', paymentController.postPayment);

module.exports = router;
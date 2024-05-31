const express = require('express');

const router = express.Router();
const checkoutController = require('../controllers/checkoutController');

// Route for checkout
router.post('/checkoutController', checkoutController.foo);

module.exports = router;
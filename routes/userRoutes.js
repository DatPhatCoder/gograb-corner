const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');

// Route for user signup
router.post('/userController', userController.foo);

module.exports = router;
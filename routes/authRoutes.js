//demo - authRoutes - brief idea of what needs to be done with each module

//use 3rd party api for google login
//use 3rd party api for hashing password too

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route for user signup
router.post('/signup', authController.signup);

// Route for user login
router.post('/login', authController.login);

module.exports = router;

// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/authController');
const validateSignup = require('../middleware/validateSignup');

router.post('/register', validateSignup, registerUser);

module.exports = router;

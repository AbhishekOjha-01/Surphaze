// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, login } = require('../controllers/authController');
const validateSignup = require('../middleware/validateSignup');

router.post('/register', validateSignup, registerUser);
router.post('/login', login);
module.exports = router;

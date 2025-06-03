const express = require('express');
const router = express.Router();
const { submitEmailQuery } = require('../controllers/emailController');

router.post('/emailquery', submitEmailQuery);

module.exports = router;

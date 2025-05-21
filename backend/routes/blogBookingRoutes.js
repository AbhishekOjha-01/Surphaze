const express = require('express');
const router = express.Router();
const { createBooking } = require('../controllers/blogBookingController');

router.post('/blogbook', createBooking);

module.exports = router;

const express = require('express');
const router = express.Router();
const { createBooking } = require('../controllers/webDevBookingController');

router.post('/webdevbook', createBooking);

module.exports = router;

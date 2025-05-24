const express = require('express');
const router = express.Router();
const { createBooking } = require('../controllers/eComBookingController');

router.post('/ecombook', createBooking);

module.exports = router;

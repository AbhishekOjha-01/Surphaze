const express = require('express');
const router = express.Router();
const { createBooking } = require('../controllers/seoBookingController');

// POST /api/seoBookings
router.post('/seobook', createBooking);

module.exports = router;

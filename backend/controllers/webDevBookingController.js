const WebDevBooking = require('../models/WebDevBooking');
const { sendWebDevBookingEmail } = require('../utils/mailer');
const createBooking = async (req, res) => {
  try {
    const newBooking = new WebDevBooking(req.body);
    await newBooking.save();
    await sendWebDevBookingEmail(req.body);
    res.status(201).json({ message: "Web Development Booking done successfully!" });
  } catch (err) {
    console.error('Error saving booking:', err.message);
    res.status(500).json({ message: "Failed to book web development service. Try again later." });
  }
};

module.exports = { createBooking };

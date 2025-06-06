const EcommerceBooking = require('../models/EcomBooking');
const { sendEcommerceBookingEmail } = require('../utils/mailer');

const createBooking = async (req, res) => {
  try {
    const newBooking = new EcommerceBooking(req.body);
    await newBooking.save();
    await sendEcommerceBookingEmail(req.body);
    res.status(201).json({ message: 'E-Commerce Website booking successful!' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error while booking' });
  }
};

module.exports = { createBooking };

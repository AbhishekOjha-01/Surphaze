const BlogBooking = require('../models/BlogBooking');

const createBooking = async (req, res) => {
  try {
    const newBooking = new BlogBooking(req.body);
    await newBooking.save();
    res.status(201).json({ message: "Blog Booking done successfully!" });
  } catch (err) {
    console.error('Error saving booking:', err.message);
    res.status(500).json({ message: "Failed to book blog. Try again later." });
  }
};

module.exports = { createBooking };

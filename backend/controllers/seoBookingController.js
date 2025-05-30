const SeoBooking = require('../models/SeoBooking');

exports.createBooking = async (req, res) => {
  try {
    const booking = new SeoBooking(req.body);
    await booking.save();
    res.status(201).json({ message: 'SEO Booking submitted successfully!' });
  } catch (err) {
    console.error('Error saving SEO Booking:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

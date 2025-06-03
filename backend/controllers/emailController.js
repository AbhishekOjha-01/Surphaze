const EmailQuery = require('../models/EmailQuery');
const { sendEmailQueryToAdmin } = require('../utils/mailer');
const submitEmailQuery = async (req, res) => {
  try {
    const { fname, email, query } = req.body;

    if (!fname || !email || !query) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newQuery = new EmailQuery({ fname, email, query });
    await newQuery.save();
    await sendEmailQueryToAdmin({ fname, email, query });


    res.status(200).json({ message: 'Your message has been received!' });
  } catch (error) {
    console.error('Error saving email query:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

module.exports = { submitEmailQuery };
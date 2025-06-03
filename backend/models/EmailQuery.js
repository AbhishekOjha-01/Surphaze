const mongoose = require('mongoose');

const emailQuerySchema = new mongoose.Schema({
  fname: { type: String, required: true },
  email: { type: String, required: true },
  query: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('EmailQuery', emailQuerySchema);

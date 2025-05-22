const mongoose = require('mongoose');

const blogBookingSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String },
  topic: { type: String, required: true },
  description: { type: String },
  wordCount: { type: Number },
  budget: { type: String },
  deadline: { type: Date },
  comments: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('BlogBooking', blogBookingSchema);

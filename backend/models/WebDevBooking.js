const mongoose = require('mongoose');

const webDevBookingSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  businessName: { type: String },
  websiteType: { type: String },
  hasWebsite: { type: String },
  projectGoals: { type: String },
  designPreferences: { type: String },
  numPages: { type: Number },
  budget: { type: String },
  deadline: { type: Date },
  comments: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('WebDevBooking', webDevBookingSchema);

// models/SeoBooking.js
const mongoose = require('mongoose');

const seoBookingSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String },
  business: { type: String, required: true },
  websiteUrl: { type: String, required: true },
  seoGoals: { type: String },
  targetAudience: { type: String },
  keywords: { type: String, required: true },
  competitors: { type: String, required: true },
  currentSeoStatus: { type: String, enum: ['none', 'basic', 'advanced'], required: true },
  budget: { type: String },
  deadline: { type: Date },
  comments: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('SeoBooking', seoBookingSchema);

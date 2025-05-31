const mongoose = require('mongoose');

const EcommerceBookingSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String },
  businessName: { type: String, required: true },
  industry: { type: String, required: true },
  productsCount: { type: Number, required: true },
  paymentGateway: { type: String },
  shipping: { type: String, required: true },
  designPreferences: { type: String },
  budget: { type: String },
  deadline: { type: Date },
  comments: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('EcommerceBooking', EcommerceBookingSchema);

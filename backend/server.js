// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const authRoutes = require('./routes/authRoutes');
const blogBookingRoutes = require('./routes/blogBookingRoutes');
const webDevBookingRoutes = require('./routes/webDevBookingRoutes');
const eComBookingRoutes = require('./routes/eComBookingRoutes');

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/blogBookings', blogBookingRoutes);
app.use('/api/webDevBookings', webDevBookingRoutes);
app.use('/api/eComBookings', eComBookingRoutes);

// DB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("DB Error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

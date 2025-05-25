const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email provider
  auth: {
    user: process.env.ADMIN_EMAIL,      // Your admin email
    pass: process.env.ADMIN_EMAIL_PASS  // Your email app password
  }
});

// Function to send blog booking details via email

const sendBlogBookingMail = async (bookingData) => {
  const {
    fname, lname, email, topic, description, wordCount, budget, deadline, comments
  } = bookingData;

  const mailOptions = {
    from: process.env.ADMIN_EMAIL,
    to: process.env.ADMIN_EMAIL, 
    subject: `New Blog Booking Details from ${fname} ${lname}`,
    html: `
      <h2>New Blog Booking Details</h2>
      <p><strong>Name:</strong> ${fname} ${lname}</p>
      <p><strong>User Email:</strong> ${email}</p>
      <p><strong>Topic:</strong> ${topic}</p>
      <p><strong>Description:</strong> ${description || 'N/A'}</p>
      <p><strong>Word Count:</strong> ${wordCount || 'N/A'}</p>
      <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
      <p><strong>Deadline:</strong> ${deadline ? new Date(deadline).toLocaleDateString() : 'N/A'}</p>
      <p><strong>Comments:</strong> ${comments || 'None'}</p>
    `
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendBlogBookingMail };

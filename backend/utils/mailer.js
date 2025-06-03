const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email provider
  auth: {
    user: process.env.ADMIN_EMAIL,      //  admin email
    pass: process.env.ADMIN_EMAIL_PASS  // admin email app password
  }
});

// Function to send blog booking details via email
const sendBlogBookingMail = async (bookingData) => {
  const {
    fname, lname, email, topic, description, wordCount, budget, deadline, comments
  } = bookingData;

  const mailOptions = {
    from: email ,
    to: process.env.ADMIN_EMAIL,
    bcc: email,
    replyTo: email,
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


// Function to send web development booking details via email
const sendWebDevBookingEmail = async (bookingData) => {
  const {
    fname, lname, email, businessName, websiteType, hasWebsite, projectGoals, designPreferences, numPages, 
    budget, deadline, comments
  } = bookingData;

  const mailOptions = {
    from: email,
    to: process.env.ADMIN_EMAIL,
    bcc: email,
    replyTo: email,
    subject: `New Web Development Booking from ${fname} ${lname}`,
    html: `
      <h2>New Web Development Booking Details</h2>
      <p><strong>Name:</strong> ${fname} ${lname}</p>
      <p><strong>User Email:</strong> ${email}</p>
      <p><strong>Business Name:</strong> ${businessName || 'N/A'}</p>
      <p><strong>Website Type:</strong> ${websiteType || 'N/A'}</p>
      <p><strong>Has Existing Website:</strong> ${hasWebsite || 'N/A'}</p>
      <p><strong>Project Goals:</strong> ${projectGoals || 'N/A'}</p>
      <p><strong>Design Preferences:</strong> ${designPreferences || 'N/A'}</p>
      <p><strong>Number of Pages:</strong> ${numPages !== undefined ? numPages : 'N/A'}</p>
      <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
      <p><strong>Deadline:</strong> ${deadline ? new Date(deadline).toLocaleDateString() : 'N/A'}</p>
      <p><strong>Comments:</strong> ${comments || 'None'}</p>
    `
  };

  await transporter.sendMail(mailOptions);
};

// Function to send e-commerce booking details via email
const sendEcommerceBookingEmail = async (bookingData) => {
  const {
    fname, lname, email, businessName, industry, productsCount, paymentGateway,
    shipping, designPreferences, budget, deadline, comments
  } = bookingData;

  const mailOptions = {
    from: email,
    to: process.env.ADMIN_EMAIL,
    bcc: email,
    replyTo: email,
    subject: `New E-commerce Booking from ${fname} ${lname}`,
    html: `
      <h2>New E-commerce Booking Details</h2>
      <p><strong>Name:</strong> ${fname} ${lname}</p>
      <p><strong>User Email:</strong> ${email || 'N/A'}</p>
      <p><strong>Business Name:</strong> ${businessName}</p>
      <p><strong>Industry:</strong> ${industry}</p>
      <p><strong>Number of Products:</strong> ${productsCount}</p>
      <p><strong>Preferred Payment Gateway:</strong> ${paymentGateway || 'N/A'}</p>
      <p><strong>Shipping Preferences:</strong> ${shipping}</p>
      <p><strong>Design Preferences:</strong> ${designPreferences || 'N/A'}</p>
      <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
      <p><strong>Deadline:</strong> ${deadline ? new Date(deadline).toLocaleDateString() : 'N/A'}</p>
      <p><strong>Comments:</strong> ${comments || 'None'}</p>
    `
  };

  await transporter.sendMail(mailOptions);
};

// Function to send seo booking details via email
const sendSeoBookingEmail = async (bookingData) => {
  const {
    fname, lname, email, business, websiteUrl, seoGoals, targetAudience,
    keywords, competitors, currentSeoStatus, budget, deadline, comments
  } = bookingData;

  const mailOptions = {
    from: email,
    to: process.env.ADMIN_EMAIL,
    bcc: email,
    replyTo: email,
    subject: `New SEO Booking from ${fname} ${lname}`,
    html: `
      <h2>New SEO Booking Details</h2>
      <p><strong>Name:</strong> ${fname} ${lname}</p>
      <p><strong>User Email:</strong> ${email || 'N/A'}</p>
      <p><strong>Business:</strong> ${business}</p>
      <p><strong>Website URL:</strong> ${websiteUrl}</p>
      <p><strong>SEO Goals:</strong> ${seoGoals || 'N/A'}</p>
      <p><strong>Target Audience:</strong> ${targetAudience || 'N/A'}</p>
      <p><strong>Target Keywords:</strong> ${keywords}</p>
      <p><strong>Top Competitors:</strong> ${competitors}</p>
      <p><strong>Current SEO Status:</strong> ${currentSeoStatus}</p>
      <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
      <p><strong>Deadline:</strong> ${deadline ? new Date(deadline).toLocaleDateString() : 'N/A'}</p>
      <p><strong>Comments:</strong> ${comments || 'None'}</p>
    `
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendBlogBookingMail, sendWebDevBookingEmail, sendEcommerceBookingEmail, sendSeoBookingEmail };

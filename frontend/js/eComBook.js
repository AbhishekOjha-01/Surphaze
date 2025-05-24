document.getElementById('eComForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const data = {
  fname: document.getElementById('fname').value,
  lname: document.getElementById('lname').value,
  email: document.getElementById('email').value,
  businessName: document.getElementById('business-ecom').value,
  industry: document.getElementById('industry-ecom').value,
  productsCount: parseInt(document.getElementById('products-count').value),
  paymentGateway: document.getElementById('paymentGateway').value,
  shipping: document.getElementById('shipping').value,
  design: document.getElementById('design-ecom').value,
  budget: document.getElementById('budget-ecom').value,
  deadline: document.getElementById('deadline-ecom').value,
  comments: document.getElementById('comments-ecom').value,
};

  try {
    const response = await fetch('http://localhost:5000/api/eComBookings/ecombook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (response.ok) {
      alert(result.message);
      document.getElementById('eComForm').reset();
    } else {
      alert(result.message || 'Booking failed!');
    }
  } catch (err) {
    alert('An error occurred. Please try again.');
    console.error(err);
  }
});

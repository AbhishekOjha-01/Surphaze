document.getElementById('webDevForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const data = {
  fname: document.getElementById('fname').value,
  lname: document.getElementById('lname').value,
  email: document.getElementById('email').value,
  businessName: document.getElementById('businessName').value,
  websiteType: document.getElementById('websiteType').value,
  hasWebsite: document.getElementById('hasWebsite').value,
  goals: document.getElementById('goals').value,
  designPreferences: document.getElementById('design').value,
  pages: parseInt(document.getElementById('pages').value),
  budget: document.getElementById('budget').value,
  deadline: document.getElementById('deadline').value,
  comments: document.getElementById('comments').value,
};

  try {
    const response = await fetch('http://localhost:5000/api/webDevBookings/webdevbook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
      alert(result.message);
      document.getElementById('webDevForm').reset();
      window.location.href = 'index.html';
    } else {
      alert(result.message || 'Booking failed!');
    }
  } catch (err) {
    alert('An error occurred. Please try again.');
    console.error(err);
  }
});

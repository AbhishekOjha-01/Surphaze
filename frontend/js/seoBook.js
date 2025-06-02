document.getElementById('seoForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const data = {
    fname: document.getElementById('fname-seo').value,
    lname: document.getElementById('lname-seo').value,
    email: document.getElementById('email-seo').value,
    business: document.getElementById('business-seo').value,
    websiteUrl: document.getElementById('website-url').value,
    seoGoals: document.getElementById('seo-goals').value,
    targetAudience: document.getElementById('target-audience').value,
    keywords: document.getElementById('keywords').value,
    competitors: document.getElementById('competitors').value,
    currentSeoStatus: document.getElementById('current-seo-status').value,
    budget: document.getElementById('budget-seo').value,
    deadline: document.getElementById('deadline-seo').value,
    comments: document.getElementById('comments-seo').value
  };

  try {
    const response = await fetch('http://localhost:5000/api/seoBookings/seobook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
      alert(result.message);
      document.getElementById('seoForm').reset();
      window.location.href = 'index.html';
    } else {
      alert(result.message || 'SEO Booking failed!');
    }
  } catch (err) {
    alert('An error occurred. Please try again.');
    console.error(err);
  }
});

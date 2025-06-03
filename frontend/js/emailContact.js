document.getElementById('emailForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const fname = document.getElementById('fname-con').value;
  const email = document.getElementById('email-con').value;
  const query = document.getElementById('query').value;

  const data = { fname, email, query };

  try {
    const response = await fetch('http://localhost:5000/api/emailQueries/emailquery', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
      alert(result.message);
      document.getElementById('emailForm').reset();
      window.location.href = 'index.html';
    } else {
      alert(result.message || 'Failed to send message.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong. Please try again later.');
  }
});

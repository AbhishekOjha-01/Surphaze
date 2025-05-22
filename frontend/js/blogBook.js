document.getElementById('blogForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const data = {
      fname: document.querySelector('input[placeholder="First name"]').value,
      lname: document.querySelector('input[placeholder="Last name"]').value,
      email: document.querySelector('input[placeholder="Enter Email here"]').value,
      topic: document.querySelector('input[placeholder="Blog Topic"]').value,
      description: document.querySelector('textarea[placeholder="Describe your Topic"]').value,
      wordCount: parseInt(document.querySelector('input[placeholder="Enter Word Count"]').value),
      budget: document.getElementById('budget').value,
      deadline: document.getElementById('deadline').value,
      comments: document.getElementById('comments').value,
    };

    try {
      const response = await fetch('http://localhost:5000/api/blogBookings/blogbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        document.getElementById('blogForm').reset();
        window.location.href = 'index.html';
      } else {
        alert(result.message || 'Booking failed!');
      }
    } catch (err) {
      alert('An error occurred. Please try again.');
      console.error(err);
    }
  });
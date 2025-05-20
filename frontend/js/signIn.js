document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login-form');

  if (loginForm) {
    loginForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      const data = {
        email: document.getElementById('login-email').value.trim(),
        password: document.getElementById('login-password').value
      };

      try {
        const response = await fetch('http://localhost:5000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
          alert(result.msg || 'Login successful!');
          closeForm('loginPopup');
          loginForm.reset();
          // Optionally store token
          localStorage.setItem('token', result.token);
        } else {
          alert(result.msg || 'Login failed!');
        }

      } catch (error) {
        console.error('Login Error:', error);
        alert('Something went wrong. Try again later.');
      }
    });
  }
});

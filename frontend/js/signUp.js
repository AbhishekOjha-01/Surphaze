document.addEventListener('DOMContentLoaded', function () {
  const registerForm = document.getElementById('register-form');

  if (registerForm) {
    registerForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      const data = {
        fullname: document.getElementById('register-name').value.trim(),
        username: document.getElementById('register-username').value.trim(),
        email: document.getElementById('register-email').value.trim(),
        password: document.getElementById('register-password').value
      };

      try {
        const response = await fetch('http://localhost:5000/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
          alert(result.msg || 'Registration successful!');
          closeForm('registerPopup');
          registerForm.reset();
        } else {
          alert(result.msg || 'Something went wrong.');
        }

      } catch (error) {
        console.error('Signup Error:', error);
        alert('Failed to register. Please try again later.');
      }
    });
  }
});

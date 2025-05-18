document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.nav-links a[data-form]');
  const allForms = document.querySelectorAll('.form');
  const urlParams = new URLSearchParams(window.location.search);
  const formId = urlParams.get('form');

  if(formId) {
    allForms.forEach(form => {
      if(form.id === formId) {
        form.classList.remove('hidden');
      }
      else {
        form.classList.add('hidden');
      }
    });
  };

  // Navbar links logic
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-form');

      // Hide all forms
      allForms.forEach(form => form.classList.add('hidden'));

      // Show the selected form
      const targetForm = document.getElementById(targetId);
      if (targetForm) {
        targetForm.classList.remove('hidden');
      }
    });
  });
});


// toggle button


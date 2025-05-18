function openForm(formId) {
  closeAllForms(); // Hide any open forms first
  document.getElementById(formId).style.display = "block";
  document.getElementById(formId).classList.add("show");
  document.getElementById("overlay").classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeForm(formId) {
  document.getElementById(formId).style.display = "none"; 
  document.getElementById(formId).classList.remove("show");
  document.getElementById("overlay").classList.remove("show");
  document.body.style.overflow = "auto";
}

function switchForm(targetFormId) {
  closeAllForms();
  openForm(targetFormId);
}

function closeAllForms() {
  document.getElementById('loginPopup').style.display = "none";
  document.getElementById('registerPopup').style.display = "none";
  document.body.style.overflow = "auto";
}


// switch between sections

function switchToRegister() {
  closeForm('loginPopup');
  openForm('registerPopup');
}

function switchToLogin() {
  closeForm('registerPopup');
  openForm('loginPopup');
}

// zero to number animation


  const counters = document.querySelectorAll('.counter');

  const options = {
    threshold: 0.7,
  };

  const startCount = (counter) => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const increment = target / 200; // lower number higher speed

    const updateCount = () => {
      count += increment;
      if (count < target) {
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target + '+'; 
      }
    };

    updateCount();
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        startCount(counter);
        observer.unobserve(counter);
      }
    });
  }, options);

  counters.forEach((counter) => {
    observer.observe(counter);
  });


// nav bar bg when scrolling starts

window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Text animation No glitch just glory

window.addEventListener('DOMContentLoaded', () => {
  const textElement = document.querySelector('.animated-text');
  const letters = textElement.textContent.split('');
  textElement.textContent = '';

  letters.forEach((char, i) => {
    const span = document.createElement('span');
    span.innerHTML = char === ' ' ? '&nbsp;' : char;
    textElement.appendChild(span);

    setTimeout(() => {
      span.classList.add('show');
    }, i * 100); // Delay per letter
  });
});


// modal popup logic

/*=============== CARD POPUP JS ===============*/
const modal = document.querySelectorAll('.modal'),
      cardBtn = document.querySelectorAll('.card'),
      modalClose = document.querySelectorAll('.modal-close'),
      modalCard = document.querySelectorAll('.modal-card')

let activeModal = (modalClick) =>{
   modal[modalClick].classList.add('active-modal')
}

/* Show modal */
cardBtn.forEach((cardBtn, i) =>{
   cardBtn.addEventListener('click', () =>{
      activeModal(i);
   })
})

/* Hide modal */
modalClose.forEach((modalClose) =>{
   modalClose.addEventListener('click', () => {
       modal.forEach((modalRemove) => {
           modalRemove.classList.remove('active-modal')
       })
   })
})

/* Hide modal on background click */
modal.forEach((modal) =>{
   modal.addEventListener('click', () =>{
      modal.classList.remove('active-modal')
   })
})

/* Don't hide modal on card click (by event propagation) */
modalCard.forEach((modalCard) =>{
   modalCard.addEventListener('click', (e) =>{
      e.stopPropagation()
   })
})


// toggle button 
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
  document.querySelector('.btn').classList.toggle('active');
  document.body.classList.toggle('blurred');
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('active');
    document.querySelector('.btn').classList.remove('active');
    document.body.classList.remove('blurred');
  });
});


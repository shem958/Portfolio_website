// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form validation
  const form = document.querySelector('#contact-form');
  const emailInput = document.querySelector('#email');
  
  form.addEventListener('submit', function (e) {
    e.preventDefault();
  
    if (!validateEmail(emailInput.value)) {
      emailInput.classList.add('error');
      emailInput.nextElementSibling.textContent = 'Please enter a valid email address.';
    } else {
      // Submit the form
      this.submit();
    }
  });
  
  function validateEmail(email) {
    // Email validation logic
    // Return true if valid, false otherwise
  }
  
  // Responsive navigation
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  
  menuToggle.addEventListener('click', function () {
    menu.classList.toggle('open');
  });
  
  // Image slideshow
  const slides = document.querySelectorAll('.slideshow .slide');
  let currentSlide = 0;
  
  function showSlide(slideIndex) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[slideIndex].classList.add('active');
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  
  function previousSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }
  
  // Add event listeners to next and previous buttons
  const nextButton = document.querySelector('.next-button');
  const previousButton = document.querySelector('.previous-button');
  
  nextButton.addEventListener('click', nextSlide);
  previousButton.addEventListener('click', previousSlide);
  
  // Show the first slide initially
  showSlide(currentSlide);
  
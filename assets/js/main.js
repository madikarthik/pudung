document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
  
  // Mobile menu functionality
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const body = document.body;
  
  if (mobileMenuToggle && mobileMenu) {
    // Set animation delays for mobile menu items
    const mobileNavItems = document.querySelectorAll('.mobile-nav-list li');
    mobileNavItems.forEach((item, index) => {
      item.style.setProperty('--item-index', index + 1);
    });

    mobileMenuToggle.addEventListener('click', function() {
      body.classList.toggle('menu-active');
      mobileMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        body.classList.remove('menu-active');
        mobileMenu.classList.remove('active');
      });
    });
  }
  
  // Header scroll effect with smooth transition
  const header = document.getElementById('site-header');
  let lastScroll = 0;
  
  function handleScroll() {
    const currentScroll = window.scrollY;
    
    if (currentScroll > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  }
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initialize on page load

  // Testimonials functionality
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  const testimonialDots = document.querySelectorAll('.testimonial-dot');
  let currentTestimonial = 0;

  function showTestimonial(index) {
    testimonialSlides.forEach(slide => slide.style.display = 'none');
    testimonialDots.forEach(dot => dot.classList.remove('active'));
    
    testimonialSlides[index].style.display = 'flex';
    testimonialDots[index].classList.add('active');
    currentTestimonial = index;
  }

  // Initialize testimonials if they exist
  if (testimonialSlides.length > 0) {
    showTestimonial(0);

    // Add click handlers for dots
    testimonialDots.forEach((dot, index) => {
      dot.addEventListener('click', () => showTestimonial(index));
    });

    // Add click handlers for prev/next buttons
    const prevButton = document.querySelector('.prev-testimonial');
    const nextButton = document.querySelector('.next-testimonial');

    if (prevButton && nextButton) {
      prevButton.addEventListener('click', () => {
        let index = currentTestimonial - 1;
        if (index < 0) index = testimonialSlides.length - 1;
        showTestimonial(index);
      });

      nextButton.addEventListener('click', () => {
        let index = currentTestimonial + 1;
        if (index >= testimonialSlides.length) index = 0;
        showTestimonial(index);
      });
    }
  }

  // Animation on scroll functionality
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });
  
  animatedElements.forEach(el => {
    observer.observe(el);
  });
});
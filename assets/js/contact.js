document.addEventListener('DOMContentLoaded', function() {
  // Set animation order for info cards
  const infoCards = document.querySelectorAll('.info-card');
  infoCards.forEach((card, index) => {
    card.style.setProperty('--animation-order', index + 1);
  });

  // Form validation and submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = {
        name: this.name.value,
        email: this.email.value,
        subject: this.subject.value,
        message: this.message.value
      };

      // Show loading state
      const submitButton = this.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';

      // Simulate form submission (replace with actual EmailJS implementation)
      setTimeout(() => {
        const formStatus = document.getElementById('formStatus');
        formStatus.className = 'form-status success';
        formStatus.textContent = 'Thank you! Your message has been sent successfully.';
        
        // Reset form and button
        contactForm.reset();
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }, 1500);
    });
  }

  // Input animations
  const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
  formInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
      if (!this.value) {
        this.parentElement.classList.remove('focused');
      }
    });
  });
});
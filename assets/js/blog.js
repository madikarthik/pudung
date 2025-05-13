document.addEventListener('DOMContentLoaded', function() {
  // Set animation order for blog posts
  const blogPosts = document.querySelectorAll('.blog-post');
  blogPosts.forEach((post, index) => {
    post.style.setProperty('--animation-order', index + 1);
  });

  // Newsletter form submission
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      // Add your newsletter subscription logic here
      console.log('Newsletter subscription:', email);
      this.reset();
      alert('Thank you for subscribing!');
    });
  }

  // Pagination functionality
  const paginationButtons = document.querySelectorAll('.pagination-btn');
  paginationButtons.forEach(button => {
    button.addEventListener('click', function() {
      paginationButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      // Add your pagination logic here
    });
  });
});
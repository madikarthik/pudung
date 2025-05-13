document.addEventListener('DOMContentLoaded', function() {
  // Set animation order for team members
  const teamMembers = document.querySelectorAll('.team-member');
  teamMembers.forEach((member, index) => {
    member.style.setProperty('--animation-order', index + 1);
  });

  // Set animation order for timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    item.style.setProperty('--animation-order', index + 1);
    item.style.setProperty('--slide-start', 
      item.classList.contains('even') ? '50px' : '-50px'
    );
  });

  // Intersection Observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, {
    threshold: 0.1
  });

  // Observe elements
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
});
// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop - 80, // Adjust for fixed header
        behavior: 'smooth'
      });
    });
  });

  // Project Modal Functionality
  function openModal(id) {
    document.getElementById(id).style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }

  function closeModal(id) {
    document.getElementById(id).style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  }

  // Assign modal functions to window for HTML onclick
  window.openModal = openModal;
  window.closeModal = closeModal;

  // Close modal when clicking outside content
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        closeModal(this.id);
      }
    });
  });

  // Form Validation
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic validation
      const name = this.elements[0].value.trim();
      const email = this.elements[1].value.trim();
      const message = this.elements[2].value.trim();
      
      if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
      }
      
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address');
        return;
      }
      
      // Form submission success
      alert('Thank you for your message! I will get back to you soon.');
      this.reset();
    });
  }

  // Animate sections on scroll
  const animateOnScroll = () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight - 100) {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }
    });
  };

  // Set initial state for animation
  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease';
  });

  // Trigger animations on load and scroll
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
});

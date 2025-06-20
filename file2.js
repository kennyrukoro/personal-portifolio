// Mobile menu toggle
const mobileMenuToggle = () => {
    const nav = document.querySelector('#main-nav');
    nav.classList.toggle('active');
};

// Form validation
const validateForm = (form) => {
    // Validate contact form fields
    // Show success/error messages
};

// Project modal functionality
const setupProjectModals = () => {
    // Open/close modals for project details
};

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize all functionality when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    mobileMenuToggle();
    validateForm();
    setupProjectModals();
});
// Main Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuBtn && navMenu) {
      mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.classList.toggle('fa-times');
        this.classList.toggle('fa-bars');
      });
    }
  
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          mobileMenuBtn.classList.remove('fa-times');
          mobileMenuBtn.classList.add('fa-bars');
        }
      });
    });
  
    // Sticky Header
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });
  
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerHeight = document.querySelector('header').offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Newsletter Form Submission
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        // Here you would typically send the data to your server
        console.log('Subscribed with email:', email);
        
        // Show success message
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
      });
    }
  
    // Project Gallery Navigation
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
      item.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn')) return;
        const link = this.querySelector('a');
        if (link) {
          window.location.href = link.href;
        }
      });
    });
  
    // Animation Trigger
    const animateElements = document.querySelectorAll('.animate');
    
    function checkAnimation() {
      animateElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add('animated');
        }
      });
    }
    
    // Initialize on load
    checkAnimation();
    
    // Add scroll event listener
    window.addEventListener('scroll', checkAnimation);
  });
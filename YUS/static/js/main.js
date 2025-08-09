// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navMenu = document.querySelector('nav ul');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenu.querySelector('i').classList.toggle('fa-bars');
    mobileMenu.querySelector('i').classList.toggle('fa-times');
});

function toggleMenu() {
    document.getElementById("dropdown").classList.toggle("show");
  }

  // Optional: Close menu when clicking outside
  window.onclick = function(event) {
    if (!event.target.closest('.mobile-menu')) {
      document.getElementById("dropdown").classList.remove("show");
    }
  }
// Language Toggle
const languageToggle = document.getElementById('languageToggle');
const body = document.body;

languageToggle.addEventListener('click', () => {
    if (body.classList.contains('rtl')) {
        body.classList.remove('rtl');
        languageToggle.querySelector('span').textContent = 'English';
    } else {
        body.classList.add('rtl');
        languageToggle.querySelector('span').textContent = 'العربية';
    }
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 100);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenu.querySelector('i').classList.add('fa-bars');
                mobileMenu.querySelector('i').classList.remove('fa-times');
            }
        }
    });
});

// Stats counter animation
const startCounter = () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        let count = 0;
        const increment = Math.ceil(target / 100);
        
        const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
                stat.textContent = target + (stat.hasAttribute('data-add-plus') ? '+' : '');
                clearInterval(timer);
            } else {
                stat.textContent = count;
            }
        }, 20);
    });
};

// Initialize counter when stats section is in view
const statsSection = document.querySelector('.stats, .project-stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter();
                statsObserver.disconnect();
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

// Scroll animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('[data-animate]');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('animated');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Testimonial slider
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const testimonialPrev = document.querySelector('.testimonial-prev');
const testimonialNext = document.querySelector('.testimonial-next');
let currentSlide = 0;

if (testimonialSlides.length > 0) {
    function showSlide(index) {
        testimonialSlides.forEach(slide => slide.classList.remove('active'));
        testimonialSlides[index].classList.add('active');
        currentSlide = index;
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonialSlides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
        showSlide(currentSlide);
    }
    
    if (testimonialPrev && testimonialNext) {
        testimonialPrev.addEventListener('click', prevSlide);
        testimonialNext.addEventListener('click', nextSlide);
    }
    
    // Auto-advance slides
    setInterval(nextSlide, 5000);
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length > 0) {
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('#name').value;
        const email = this.querySelector('#email').value;
        const message = this.querySelector('#message').value;
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', { name, email, message });
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Newsletter form
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        // Here you would typically send the email to your newsletter service
        console.log('Newsletter subscription:', email);
        
        // Show success message
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
    });
}
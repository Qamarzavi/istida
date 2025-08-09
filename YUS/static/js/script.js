// Initialize AOS
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: false,
            mirror: true
        });

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        const mobileToggle = document.querySelector('.mobile-toggle');
        const navMenu = document.querySelector('nav ul');
        
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-bars');
            this.querySelector('i').classList.toggle('fa-times');
        });

        // Hero slider
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        
        function showSlide(n) {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[n].classList.add('active');
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
        
        // Auto slide every 5 seconds
        setInterval(nextSlide, 5000);
        
        // Scroll to top function
        document.querySelector('.scroll-top').addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Project filter buttons
        const filterBtns = document.querySelectorAll('.filter-btn');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Gallery tabs
        const galleryTabs = document.querySelectorAll('.gallery-tab');
        const galleryContents = document.querySelectorAll('.gallery-content');
        
        galleryTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                // Remove active class from all tabs and contents
                galleryTabs.forEach(t => t.classList.remove('active'));
                galleryContents.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding content
                this.classList.add('active');
                document.getElementById(`gallery-${tabId}`).classList.add('active');
            });
        });

        // Initialize Swiper
        const swiper = new Swiper('.swiper', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 30,
                slideShadows: false,
            },
        });

        // Show scroll to top button when scrolling
        window.addEventListener('scroll', function() {
            const scrollTopBtn = document.querySelector('.scroll-top');
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add('active');
            } else {
                scrollTopBtn.classList.remove('active');
            }
        });
// animations.js - Construction Website Animations
document.addEventListener('DOMContentLoaded', function() {
    // 1. Scroll Reveal Animations
    function initScrollReveal() {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '60px',
            duration: 1000,
            delay: 200,
            reset: true
        });

        // Hero section
        sr.reveal('.hero h1', { origin: 'top', delay: 300 });
        sr.reveal('.hero p', { delay: 400 });
        sr.reveal('.hero .btn', { delay: 500 });

        // Services
        sr.reveal('.service-card', { interval: 200 });

        // Projects
        sr.reveal('.project-card', { interval: 150 });

        // About section
        sr.reveal('.about-img', { origin: 'left' });
        sr.reveal('.about-text', { origin: 'right' });
        sr.reveal('.stat-item', { interval: 200 });

        // Contact
        sr.reveal('.contact-info', { origin: 'left' });
        sr.reveal('.contact-form', { origin: 'right' });

        // Project gallery
        sr.reveal('.project-gallery', { scale: 0.9 });
    }

    // 2. Construction Progress Animation
    function initProgressBars() {
        const progressBars = document.querySelectorAll('.progress-bar');
        
        progressBars.forEach(bar => {
            const percentage = bar.getAttribute('data-percent');
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.width = percentage + '%';
                bar.querySelector('.progress-percent').textContent = percentage + '%';
            }, 500);
        });
    }

    // 3. Counter Animation (Stats)
    function initCounters() {
        const counters = document.querySelectorAll('.counter');
        const speed = 200;
        
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(initCounters, 1);
            } else {
                counter.innerText = target;
            }
        });
    }

    // 4. Heavy Equipment Hover Effects
    function initEquipmentHover() {
        const equipmentItems = document.querySelectorAll('.equipment-item');
        
        equipmentItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.querySelector('.equipment-img').style.transform = 'scale(1.1) rotate(5deg)';
                this.querySelector('.equipment-info').style.opacity = '1';
            });
            
            item.addEventListener('mouseleave', function() {
                this.querySelector('.equipment-img').style.transform = 'scale(1) rotate(0)';
                this.querySelector('.equipment-info').style.opacity = '0';
            });
        });
    }

    // 5. Construction Worker Animation
    function initWorkerAnimation() {
        const worker = document.querySelector('.construction-worker');
        if (worker) {
            let position = 0;
            const animation = setInterval(() => {
                position += 1;
                worker.style.left = position + 'px';
                
                if (position > window.innerWidth) {
                    position = -100;
                }
            }, 20);
        }
    }

    // 6. Building Construction Animation
    function initBuildingAnimation() {
        const building = document.querySelector('.building-animation');
        if (building) {
            let height = 0;
            const maxHeight = 300;
            const construction = setInterval(() => {
                height += 2;
                building.style.height = height + 'px';
                
                if (height >= maxHeight) {
                    clearInterval(construction);
                    building.classList.add('completed');
                }
            }, 50);
        }
    }

    // 7. Material Truck Animation
    function initTruckAnimation() {
        const truck = document.querySelector('.material-truck');
        if (truck) {
            let position = -200;
            const animation = setInterval(() => {
                position += 3;
                truck.style.left = position + 'px';
                
                if (position > window.innerWidth) {
                    position = -200;
                }
            }, 30);
        }
    }

    // 8. Parallax Effects for Construction Scenes
    function initParallax() {
        const parallaxElements = document.querySelectorAll('.parallax');
        
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const speed = parseFloat(element.getAttribute('data-speed')) || 0.5;
                const yPos = -(scrollPosition * speed);
                element.style.transform = `translate3d(0, ${yPos}px, 0)`;
            });
        });
    }

    // 9. Tool Swing Animation
    function initToolAnimation() {
        const tools = document.querySelectorAll('.construction-tool');
        
        tools.forEach(tool => {
            tool.addEventListener('mouseenter', function() {
                this.style.animation = 'swingTool 0.5s ease-in-out';
            });
            
            tool.addEventListener('animationend', function() {
                this.style.animation = 'none';
            });
        });
    }

    // 10. Blueprint Drawing Animation
    function initBlueprintAnimation() {
        const blueprint = document.querySelector('.blueprint');
        if (blueprint) {
            const paths = blueprint.querySelectorAll('path');
            const duration = 2000;
            
            paths.forEach((path, index) => {
                const length = path.getTotalLength();
                path.style.strokeDasharray = length;
                path.style.strokeDashoffset = length;
                
                setTimeout(() => {
                    path.style.transition = `stroke-dashoffset ${duration}ms ease-in-out`;
                    path.style.strokeDashoffset = '0';
                }, index * 300);
            });
        }
    }

    // 11. Safety Cone Animation
    function initConeAnimation() {
        const cones = document.querySelectorAll('.safety-cone');
        
        cones.forEach(cone => {
            cone.addEventListener('click', function() {
                this.style.animation = 'wobbleCone 0.5s ease';
                
                setTimeout(() => {
                    this.style.animation = 'none';
                }, 500);
            });
        });
    }

    // 12. Hammer Impact Animation
    function initHammerAnimation() {
        const hammer = document.querySelector('.hammer');
        if (hammer) {
            hammer.addEventListener('click', function() {
                this.style.transform = 'rotate(-45deg)';
                
                setTimeout(() => {
                    this.style.transform = 'rotate(0)';
                    document.querySelector('.impact').style.transform = 'scale(1.5)';
                    
                    setTimeout(() => {
                        document.querySelector('.impact').style.transform = 'scale(0)';
                    }, 300);
                }, 300);
            });
        }
    }

    // 13. Cement Pour Animation
    function initCementAnimation() {
        const cementTruck = document.querySelector('.cement-truck');
        if (cementTruck) {
            cementTruck.addEventListener('click', function() {
                const pour = document.querySelector('.cement-pour');
                pour.style.height = '100px';
                
                setTimeout(() => {
                    pour.style.height = '0';
                }, 2000);
            });
        }
    }

    // 14. Crane Movement Animation
    function initCraneAnimation() {
        const crane = document.querySelector('.crane');
        if (crane) {
            let angle = 0;
            const rotation = setInterval(() => {
                angle += 0.5;
                crane.querySelector('.crane-arm').style.transform = `rotate(${angle}deg)`;
                
                if (angle >= 360) {
                    angle = 0;
                }
            }, 50);
        }
    }

    // 15. Bulldozer Track Animation
    function initBulldozerAnimation() {
        const bulldozer = document.querySelector('.bulldozer');
        if (bulldozer) {
            const tracks = bulldozer.querySelectorAll('.track');
            
            setInterval(() => {
                tracks.forEach(track => {
                    const currentPos = parseInt(track.style.backgroundPositionX) || 0;
                    track.style.backgroundPositionX = (currentPos + 1) + 'px';
                });
            }, 50);
        }
    }

    // Initialize all animations
    function initAnimations() {
        if (typeof ScrollReveal !== 'undefined') {
            initScrollReveal();
        }
        
        initProgressBars();
        initCounters();
        initEquipmentHover();
        initWorkerAnimation();
        initBuildingAnimation();
        initTruckAnimation();
        initParallax();
        initToolAnimation();
        initBlueprintAnimation();
        initConeAnimation();
        initHammerAnimation();
        initCementAnimation();
        initCraneAnimation();
        initBulldozerAnimation();
    }

    // Run animations when page loads
    initAnimations();

    // Re-run counters when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                initCounters();
                initProgressBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.counter, .progress-bar').forEach(el => {
        observer.observe(el);
    });
});
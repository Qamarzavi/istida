// Service page specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Accordion for service features
    const accordionTitles = document.querySelectorAll('.accordion-title');
    
    if (accordionTitles.length) {
        accordionTitles.forEach(title => {
            title.addEventListener('click', function() {
                this.classList.toggle('active');
                const content = this.nextElementSibling;
                
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        });
    }
    
    // Service tabs
    const serviceTabs = document.querySelectorAll('.service-tab');
    const serviceTabContents = document.querySelectorAll('.service-tab-content');
    
    if (serviceTabs.length && serviceTabContents.length) {
        serviceTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const target = this.getAttribute('data-tab');
                
                // Update active tab
                serviceTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                // Show corresponding content
                serviceTabContents.forEach(content => {
                    if (content.id === target) {
                        content.classList.add('active');
                    } else {
                        content.classList.remove('active');
                    }
                });
            });
        });
    }
});
// Enhanced Contact Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form elements
            const nameInput = this.querySelector('#name');
            const emailInput = this.querySelector('#email');
            const messageInput = this.querySelector('#message');
            const submitBtn = this.querySelector('button[type="submit"]');
            
            // Validate inputs
            let isValid = true;
            
            if (nameInput.value.trim() === '') {
                showError(nameInput, 'Please enter your name');
                isValid = false;
            } else {
                clearError(nameInput);
            }
            
            if (emailInput.value.trim() === '') {
                showError(emailInput, 'Please enter your email');
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                showError(emailInput, 'Please enter a valid email');
                isValid = false;
            } else {
                clearError(emailInput);
            }
            
            if (messageInput.value.trim() === '') {
                showError(messageInput, 'Please enter your message');
                isValid = false;
            } else {
                clearError(messageInput);
            }
            
            if (isValid) {
                // Disable submit button during submission
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                
                // Simulate form submission (replace with actual AJAX call)
                setTimeout(() => {
                    // Show success message
                    const successMessage = document.createElement('div');
                    successMessage.className = 'form-success';
                    successMessage.innerHTML = `
                        <div class="success-icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <h3>Thank You!</h3>
                        <p>Your message has been sent successfully. We will get back to you soon.</p>
                    `;
                    
                    contactForm.innerHTML = '';
                    contactForm.appendChild(successMessage);
                    contactForm.style.textAlign = 'center';
                    
                    // Reset form after 5 seconds
                    setTimeout(() => {
                        window.location.reload();
                    }, 5000);
                }, 1500);
            }
        });
        
        // Helper functions
        function showError(input, message) {
            const formGroup = input.closest('.form-group');
            let errorElement = formGroup.querySelector('.error-message');
            
            if (!errorElement) {
                errorElement = document.createElement('div');
                errorElement.className = 'error-message';
                formGroup.appendChild(errorElement);
            }
            
            errorElement.textContent = message;
            input.style.borderColor = '#e74c3c';
        }
        
        function clearError(input) {
            const formGroup = input.closest('.form-group');
            const errorElement = formGroup.querySelector('.error-message');
            
            if (errorElement) {
                errorElement.remove();
            }
            
            input.style.borderColor = '#ddd';
        }
        
        function isValidEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
    }
});
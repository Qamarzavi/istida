// Enhanced FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            
            // Set initial height for answer
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0';
            }
            
            question.addEventListener('click', () => {
                // Close other open items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.faq-answer').style.maxHeight = '0';
                        otherItem.querySelector('.faq-question i').style.transform = 'rotate(0deg)';
                    }
                });
                
                // Toggle current item
                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                    answer.style.maxHeight = '0';
                    question.querySelector('i').style.transform = 'rotate(0deg)';
                } else {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    question.querySelector('i').style.transform = 'rotate(180deg)';
                    
                    // Smooth scroll to the question if it's near the bottom of the viewport
                    const itemRect = item.getBoundingClientRect();
                    if (itemRect.bottom > window.innerHeight - 100) {
                        window.scrollBy({
                            top: itemRect.bottom - window.innerHeight + 100,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }
});
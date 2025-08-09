// More advanced project filtering with mixitup library
document.addEventListener('DOMContentLoaded', function() {
    const containerEl = document.querySelector('.projects-grid');
    
    if (containerEl) {
        // Initialize mixItUp if the library is loaded
        if (typeof mixitup !== 'undefined') {
            const mixer = mixitup(containerEl, {
                selectors: {
                    target: '.project-card'
                },
                animation: {
                    duration: 300,
                    effects: 'fade scale(0.5)',
                    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
                }
            });
        } else {
            // Fallback to basic filtering if mixitup is not available
            console.log('MixItUp not loaded - using basic filtering');
        }
    }
});
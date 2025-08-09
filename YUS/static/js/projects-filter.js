// Project Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterBtns.length > 0 && projectCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                const filterValue = btn.getAttribute('data-filter');
                
                // Filter projects
                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category').includes(filterValue)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
                
                // Animate filtered projects
                const visibleProjects = document.querySelectorAll(`.project-card[style="display: block;"]`);
                visibleProjects.forEach((project, index) => {
                    setTimeout(() => {
                        project.style.animation = 'fadeInUp 0.5s ease forwards';
                        project.style.opacity = '0';
                        setTimeout(() => {
                            project.style.opacity = '1';
                        }, 50);
                    }, index * 100);
                });
            });
        });
    }
});
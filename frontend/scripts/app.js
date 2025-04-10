class AppController {
    constructor() {
        this.initDynamicFeatures();
        this.initHomeFeatures();  // Added feature initialization
    }

    initDynamicFeatures() {
        // Theme management
        const themeToggle = document.createElement('button');
        themeToggle.textContent = '🌓 Toggle Theme';
        themeToggle.addEventListener('click', this.toggleTheme);
        document.querySelector('nav').appendChild(themeToggle);
    }

    initHomeFeatures() {
        // Animate feature cards on hover
        document.querySelectorAll('.feature-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
                card.style.transition = 'transform 0.2s ease';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    }

    toggleTheme() {
        document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', 
            document.body.classList.contains('dark-theme') ? 'dark' : 'light');
    }
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    new AppController();
});

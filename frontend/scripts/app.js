class AppController {
    constructor() {
        this.initDynamicFeatures();
        this.initHomeFeatures();
        this.initTheme();  // Added theme persistence
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

    initTheme() {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
        }
    }

    toggleTheme = () => {  // Arrow function to maintain 'this' context
        document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', 
            document.body.classList.contains('dark-theme') ? 'dark' : 'light');
    }
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    new AppController();
});


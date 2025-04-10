class AppController {
    constructor() {
        this.initDynamicFeatures();
    }

    initDynamicFeatures() {
        // Theme management
        const themeToggle = document.createElement('button');
        themeToggle.textContent = '🌓 Toggle Theme';
        themeToggle.addEventListener('click', this.toggleTheme);
        document.querySelector('nav').appendChild(themeToggle);
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

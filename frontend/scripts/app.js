class AppController {
    constructor() {
        this.autoScroll = true;
        this.initTheme();
        this.initNavigation();
        this.initDynamicFeatures();
        this.initHomeFeatures();
        this.initConsoleFeatures();
        this.initServiceStatus();
        this.initPricingHover();
        this.initTestimonialCarousel();
    }

    // Theme Management
    initTheme() {
        // Check saved theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.body.classList.toggle('dark-theme', savedTheme === 'dark');
        
        // Create theme toggle button
        const themeToggle = document.createElement('button');
        themeToggle.className = 'theme-toggle';
        themeToggle.innerHTML = savedTheme === 'dark' ? '🌞' : '🌙';
        document.querySelector('nav').appendChild(themeToggle);
        
        themeToggle.addEventListener('click', this.toggleTheme);
    }

    toggleTheme = () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        document.querySelector('.theme-toggle').innerHTML = isDark ? '🌞' : '🌙';
    };

    // Navigation Smooth Scroll
    initNavigation() {
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', e => {
                e.preventDefault();
                document.querySelector(e.target.hash).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    // Homepage Features
    initHomeFeatures() {
        // Feature card animations
        document.querySelectorAll('.feature-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px)';
                card.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            });
        });
    }

    // Console Features
    initConsoleFeatures() {
        const consoleOutput = document.getElementById('console-output');
        const clearButton = document.getElementById('clear-console');
        const scrollButton = document.getElementById('toggle-auto-scroll');

        // Initial logs
        this.log('Initializing CodeNestHub environment...');
        this.simulateRuntimeInitialization();

        // Event Listeners
        clearButton.addEventListener('click', () => {
            consoleOutput.innerHTML = '';
            this.log('Console cleared');
        });

        scrollButton.addEventListener('click', () => {
            this.autoScroll = !this.autoScroll;
            scrollButton.textContent = `Auto-scroll: ${this.autoScroll ? 'On' : 'Off'}`;
        });
    }

    log(message) {
        const consoleOutput = document.getElementById('console-output');
        const timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});
        
        const logEntry = document.createElement('div');
        logEntry.className = 'log-entry';
        logEntry.innerHTML = `
            <span class="timestamp">[${timestamp}]</span>
            <span class="log-message">${message}</span>
        `;
        
        consoleOutput.appendChild(logEntry);
        if(this.autoScroll) {
            consoleOutput.scrollTop = consoleOutput.scrollHeight;
        }
    }

    simulateRuntimeInitialization() {
        setTimeout(() => this.log('Python 3.11 environment ready'), 800);
        setTimeout(() => this.log('Go 1.21 server active'), 1600);
        setTimeout(() => this.log('Ruby 3.2 microservices initialized'), 2400);
        setTimeout(() => this.log('All systems operational'), 3200);
    }

    // Service Status Monitoring
    initServiceStatus() {
        document.querySelectorAll('.service-list li').forEach(service => {
            setInterval(() => {
                const status = Math.random() > 0.1 ? 'active' : 'inactive';
                service.querySelector('.status-indicator').classList.toggle('active', status === 'active');
            }, 5000);
        });
    }

    // Pricing Interactions
    initPricingHover() {
        document.querySelectorAll('.pricing-tier').forEach(tier => {
            tier.addEventListener('mouseenter', () => {
                tier.style.transform = 'scale(1.02)';
                tier.style.borderColor = 'var(--secondary)';
            });
            
            tier.addEventListener('mouseleave', () => {
                tier.style.transform = 'scale(1)';
                tier.style.borderColor = '#ddd';
            });
        });
    }

    // Testimonial Carousel
    initTestimonialCarousel() {
        let currentTestimonial = 0;
        const testimonials = document.querySelectorAll('.testimonial-grid blockquote');
        
        setInterval(() => {
            testimonials[currentTestimonial].classList.remove('active');
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            testimonials[currentTestimonial].classList.add('active');
        }, 10000);
    }

    // Backend Monitoring (Optional)
    async initBackendMonitoring() {
        setInterval(async () => {
            try {
                const status = await fetch('/api/status');
                this.updateServiceStatus(await status.json());
            } catch (error) {
                this.log(`Connection error: ${error.message}`);
            }
        }, 10000);
    }

    updateServiceStatus(data) {
        document.querySelectorAll('.service-list li').forEach(li => {
            const service = li.dataset.runtime;
            const indicator = li.querySelector('.status-indicator');
            indicator.classList.toggle('active', data[service].status === 'up');
        });
    }
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    new AppController();
});

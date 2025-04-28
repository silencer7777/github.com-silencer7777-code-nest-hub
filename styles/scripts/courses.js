document.addEventListener('DOMContentLoaded', () => {
    const courseListElement = document.getElementById('course-list');
    const categoryButtons = document.querySelectorAll('.category-btn');
    let allCoursesData = [
        {
            id: 1,
            title: 'HTML Fundamentals for Beginners',
            description: 'Learn the basic structure of web pages with HTML.',
            level: 'beginner',
            isPremium: false,
            detailsLink: 'course-details.html?id=1' // Placeholder
        },
        {
            id: 2,
            title: 'CSS Styling Essentials',
            description: 'Master the art of styling your web pages with CSS.',
            level: 'beginner',
            isPremium: false,
            detailsLink: 'course-details.html?id=2' // Placeholder
        },
        {
            id: 3,
            title: 'JavaScript: The Complete Beginner Guide',
            description: 'Start your JavaScript journey from the ground up.',
            level: 'beginner',
            isPremium: false,
            detailsLink: 'course-details.html?id=3' // Placeholder
        },
        {
            id: 4,
            title: 'Intermediate HTML & Semantic Markup',
            description: 'Dive deeper into advanced HTML concepts.',
            level: 'intermediate',
            isPremium: false,
            detailsLink: 'course-details.html?id=4' // Placeholder
        },
        {
            id: 5,
            title: 'Advanced CSS Layouts and Animations',
            description: 'Explore advanced CSS techniques for complex layouts.',
            level: 'intermediate',
            isPremium: false,
            detailsLink: 'course-details.html?id=5' // Placeholder
        },
        {
            id: 6,
            title: 'JavaScript DOM Manipulation',
            description: 'Learn to dynamically interact with web page content.',
            level: 'intermediate',
            isPremium: false,
            detailsLink: 'course-details.html?id=6' // Placeholder
        },
        {
            id: 7,
            title: 'Backend Development with Node.js & Express',
            description: 'Build robust server-side applications with JavaScript.',
            level: 'advanced',
            isPremium: true,
            detailsLink: 'premium-course-details.html?id=7' // Placeholder
        },
        {
            id: 8,
            title: 'Full-Stack Project: React & Firebase',
            description: 'Build a complete web application using React and Firebase.',
            level: 'advanced',
            isPremium: true,
            detailsLink: 'premium-course-details.html?id=8' // Placeholder
        },
        {
            id: 9,
            title: 'Advanced Data Structures & Algorithms in JavaScript',
            description: 'Master complex programming concepts for optimization.',
            level: 'advanced',
            isPremium: true,
            detailsLink: 'premium-course-details.html?id=9' // Placeholder
        },
        {
            id: 10,
            title: 'AI-Powered Code Assistant (Premium Tool)',
            description: 'Use our AI assistant for code suggestions and debugging.',
            level: 'premium',
            isPremium: true,
            detailsLink: 'premium-tool-details.html?id=10' // Placeholder
        },
        {
            id: 11,
            title: 'AI Training Video Generation (Premium Tool)',
            description: 'Generate personalized training videos based on your learning needs.',
            level: 'premium',
            isPremium: true,
            detailsLink: 'premium-tool-details.html?id=11' // Placeholder
        },
        {
            id: 12,
            title: 'Advanced Deployment Strategies (Premium Tool)',
            description: 'Learn and utilize advanced techniques for deploying web applications.',
            level: 'premium',
            isPremium: true,
            detailsLink: 'premium-tool-details.html?id=12' // Placeholder
        }
    ];

    function displayCourses(courses) {
        courseListElement.innerHTML = '';
        courses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.classList.add('course-card');
            if (course.isPremium) {
                courseCard.classList.add('premium');
            }

            courseCard.innerHTML = `
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <a href="${course.detailsLink}" class="details-link">${course.isPremium ? 'Learn More (Premium)' : 'Learn More'}</a>
            `;
            courseListElement.appendChild(courseCard);
        });
    }

    function filterCourses(category) {
        const filteredCourses = category === 'all'
            ? allCoursesData
            : allCoursesData.filter(course =>
                course.level === category || (category === 'premium' && course.isPremium)
            );
        displayCourses(filteredCourses);
    }

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterCourses(this.dataset.category);
        });
    });

    displayCourses(allCoursesData); // Initial display of all courses
});

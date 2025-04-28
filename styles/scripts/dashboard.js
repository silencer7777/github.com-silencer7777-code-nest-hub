// scripts/dashboard.js

document.addEventListener('DOMContentLoaded', () => {
    const courseListElement = document.getElementById('course-list');
    const learningArea = document.getElementById('learning-area');
    const currentCourseElement = document.getElementById('current-course');

    const courses = [
        { id: 1, title: 'Introduction to HTML', content: '<p>Welcome to the world of HTML!</p><p>Learn about basic tags and structure.</p>' },
        { id: 2, title: 'CSS Fundamentals', content: '<p>Discover the power of CSS for styling your web pages.</p>' },
        { id: 3, title: 'JavaScript Basics (Free)', content: '<p>Get started with the fundamentals of JavaScript.</p>' },
        { id: 4, title: 'Advanced JavaScript (Premium)', content: '<p>Unlock advanced JavaScript concepts and techniques.</p><p class="premium-content">This content is for premium users only.</p>', isPremium: true },
        { id: 5, title: 'Backend with Go (Premium)', content: '<p>Learn how to build a backend using the Go language.</p><p class="premium-content">This content is for premium users only.</p>', isPremium: true },
        { id: 6, title: 'Python for Web (Free)', content: '<p>Introduction to using Python for web development.</p>' },
        // Add more courses here
    ];

    function displayCourses() {
        courses.forEach(course => {
            const listItem = document.createElement('li');
            listItem.textContent = course.title;
            listItem.addEventListener('click', () => loadCourseContent(course));
            courseListElement.appendChild(listItem);
        });
    }

    function loadCourseContent(course) {
        currentCourseElement.textContent = course.title;
        learningArea.innerHTML = course.content;

        // You'll need to implement logic here to check if the user is premium
        // and conditionally display premium content.
        if (course.isPremium) {
            const premiumElements = learningArea.querySelectorAll('.premium-content');
            premiumElements.forEach(element => {
                // Replace with your actual premium check logic
                const isUserPremium = false; // Example: Replace with a function to check user status
                if (!isUserPremium) {
                    element.innerHTML = '<p class="locked">🔒 Premium Content. Upgrade to access.</p>';
                }
            });
        }
    }

    displayCourses(); // Initial display of courses
});

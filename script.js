// JavaScript code for your portfolio website

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust for header height
            behavior: 'smooth'
        });
    });
});

// Add a simple animation to project sections
const projects = document.querySelectorAll('.project');
projects.forEach((project, index) => {
    project.style.transitionDelay = `${index * 0.1}s`;
    project.classList.add('project-animation');
});

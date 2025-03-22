// Frontend - app.js
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Load projects
    const projectsGrid = document.getElementById('projectsGrid');
    const projects = [
        { title: 'Project 1', description: 'Amazing project description' },
        { title: 'Project 2', description: 'Another great project' },
    ];

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectsGrid.appendChild(projectCard);
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        try {
            const response = await fetch('http://localhost:3000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Message sent successfully!');
                contactForm.reset();
            } else {
                alert('Error sending message');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error sending message');
        }
    });
});
 // Menu toggle functionality
    document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('#menu');
    const header = document.querySelector('header');
    
    // Toggle menu when menu button is clicked
    menuBtn.addEventListener('click', function() {
        header.classList.toggle('toggle');
    });
    
    // Close menu when clicking on navbar links (optional - for better UX)
    const navLinks = document.querySelectorAll('header .navbar ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            header.classList.remove('toggle');
        });
    });
    
    // Close menu when clicking outside (optional - for better UX)
    document.addEventListener('click', function(e) {
        if (!header.contains(e.target) && !menuBtn.contains(e.target)) {
            header.classList.remove('toggle');
        }
    });
});
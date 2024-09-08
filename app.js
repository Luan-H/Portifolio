// Scroll to section
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

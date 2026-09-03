// ==========================================================================
// Portfolio Interactions & Navigation Logic
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const navbarCollapse = document.getElementById('navbarMenu');
    const navLinks = document.querySelectorAll('.custom-navbar .nav-link');
    const navbar = document.querySelector('.custom-navbar');

    // 1. Auto-close mobile menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });

    // 2. Add extra shadow/backdrop intensity on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

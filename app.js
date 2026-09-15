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

    // 3. 1-click email copy with visual feedback
    const emailBox = document.getElementById('emailContactBox');
    const copyIcon = document.getElementById('copyIcon');
    const copyTooltip = document.getElementById('copyTooltip');
    const emailToCopy = 'luanhenriquehdia@gmail.com';

    if (emailBox && copyTooltip) {
        let copyTimeout;
        emailBox.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(emailToCopy);
                
                // Show tooltip and change icon
                copyTooltip.classList.add('show');
                if (copyIcon) {
                    copyIcon.className = 'bi bi-check2 text-success';
                }

                clearTimeout(copyTimeout);
                copyTimeout = setTimeout(() => {
                    copyTooltip.classList.remove('show');
                    if (copyIcon) {
                        copyIcon.className = 'bi bi-clipboard';
                    }
                }, 2000);
            } catch (err) {
                // Fallback for browsers that block clipboard API
                window.location.href = `mailto:${emailToCopy}`;
            }
        });
    }
});

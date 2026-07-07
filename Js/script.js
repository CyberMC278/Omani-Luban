document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }
    themeToggleBtn?.addEventListener('click', () => {
        const isDark = body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    const scrollThreshold = 10;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > 80) {
            if (currentScroll > lastScrollTop) {
                header?.classList.add('header-hidden');
            } else if (lastScrollTop - currentScroll > scrollThreshold) {
                header?.classList.remove('header-hidden');
            }
        } else {
            header?.classList.remove('header-hidden');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links li a');
    window.addEventListener('scroll', () => {
        let activeId = '';
        const scrollPosition = window.scrollY + 120;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
                activeId = section.getAttribute('id') || '';
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${activeId}`) {
                link.classList.add('active');
            }
        });
    });
});
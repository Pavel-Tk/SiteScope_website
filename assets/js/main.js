(function () {
    const header = document.querySelector('.site-header');
    const navToggle = document.querySelector('.nav-toggle');
    const navigation = document.querySelector('#primary-navigation');
    const yearEl = document.querySelector('#year');

    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    if (!navToggle || !navigation || !header) {
        return;
    }

    navToggle.addEventListener('click', () => {
        const isOpen = header.classList.toggle('nav-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navigation.addEventListener('click', (event) => {
        const target = event.target;
        if (target instanceof HTMLElement && target.tagName === 'A' && header.classList.contains('nav-open')) {
            header.classList.remove('nav-open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
})();

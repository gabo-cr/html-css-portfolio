const toggle = document.querySelector('.hamb');
const navigation = document.getElementById('primary-navigation');
const desktop = window.matchMedia('(width > 768px)');

// Error pages set a base URL; keep the skip link on the current document.
const skipLink = document.querySelector('[data-current-document]');
if (skipLink) {
    skipLink.href = location.pathname + location.search + '#main-content';
}

if (toggle && navigation) {
    const openLabel = toggle.getAttribute('aria-label');
    const setOpen = (open) => {
        if (!open && !desktop.matches && navigation.contains(document.activeElement)) {
            toggle.focus({ preventScroll: true });
        }
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? toggle.dataset.closeLabel : openLabel);
        navigation.classList.toggle('is-open', open);
    };

    toggle.addEventListener('click', () => {
        setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    navigation.addEventListener('click', (event) => {
        const link = event.target.closest('a');
        if (!link) return;
        setOpen(false);
        const destination = new URL(link.href);
        if (destination.origin === location.origin && destination.pathname === location.pathname && destination.hash) {
            const target = document.getElementById(decodeURIComponent(destination.hash.slice(1)));
            if (target) {
                target.setAttribute('tabindex', '-1');
                target.focus({ preventScroll: true });
            }
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
            setOpen(false);
            toggle.focus();
        }
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.header')) setOpen(false);
    });

    document.querySelector('.header').addEventListener('focusout', (event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
    });

    desktop.addEventListener('change', () => setOpen(false));

    // Without JavaScript the navigation stays visible and usable.
    navigation.dataset.collapsible = '';
    toggle.hidden = false;
}

// The single-page documents use native anchors; no content routing is needed.
if (document.body.classList.contains('home-page') && document.getElementById('projects')) {
    const header = document.querySelector('.header');
    const links = [...navigation.querySelectorAll('.menu a')];
    const languages = [...navigation.querySelectorAll('.language-menu a')];

    const updateAnchorOffset = () => {
        const height = Math.ceil(header.getBoundingClientRect().height);
        document.documentElement.style.setProperty('--anchor-offset', `${height + 16}px`);
    };

    const updateHashLinks = () => {
        const id = location.hash.slice(1);
        const target = id ? document.getElementById(id) : null;
        const section = target?.closest('section[id], footer[id]')?.id || 'description';
        for (const link of links) {
            if (link.hash === `#${section}`) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
        }
        for (const link of languages) link.hash = target ? location.hash : '';
    };

    header.dataset.enhanced = '';
    updateAnchorOffset();
    updateHashLinks();
    window.addEventListener('hashchange', updateHashLinks);
    window.addEventListener('resize', updateAnchorOffset);
    if ('ResizeObserver' in window) new ResizeObserver(updateAnchorOffset).observe(header);
}

const toggle = document.querySelector('.hamb');
const navigation = document.getElementById('primary-navigation');
const desktop = window.matchMedia('(width > 768px)');

if (toggle && navigation) {
    const setOpen = (open) => {
        toggle.setAttribute('aria-expanded', String(open));
        navigation.classList.toggle('is-open', open);
    };

    toggle.addEventListener('click', () => {
        setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    navigation.addEventListener('click', (event) => {
        if (event.target.closest('a')) setOpen(false);
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

    desktop.addEventListener('change', () => setOpen(false));

    // Without JavaScript the navigation stays visible and usable.
    navigation.dataset.collapsible = '';
    toggle.hidden = false;
}

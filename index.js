document.addEventListener("DOMContentLoaded", function() {
    const showMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId);

        if (toggle && nav) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show');
            });
        }
    }
    showMenu('menu-toggle', 'nav-menu');

    const homeLink = document.querySelector('.nav-link[href="#main-content"]');
    if (homeLink) {
        homeLink.addEventListener('click', (event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' }); 
        });
    }
});

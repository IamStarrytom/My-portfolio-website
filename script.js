document.addEventListener('DOMContentLoaded', () => {
    const noviqueButton = document.getElementById('novique-menu-button');
    const closeButton = document.getElementById('close-menu-button');
    const menuDrawer = document.getElementById('menu-drawer');
    const body = document.body;

    // Function to open the menu
    function openMenu() {
        menuDrawer.classList.add('open');
        body.classList.add('menu-open'); // Add class to body to trigger overlay/disable scroll
    }

    // Function to close the menu
    function closeMenu() {
        menuDrawer.classList.remove('open');
        body.classList.remove('menu-open');
    }

    // Event listener for the novique button
    if (noviqueButton) {
        noviqueButton.addEventListener('click', openMenu);
    }

    // Event listener for the close button inside the drawer
    if (closeButton) {
        closeButton.addEventListener('click', closeMenu);
    }

    // Optional: Close menu when clicking outside of it (on the overlay)
    // We can add an event listener to the body itself, checking if the click was outside the drawer
    body.addEventListener('click', (event) => {
        // If the menu is open and the click target is NOT the drawer or its descendants,
        // and NOT the novique button itself, then close the menu.
        if (menuDrawer.classList.contains('open') &&
            !menuDrawer.contains(event.target) &&
            event.target !== noviqueButton &&
            !noviqueButton.contains(event.target)) {
            closeMenu();
        }
    });

    // Optional: Close menu when a link inside it is clicked
    const menuLinks = menuDrawer.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});
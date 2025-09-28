document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sideMenu = document.querySelector('.side-menu');
    const closeBtn = document.querySelector('.close-btn');

    menuToggle.addEventListener('click', function() {
        sideMenu.classList.add('open');
    });

    closeBtn.addEventListener('click', function() {
        sideMenu.classList.remove('open');
    });

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            sideMenu.classList.remove('open');
        });
    });
});
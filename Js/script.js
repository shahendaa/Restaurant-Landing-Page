const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li a');

menuToggle.addEventListener('click', () => {

    navMenu.classList.toggle('active');

    if (navMenu.classList.contains('active')) {
        menuToggle.innerHTML = '✕';
    } else {
        menuToggle.innerHTML = '☰';
    }

});

navLinks.forEach(link => {
    link.addEventListener('click', () => {

        navMenu.classList.remove('active');
        menuToggle.innerHTML = '☰';

    });
});
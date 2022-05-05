const d = document,
    navbar = d.querySelector('.navbar'),
    navbarMenu = d.querySelectorAll('.navbar__menu'),
    dropdown = d.querySelectorAll('.display-dropdown');

navbarMenu.forEach(el => el.addEventListener('click', () => {
    navbar.classList.toggle('active');
    d.querySelector('header').classList.toggle('active');
}));

dropdown.forEach(el => el.addEventListener('click', () => {
    el.classList.toggle('active');
}));
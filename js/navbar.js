const navbarToggler = document.querySelector('.navbar-toggler');
const menu = document.querySelector('#navbarMenu');
const overlay = document.querySelector('.overlay');
const closeNavbar = document.querySelector('.btn-X');

navbarToggler.addEventListener('click', navbarShow)
function navbarShow() {
    menu.classList.toggle('d-none')
    overlay.classList.toggle('d-none')
}

closeNavbar.addEventListener('click', closeNav);
function closeNav() {
    menu.classList.toggle('d-none')
    overlay.classList.toggle('d-none')
}
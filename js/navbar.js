const navbarToggler = document.querySelector('.navbar-toggler');
const menu = document.querySelector('#navbarMenu');
const overlay = document.querySelector('.overlay');
const closeNavbar = document.querySelector('.btn-X');
const btnDown = document.querySelector('.btn-down');
const backImg = document.querySelector('.back-img');
const learning = document.querySelector('.learning');

navbarToggler.addEventListener('click', navbarShow)
function navbarShow() {
    menu.classList.toggle('d-none');
    overlay.classList.toggle('d-none');
    btnDown.classList.toggle('d-none');
    backImg.classList.toggle('d-none');
    learning.classList.toggle('d-none');
}

closeNavbar.addEventListener('click', closeNav);
function closeNav() {
    menu.classList.toggle('d-none');
    overlay.classList.toggle('d-none');
    btnDown.classList.toggle('d-none');
    backImg.classList.toggle('d-none');
    learning.classList.toggle('d-none');
}
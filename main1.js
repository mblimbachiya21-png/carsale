let search = document.querySelector('.search-box');
let menu = document.querySelector('.navbar');
let menuIcon = document.querySelector('#menu-icon');
let searchIcon = document.querySelector('#search-icon');

searchIcon.onclick = () => {
search.classList.toggle('active');
menu.classList.remove('active');
}

menuIcon.onclick = () => {
menu.classList.toggle('active');
search.classList.remove('active');
}

window.addEventListener('scroll', () => {
search.classList.remove('active');
menu.classList.remove('active');
});

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
header.classList.toggle('shadow', window.scrollY > 0);
});
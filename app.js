const hamburger_icon = document.querySelector('#navbar .navbar .nav-list .hamburger');
const nav_list = document.querySelector('#navbar .navbar .nav-list');

hamburger_icon.addEventListener('click', () => {
    nav_list.classList.toggle('open');
    hamburger_icon.classList.toggle('active');
});
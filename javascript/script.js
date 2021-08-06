const sidebarToggleBtn = document.querySelector('.icon__menu');
const sidebar = document.querySelector('.header__nav');
const cross = document.querySelector('.cross');
sidebarToggleBtn.onclick = function () {
    sidebar.classList.toggle('header__nav--mobile-active');
}

cross.onclick = function () {
    sidebar.classList.toggle('header__nav--mobile-active');
}


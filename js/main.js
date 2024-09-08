const sideBar = document.querySelector('aside');
const manuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');
const themToggler = document.querySelector('.theme-toggler');

manuBtn.addEventListener('click', () => {
    sideBar.style.display = "block";

});

closeBtn.addEventListener('click', () => {
    sideBar.style.display = "none";

});

themToggler.addEventListener('click', () => {

    document.body.classList.toggle('dark-theme-variables');

    themToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themToggler.querySelector('span:nth-child(2)').classList.toggle('active');


})


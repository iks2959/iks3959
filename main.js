const toggleBtn = document.querySelector('.navbar_togleBtn');
const menu = document.querySelector('.nav_menu');
const sns = document.querySelector('.nav_sns');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});
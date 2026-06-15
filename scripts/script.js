const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
});

overlay.addEventListener('click', () => {
    sidebar.classList.add('hidden');
    overlay.classList.add('hidden');
});
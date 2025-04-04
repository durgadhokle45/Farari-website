// Sidebar toggle
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    sidebar.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
});

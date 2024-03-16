const menuToggle = document.getElementById('menu-toggle');
const navbarLinks = document.querySelector('.navbar-links');

menuToggle.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});
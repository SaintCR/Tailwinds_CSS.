let slideIndex = 0;
const slides = document.querySelector('.carousel-slide');

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.children.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.children.length - 1;
  }
  showSlide(slideIndex);
}

function showSlide(index) {
  slides.style.transform = `translateX(-${index * (100 / slides.children.length)}%)`; /* Desplazar las imágenes horizontalmente */
}

setInterval(nextSlide, 3000); // Cambia la imagen cada 3 segundos

const menuToggle = document.getElementById('menu-toggle');
const navbarLinks = document.querySelector('.navbar-links');
const dropdownMenu = document.querySelector('.navbar-links .absolute');

menuToggle.addEventListener('click', () => {
navbarLinks.classList.toggle('active');
});

// Mostrar el menú desplegable al pasar el cursor sobre el enlace "Productos"
document.querySelector('.navbar-links a[href="#"]').addEventListener('mouseenter', () => {
dropdownMenu.style.display = 'block';
});

// Ocultar el menú desplegable cuando se sale del enlace "Productos" o del menú desplegable
document.querySelector('.navbar-links').addEventListener('mouseleave', () => {
dropdownMenu.style.display = 'none';
});

dropdownMenu.addEventListener('mouseleave', () => {
dropdownMenu.style.display = 'none';
});

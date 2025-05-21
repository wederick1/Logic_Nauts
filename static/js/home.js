// script.js

// Animación al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target); // Solo animar una vez
    }
  });
}, {
  threshold: 0.2,
});

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-in-on-scroll');
  elements.forEach(el => observer.observe(el));
});


window.addEventListener('load', () => {
  document.body.classList.add('fade-in-on-load');
});


const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', (e) => {
  e.stopPropagation(); // Evita que el click se propague y cierre inmediatamente el menú
  if (navLinks.style.display === 'flex') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'flex';
  }
});

// Cerrar menú al hacer click fuera
document.addEventListener('click', (e) => {
  // Si el menú está abierto y el click no fue dentro de navLinks ni en el botón
  if (
    navLinks.style.display === 'flex' &&
    !navLinks.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    navLinks.style.display = 'none';
  }
});



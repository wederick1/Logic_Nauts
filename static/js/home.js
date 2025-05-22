document.addEventListener('DOMContentLoaded', () => {
  // Animación al hacer scroll
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        obs.unobserve(entry.target); // Solo animar una vez
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.fade-in-on-scroll').forEach(el => observer.observe(el));

  // Botón para scroll suave a servicios
  const scrollBtn = document.getElementById('scroll-to-services');
  const servicesSection = document.getElementById('services');
  if (scrollBtn && servicesSection) {
    scrollBtn.addEventListener('click', (e) => {
      e.preventDefault();
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Menú móvil toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation(); // Evita cierre inmediato
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', (e) => {
      if (
        navLinks.style.display === 'flex' &&
        !navLinks.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {
        navLinks.style.display = 'none';
      }
    });
  }
});

// Animación al cargar toda la página
window.addEventListener('load', () => {
  document.body.classList.add('fade-in-on-load');
});

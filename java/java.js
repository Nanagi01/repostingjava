document.addEventListener("DOMContentLoaded", function() {
    // Efecto parallax en el encabezado y las secciones principales
    const parallax = document.querySelectorAll('.parallax');
    window.addEventListener('scroll', function() {
        let offset = window.pageYOffset;
        parallax.forEach(function(element, index) {
            element.style.backgroundPositionY = (offset - element.offsetTop) * 0.7 + 'px';
        });
    });

    // Animaciones al hacer scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', function() {
        sections.forEach(function(section, index) {
            if (isInViewport(section)) {
                section.classList.add('animate');
            }
        });
    });

    // Verificar si un elemento está en el viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Interactividad del botón de cambio de modo
    const toggleDarkMode = document.getElementById('toggle-dark-mode');
    toggleDarkMode.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        toggleDarkMode.textContent = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Oscuro';
    });
});

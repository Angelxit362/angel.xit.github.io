let currentPage = 0;
const pages = document.querySelectorAll('.page');

// Función para cambiar de página
function changePage(direction) {
    // Oculta la página actual
    pages[currentPage].classList.remove('show');

    // Actualiza la página actual
    currentPage += direction;

    // Si llegamos al final, volvemos al principio
    if (currentPage < 0) currentPage = pages.length - 1;
    if (currentPage >= pages.length) currentPage = 0;

    // Muestra la nueva página
    pages[currentPage].classList.add('show');
}

// Inicializamos la primera página (portada)
pages[currentPage].classList.add('show');

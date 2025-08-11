let currentPage = 0;
const pages = document.querySelectorAll('.page');

// Mostrar solo la primera página
pages.forEach((p, i) => {
    if (i !== 0) p.style.display = 'none';
});

function changePage(direction) {
    if (direction === 1 && currentPage < pages.length - 1) {
        const img = pages[currentPage].querySelector('.photo');
        img.classList.add('flip');

        setTimeout(() => {
            pages[currentPage].style.display = 'none';
            currentPage++;
            pages[currentPage].style.display = 'block';
            img.classList.remove('flip');
        }, 600);

    } else if (direction === -1 && currentPage > 0) {
        const img = pages[currentPage].querySelector('.photo');
        img.classList.add('flip');

        setTimeout(() => {
            pages[currentPage].style.display = 'none';
            currentPage--;
            pages[currentPage].style.display = 'block';
            img.classList.remove('flip');
        }, 600);
    }
}

document.getElementById('next').onclick = () => changePage(1);
document.getElementById('prev').onclick = () => changePage(-1);

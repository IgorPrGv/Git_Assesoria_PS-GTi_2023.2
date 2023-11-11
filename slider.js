let slides = document.querySelectorAll('.slide');
let current = 0;

function hideAllSlides() {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
}

function showSlide(index) {
    hideAllSlides();

    if (index < 0) {
        current = slides.length - 1;
    } else if (index >= slides.length) {
        current = 0;
    } else {
        current = index;
    }

    slides[current].style.display = 'block';
}

function next() {
    showSlide(current + 1);
}

function prev() {
    showSlide(current - 1);
}

// Exiba a primeira slide ao carregar a página
showSlide(current);

let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    slideIndex = (slideIndex > 0) ? slideIndex - 1 : slides.length - 1;
    showSlides();
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    slideIndex = (slideIndex < slides.length - 1) ? slideIndex + 1 : 0;
    showSlides();
}

showSlides(); // Initialize the slider


// Script for Navbar Collapse on Link Click (for mobile view)
document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});

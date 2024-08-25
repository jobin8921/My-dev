// Script for Poster Slider
document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    // Function to show slides
    function showSlides(n) {
        if (n >= slides.length) {
            slideIndex = 0;
        }
        if (n < 0) {
            slideIndex = slides.length - 1;
        }

        slides.forEach((slide, index) => {
            slide.style.display = (index === slideIndex) ? 'block' : 'none';
        });
    }

    // Show the first slide initially
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Attach event listeners to buttons
    prevButton.addEventListener('click', function () {
        plusSlides(-1);
    });

    nextButton.addEventListener('click', function () {
        plusSlides(1);
    });

    // Auto-slide functionality (optional)
    setInterval(function () {
        plusSlides(1);
    }, 5000); // Change slide every 5 seconds
});

// Script for Navbar Collapse on Link Click (for mobile view)
document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});

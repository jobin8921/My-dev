// script.js

// Example: Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let slideIndex = 0;
const slidesToShow = 3; // Number of images to show at once

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    if (index >= totalSlides - slidesToShow + 1) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - slidesToShow;
    } else {
        slideIndex = index;
    }

    const offset = -slideIndex * 300; // Width of one image
    document.querySelector('.slider').style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
});




document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const responseDiv = document.getElementById('form-response');

    form.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                // Show success message
                responseDiv.innerHTML = "<p>Thank you for your message. We will get back to you soon!</p>";
                responseDiv.style.display = 'block';
                responseDiv.classList.add('success');
                form.reset(); // Reset form fields
            } else {
                const errorText = await response.text();
                // Show error message
                responseDiv.innerHTML = `<p>Error: ${errorText}</p>`;
                responseDiv.style.display = 'block';
                responseDiv.classList.add('error');
            }
        } catch (error) {
            // Show error message
            responseDiv.innerHTML = `<p>Error: ${error.message}</p>`;
            responseDiv.style.display = 'block';
            responseDiv.classList.add('error');
        }
    });
});

// script.js

// Automatically open the pop-up when the page loads
// window.addEventListener('load', function() {
//     document.getElementById('popupContainer').style.display = 'flex';
// });

// document.getElementById('closePopup').addEventListener('click', function() {
//     document.getElementById('popupContainer').style.display = 'none';
// });

// document.getElementById('exitPopup').addEventListener('click', function() {
//     document.getElementById('popupContainer').style.display = 'none';
// });

// // Close the pop-up if the user clicks outside of it
// window.addEventListener('click', function(event) {
//     if (event.target === document.getElementById('popupContainer')) {
//         document.getElementById('popupContainer').style.display = 'none';
//     }
// });

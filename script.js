let current = 0;
const slides = document.querySelectorAll('.slider-images img');
if (slides.length > 0) {
    slides[current].style.display = 'block';
    setInterval(() => {
        slides[current].style.display = 'none';
        current = (current + 1) % slides.length;
        slides[current].style.display = 'block';
    }, 3000);
}

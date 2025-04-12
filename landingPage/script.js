const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');


burger.addEventListener('click', () => {
    nav.classList.toggle("active");
    
})
const previousButton = document.querySelector('.prev-slde');
const nextButton = document.querySelector('.next-slde');
const slider = document.querySelectorAll('.hero-slider');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;


function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
}
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}
function previousSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

previousButton.addEventListener('click', previousSlide);
nextButton.addEventListener('click', nextSlide);

showSlide(currentIndex);
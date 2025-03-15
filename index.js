const slideshow = document.querySelector('.slideshow');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].clientWidth;
let counter = 1;

function slide() {
    slideshow.style.transition = 'transform 0.5s ease-in-out';
    slideshow.style.transform = `translateX(${-slideWidth * counter}px)`;
    counter++;

    if (counter === slides.length) {
        setTimeout(() => {
            slideshow.style.transition = 'none';
            slideshow.style.transform = `translateX(0)`;
            counter = 1;
        }, 2000); 
    }
}

setInterval(slide, 2000);

document.addEventListener('click', function(event) {
    const screenWidth = window.innerWidth;
    if (event.clientX > screenWidth / 2) {
        slide();
    }
});

document.addEventListener('click', function(event) {
    const screenWidth = window.innerWidth;
    if (event.clientX < screenWidth / 2) {
        slideshow.style.transition = 'transform 0.5s ease-in-out';
        counter = (counter === 1) ? slides.length - 1 : counter - 2;
        slideshow.style.transform = `translateX(${-slideWidth * counter}px)`;
        counter++;
    }
});

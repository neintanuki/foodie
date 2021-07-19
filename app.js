const slider = document.querySelector('.slider');
const dots = document.querySelectorAll('.slider-dots span');
const menu = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav-links');
const navbar = document.querySelector('nav');
let currentSlide = 1;
let totalSlide = 3;

function changeDot() {
    dots.forEach(dot => {
        dot.classList.remove('active')
    });

    if (currentSlide === totalSlide) {
        dots[0].classList.add('active');        
    } else {
        dots[currentSlide].classList.add('active');
    }
}


function slide() {

    changeDot();

    slider.style.transition = 'transform .8s ease-out';
    slider.style.transform = `translateX(-${25 * currentSlide}%)`;

    if (currentSlide === totalSlide) {
        currentSlide = 0;
        setTimeout(()=> {
            slider.style.transition = 'none';
            slider.style.transform = `translateX(-${25 * currentSlide}%)`;
            currentSlide++;
        }, 900);
    } else {
        currentSlide++;
    }

    
}

function windowScroll() {
    if (document.body.getBoundingClientRect().top !== 0) {
        navbar.classList.add('nav-alt');
    } else {
        navbar.classList.remove('nav-alt');
    };
}

setInterval(slide, 2800);

menu.addEventListener('click', ()=> {
    nav.classList.toggle('hide-mobile');
    menu.classList.toggle('burger-menu-close')

});

window.addEventListener('scroll', windowScroll)


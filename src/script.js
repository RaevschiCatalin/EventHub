
const menuIcon = document.getElementById('hamburger');
const closeIcon = document.getElementById('x');
const navbar = document.getElementById('navbar');
const logo = document.getElementById('logo');

menuIcon.addEventListener('click', () => {
  menuIcon.style.display = 'none';
  closeIcon.style.display = 'block';
  navbar.classList.add('responsive');
  logo.style.display = 'none';
});

closeIcon.addEventListener('click', () => {
  closeIcon.style.display = 'none';
  menuIcon.style.display = 'block';
  navbar.classList.remove('responsive');
  logo.style.display = 'block';
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    logo.style.display = 'block';
  } else {
    logo.style.display = 'none';
  }
});


const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slider-slide');
const dots = document.querySelectorAll('.slider-dot');
let i;

const reset = () => dots.forEach((dot) => dot.classList.remove('active'));

function slideTo(n) {
  track.style.transform = `translateX(-${n * slides[0].offsetWidth}px)`;
  reset();
  dots[n].classList.add('active');
}

function activateArrows(direction) {
  direction === 'right' ? i++ : i--; 
  if (i < 0) i = 0;
  if (i > slides.length-1) i = slides.length-1;
  slideTo(i);
}

function activateDots(e) {
  i = e.target.dataset.index;
  slideTo(i);
}

function activate(e) {
  e.target.matches('.slider-dot') && activateDots(e);
  e.target.matches('.arrow-right') && activateArrows('right');
  e.target.matches('.arrow-left') && activateArrows();
}

function init(n) {
  i = n;
  slideTo(n);
}

document.addEventListener('click',activate,false);
window.addEventListener('load',init(1),false);

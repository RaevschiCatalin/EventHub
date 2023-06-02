
const menuIcon = document.getElementById('hamburger');
const closeIcon = document.getElementById('x');
const navbar = document.getElementById('navbar');
const logo = document.getElementById('logo');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.add('hide');
  closeIcon.classList.remove('hide');
  navbar.classList.add('responsive');
  logo.style.display = 'none';
});

closeIcon.addEventListener('click', () => {
  closeIcon.classList.add('hide');
  menuIcon.classList.remove('hide');
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


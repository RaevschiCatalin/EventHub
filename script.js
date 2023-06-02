
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


const images = document.querySelectorAll('img');
const carousel = document.querySelector('#gallery');

images.forEach(image => {
 image.addEventListener('click', event => {
 // Get the clicked image's source
 const src = event.target.src;

 // Remove the hidden class from the carousel element to show it
 carousel.classList.remove('hidden');
 });
});
const prevButton = document.querySelector('#gallery button:first-of-type');
const nextButton = document.querySelector('#gallery button:nth-of-type(2)');

prevButton.addEventListener('click', () => {
 // Get the current active item
 const currentItem = document.querySelector('[data-carousel-item].block');

 // Get the previous item
 const prevItem = currentItem.previousElementSibling;

 if (prevItem) {
 // Hide the current item and show the previous item
 currentItem.classList.add('hidden'); // Add the hidden class to the current item
 currentItem.classList.remove('block');
 prevItem.classList.remove('hidden'); // Remove the hidden class from the previous item
 prevItem.classList.add('block');
 } else {
 // If there is no previous item, go to the last item
 const lastItem = currentItem.parentElement.lastElementChild;
 currentItem.classList.add('hidden'); // Add the hidden class to the current item
 currentItem.classList.remove('block');
 lastItem.classList.remove('hidden'); // Remove the hidden class from the last item
 lastItem.classList.add('block');
 }
});

nextButton.addEventListener('click', () => {
 // Get the current active item
 const currentItem = document.querySelector('[data-carousel-item].block');

 // Get the next item
 const nextItem = currentItem.nextElementSibling;

 if (nextItem) {
 // Hide the current item and show the next item
 currentItem.classList.add('hidden'); // Add the hidden class to the current item
 currentItem.classList.remove('block');
 nextItem.classList.remove('hidden'); // Remove the hidden class from the next item
 nextItem.classList.add('block');
 } else {
 // If there is no next item, go to the first item
 const firstItem = currentItem.parentElement.firstElementChild;
 currentItem.classList.add('hidden'); // Add the hidden class to the current item
 currentItem.classList.remove('block');
 firstItem.classList.remove('hidden'); // Remove the hidden class from the first item
 firstItem.classList.add('block');
 }
});

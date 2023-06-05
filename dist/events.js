const images = document.querySelectorAll('img');

images.forEach(image => {
  image.addEventListener('click', event => {
    // Get the clicked image's source
    const src = event.target.src;

    // Create a modal element
    const modal = document.createElement('div');
    modal.classList.add(
      'fixed',
      'top-0',
      'left-0',
      'w-full',
      'h-full',
      'bg-black',
      'bg-opacity-50',
      'z-10'
    );

    // Create a modal content element
    const modalContent = document.createElement('div');
    modalContent.classList.add(
      'absolute',
      'top-1/2',
      'left-1/2',
      'transform',
      '-translate-x-1/2',
      '-translate-y-1/2'
    );

    // Create an image element and set its source to the clicked image's source
    const modalImage = document.createElement('img');
    modalImage.src = src;
    modalImage.classList.add('max-w-80', 'max-h-80');

    // Append the image to the modal content
    modalContent.appendChild(modalImage);

    // Create a table element and add some information to it
    const table = document.createElement('table');
    table.classList.add('mt-4', 'text-white');
    table.innerHTML = `
      <tr>
        <td>Image Name</td>
        <td>${src.split('/').pop()}</td>
      </tr>
      <tr>
        <td>Image Size</td>
        <td>${event.target.naturalWidth} x ${event.target.naturalHeight}</td>
      </tr>
    `;

    // Append the table to the modal content
    modalContent.appendChild(table);

    // Append the modal content to the modal
    modal.appendChild(modalContent);

    // Append the modal to the body
    document.body.appendChild(modal);

    // Add an event listener to the modal to close it when clicked
    modal.addEventListener('click', () => {
      modal.remove();
    });
  });
});

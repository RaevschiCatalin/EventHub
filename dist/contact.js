const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const firstName = document.querySelector('#first_name').value;
  const lastName = document.querySelector('#last_name').value;
  const company = document.querySelector('#company').value;
  const phone = document.querySelector('#phone').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  if (!firstName || !lastName || !company || !phone || !email || !message) {
    alert('Please fill in all required fields.');
    return;
  }

  // Email validation
  if (!email.includes('@') || !email.includes('.')) {
    alert('Please enter a valid email address.');
    return;
  }

  // Perform additional validation here

  // Submit the form
  form.submit();
});

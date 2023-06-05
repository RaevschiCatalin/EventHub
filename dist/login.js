const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  // Get the email and password fields
  const emailField = document.querySelector('#email');
  const passwordField = document.querySelector('#password');
  
  // Validate the email field
  if (!emailField.value.includes('@')) {
    alert('Please enter a valid email address');
    event.preventDefault();
    return;
  }
  
  // Validate the password field
  if (passwordField.value.length < 8) {
    alert('Password must be at least 8 characters long');
    event.preventDefault();
    return;
  }
});

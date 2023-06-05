const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (validateForm()) {
    form.submit();
  }
});
function hideError(input) {
    // Get the parent form group element
    const formGroup = input.parentElement;
    
    // Remove the error class from the form group
    formGroup.classList.remove('error');
    
    // Get the error message element
    const errorMessage = formGroup.querySelector('.error-message');
    
    // Clear the error message text
    errorMessage.textContent = '';
  }
function validateForm() {
  let isValid = true;

  // Validate first name
  const firstNameInput = document.querySelector('#first_name');
  if (!firstNameInput.value) {
    showError(firstNameInput, 'First name is required');
    isValid = false;
  } else {
    hideError(firstNameInput);
  }

  // Validate last name
  const lastNameInput = document.querySelector('#last_name');
  if (!lastNameInput.value) {
    showError(lastNameInput, 'Last name is required');
    isValid = false;
  } else {
    hideError(lastNameInput);
  }
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
  }
  

  // Validate email
  const emailInput = document.querySelector('#email');
  if (!emailInput.value) {
    showError(emailInput, 'Email is required');
    isValid = false;
  } else if (!validateEmail(emailInput.value)) {
    showError(emailInput, 'Email is invalid');
    isValid = false;
  } else {
    hideError(emailInput);
  }

  // Validate password
  const passwordInput = document.querySelector('#password');
  if (!passwordInput.value) {
    showError(passwordInput, 'Password is required');
    isValid = false;
  } else if (passwordInput.value.length < 8) {
    showError(passwordInput, 'Password must be at least 8 characters long');
    isValid = false;
  } else {
    hideError(passwordInput);
  }

  // Validate repeat password
  const repeatPasswordInput = document.querySelector('#repeat-password');
  if (!repeatPasswordInput.value) {
    showError(repeatPasswordInput, 'Repeat password is required');
    isValid = false;
  } else if (repeatPasswordInput.value !== passwordInput.value) {
    showError(repeatPasswordInput, 'Passwords do not match');
    isValid = false;
  } else {
    hideError(repeatPasswordInput);
  }

  return isValid;
}

function showError(input, message) {

    const formGroup = input.parentElement;
    
    formGroup.classList.add('error');

    const errorMessage = formGroup.querySelector('.error-message');

    errorMessage.textContent = message;
  }
  
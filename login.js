let loginForm = document.getElementById('login-form');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let emailError = document.getElementById('email-error');
let passwordError = document.getElementById('password-error');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

 
  emailError.textContent = '';
  passwordError.textContent = '';


  let email = emailInput.value;
  let password = passwordInput.value;


  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = 'Invalid email address';
    return;
  }


  if (password.length <= 8) {
    passwordError.textContent = 'Password must be more than 8 characters';
    return;
  }


  alert('Login successful!');

window.location.href = 'index3.html';
});
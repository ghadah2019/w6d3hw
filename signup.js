let signupForm = document.getElementById('signup-form');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let passwordError = document.getElementById('password-error');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();

  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';

  let name = nameInput.value.trim();
  let email = emailInput.value.trim();
  let password = passwordInput.value.trim();

  if (name.length <= 5) {
    nameError.textContent = 'Name must be more than 5 letters';
    return;
  }

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = 'Invalid email address';
    return;
  }

  if (password.length <= 8) {
    passwordError.textContent = 'Password must be more than 8 characters';
    return;
  }

  fetch('https://655243865c69a7790329cbfe.mockapi.io/user/user', {
    method: 'POST',
    body: JSON.stringify({
      name: name,
      email: email,
      password: password
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then(response => {
    if (response.ok) {
 
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      localStorage.setItem('isAdmin', isAdmin);

      alert('Sign up successful!');
      signupForm.reset();
      window.location.href = 'index3.html';
    } else {
      throw new Error('Failed to sign up');
    }
  })
  .catch(error => {
    console.error(error);
    alert('Sign up failed. Please try again later.');
  });
});
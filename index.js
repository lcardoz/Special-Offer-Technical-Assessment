const form = document.getElementById('my-form');

// BONUS: Hover states on buttons and form fields.

form.addEventListener('submit', (e) => {
  e.preventDefault();

  document.body.style.backgroundImage = 'none';
  document.body.style.backgroundColor = '#952861';

  form.reset();
});

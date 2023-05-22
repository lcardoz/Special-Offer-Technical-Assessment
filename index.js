const form = document.getElementById('my-form');

// Hover states on buttons and form fields is a plus.

form.addEventListener('submit', function(event) {
  event.preventDefault();

  document.body.style.backgroundImage = 'none';
  document.body.style.backgroundColor = 'violet';

  form.reset();
});



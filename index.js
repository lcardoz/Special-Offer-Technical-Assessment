const form = document.getElementById('my-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  document.body.style.backgroundImage = 'none';
  document.body.style.backgroundColor = '#952861';

  form.reset();
});

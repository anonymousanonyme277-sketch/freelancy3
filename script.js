// Simple form submission alert
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks! Your message has been sent.');
  form.reset();
});

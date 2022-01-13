const input = document.querySelector('.input-group input');
let inputInterval = null;
let hue = 0;

function changeBackgroundColor() {
  if (++hue >= 360) hue -= 360;
  input.style.backgroundColor = `hsl(${hue}, 90%, 80%)`;
}

input.addEventListener('focus', () => {
  inputInterval = setInterval(changeBackgroundColor);
});

input.addEventListener('blur', () => {
  clearInterval(inputInterval);
  inputInterval = null;

  hue = 0;
  input.style.backgroundColor = '#fff';
});

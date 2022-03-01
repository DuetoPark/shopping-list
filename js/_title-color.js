const titleLink = document.querySelector('.title a');
let gnbInterval = null;
let hue = 0;

function changeFontColor() {
  if (++hue >= 360) hue -= 360;
  titleLink.style.color = `hsl(${hue}, 90%, 50%)`;
}

window.addEventListener('load', () => {
  gnbInterval = setInterval(changeFontColor, 10);
});

const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');

buttonStop.disabled = true;
let intervalId = null;

buttonStart.addEventListener('click', onStartButtonClick);
buttonStop.addEventListener('click', onStopButtonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function onStartButtonClick() { 
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  buttonStart.disabled = true;
  buttonStop.disabled = false;
};

function onStopButtonClick() { 
  clearInterval(intervalId);
  buttonStart.disabled = false;
  buttonStop.disabled = true;
};
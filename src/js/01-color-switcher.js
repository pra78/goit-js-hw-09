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
  buttonDisabledToggle(buttonStart, buttonStop);
};

function onStopButtonClick() { 
  clearInterval(intervalId);
  buttonDisabledToggle(buttonStart, buttonStop);
};

function buttonDisabledToggle(button1, button2) {
  if (button1.disabled) {
    return button1.disabled = false, button2.disabled = true;
  }
  return button1.disabled = true, button2.disabled = false;
}
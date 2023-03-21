// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// Notiflix for client-side non-blocking notifications, popup boxes...
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const buttonStart = document.querySelector('button[data-start]');
const clockFace = document.querySelectorAll('.field .value')

buttonStart.addEventListener('click', onStartButtonClick);

buttonStart.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    // замість window.alert() більш юзер-френдлі було б:
    // minDate: Date.now(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= Date.now()) {
            Notify.failure("Please choose a date in the future");
        } else {
            buttonStart.disabled = false;
        }
    },
};

const fp = flatpickr("#datetime-picker", { ...options });

function onStartButtonClick() {
    buttonStart.disabled = true;
    const countDownTimerTarget = fp.selectedDates[0];

    const intervalId = setInterval(() => { 
        const currentTime = Date.now();
        const deltaTime = countDownTimerTarget - currentTime;
        if (deltaTime < 0) {
            deltaTime = 0;
            clearInterval(intervalId);
        }
        const { days, hours, minutes, seconds } = convertMs(deltaTime);
        clockFace[0].textContent = days;
        clockFace[1].textContent = addLeadingZero(hours);
        clockFace[2].textContent = addLeadingZero(minutes);
        clockFace[3].textContent = addLeadingZero(seconds);
    }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, "0");
}
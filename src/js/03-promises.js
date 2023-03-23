import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form');

form.addEventListener('submit', onSubmitButtonPressed);

function onSubmitButtonPressed(event) {
  event.preventDefault();
  
  let position = 0;
  let delay = Number(form.delay.value);
  const step = Number(form.step.value);
  let amount = Number(form.amount.value);

  while (amount > 0) {
    position += 1;
    createPromise(position, delay)
      .then(result => Notify.success(result))
      .catch(error => Notify.failure(error));
    delay += step;
    amount -= 1;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}

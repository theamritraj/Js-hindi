const inputField = document.getElementById('seconds-input');
const startButton = document.getElementById('start-btn');
const resetButton = document.getElementById('reset-btn');
const timerDisplay = document.getElementById('timer-display');

let countdown;
let timeLeft;

startButton.addEventListener('click', () => {
  const seconds = parseInt(inputField.value, 10);
  if (isNaN(seconds) || seconds <= 0) {
    alert('Please enter a valid number of seconds.');
    return;
  }

  clearInterval(countdown);
  timeLeft = seconds;
  timerDisplay.textContent = timeLeft;

  countdown = setInterval(() => {
    timeLeft -= 1;
    timerDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      alert('Time is up!');
    }
  }, 1000);
});

resetButton.addEventListener('click', () => {
  clearInterval(countdown);
  timeLeft = 0;
  timerDisplay.textContent = '0';
  inputField.value = '';
});

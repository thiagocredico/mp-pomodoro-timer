// counter.js
let timer;
let remainingTime = 25 * 60; // Initial time: 25 minutes
const timerDisplay = document.getElementById('counter');
const startButton = document.getElementById('start');

function startTimer() {
  startButton.disabled = true;
  
  timer = setInterval(() => {
    remainingTime--;
    updateTimerDisplay();
    
    if (remainingTime <= 0) {
      clearInterval(timer);
      startButton.disabled = false;
    }
  }, 1000);
}

function resetTimer(time) {
  clearInterval(timer);
  remainingTime = time;
  updateTimerDisplay();
  startButton.disabled = false;
}

function updateTimerDisplay() {
  const minutes = Math.floor(remainingTime / 60).toString().padStart(2, '0');
  const seconds = (remainingTime % 60).toString().padStart(2, '0');
  timerDisplay.innerText = `${minutes}:${seconds}`;
}

startButton.addEventListener('click', () => {
  startTimer();
});

const pomodoroButton = document.querySelector('.modality:nth-child(1)');
const shortBreakButton = document.querySelector('.modality:nth-child(2)');
const longBreakButton = document.querySelector('.modality:nth-child(3)');

pomodoroButton.addEventListener('click', () => {
  resetTimer(25 * 60); // 25 minutes
});

shortBreakButton.addEventListener('click', () => {
  resetTimer(5 * 60); // 5 minutes
});

longBreakButton.addEventListener('click', () => {
  resetTimer(15 * 60); // 15 minutes
});

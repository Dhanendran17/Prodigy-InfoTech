let startTime, updatedTime, difference, tInterval;
let running = false;

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapsContainer = document.getElementById('laps');

startStopButton.addEventListener('click', startStop);
resetButton.addEventListener('click', reset);
lapButton.addEventListener('click', lap);

function startStop() {
  if (!running) {
    startTime = new Date().getTime();
    tInterval = setInterval(updateTime, 1000);
    startStopButton.textContent = 'Stop';
    running = true;
  } else {
    clearInterval(tInterval);
    startStopButton.textContent = 'Start';
    running = false;
  }
}

function reset() {
  clearInterval(tInterval);
  display.textContent = '00:00:00';
  lapsContainer.innerHTML = '';
  startStopButton.textContent = 'Start';
  running = false;
}

function lap() {
  if (running) {
    const lapTime = display.textContent;
    const lapElement = document.createElement('div');
    lapElement.className = 'lap';
    lapElement.textContent = lapTime;
    lapsContainer.appendChild(lapElement);
  }
}

function updateTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
  return (number < 10 ? '0' : '') + number;
}

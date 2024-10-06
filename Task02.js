let timer;
let seconds = 0;
let lapCount = 1;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapsList = document.getElementById('laps');

function formatTime(s) {
    const hrs = Math.floor(s / 3600);
    const mins = Math.floor((s % 3600) / 60);
    const secs = s % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function startTimer() {
    timer = setInterval(() => {
        seconds++;
        display.textContent = formatTime(seconds);
    }, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
    lapButton.disabled = false;
}

function stopTimer() {
    clearInterval(timer);
    startButton.disabled = false;
    stopButton.disabled = true;
    lapButton.disabled = true;
}

function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    lapCount = 1;
    display.textContent = '00:00:00';
    lapsList.innerHTML = '';
    startButton.disabled = false;
    stopButton.disabled = true;
    lapButton.disabled = true;
}

function recordLap() {
    const lapTime = formatTime(seconds);
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
    lapsList.appendChild(lapItem);
    lapCount++;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', recordLap);

// Initially disable stop and lap buttons
stopButton.disabled = true;
lapButton.disabled = true;

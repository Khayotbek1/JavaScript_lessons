const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const counterE1 = document.getElementById("counter");
let counter = 0;
let counterInterval;
let count = true;

function start() {
  if (count) {
    counterInterval = setInterval(() => {
      counter++;
      counterE1.textContent = counter;
    }, 1000);
    count = !count;
  }
}

function pause() {
  setTimeout(() => {
    clearInterval(counterInterval);
    count = !count;
  });
}

startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);

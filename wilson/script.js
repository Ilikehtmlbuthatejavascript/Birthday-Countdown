let clickCount = 0;
let highscore = localStorage.getItem('highscore') || 0;
let timer;

function countClicks() {
  clickCount++;
  document.getElementById('clickCount').innerText = clickCount;
}

function startTimer(duration, display) {
  let timer = duration, seconds;
  let interval = setInterval(function () {
    seconds = parseInt(timer % 60, 10);
    display.textContent = "Time: " + seconds;

    if (--timer < 0) {
      clearInterval(interval);
      document.getElementById('nameEntry').style.display = 'block';
      document.getElementById('highscore').innerText = highscore;
    }
  }, 1000);
}

function submitScore() {
  let playerName = document.getElementById('playerName').value;
  localStorage.setItem('highscore', Math.max(highscore, clickCount));
  highscore = localStorage.getItem('highscore');
  document.getElementById('highscore').innerText = highscore;
  document.getElementById('nameEntry').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
  let tenSeconds = 10,
      display = document.querySelector('#timer');
  startTimer(tenSeconds, display);
});

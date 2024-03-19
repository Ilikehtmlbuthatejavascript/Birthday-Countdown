let clickCount = 0;
let highscore = 0;
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
  // Send score to the server
  sendScore(playerName, clickCount);
}

function sendScore(playerName, score) {
  // Simulate sending score to server
  // In a real application, you would use AJAX or fetch to send data to your server
  // Here, we're just updating the highscore variable for demonstration purposes
  if (score > highscore) {
    highscore = score;
    document.getElementById('highscore').innerText = highscore;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  let tenSeconds = 10,
      display = document.querySelector('#timer');
  startTimer(tenSeconds, display);
});

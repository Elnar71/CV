'use strict';
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
let displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔ No Number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🏆 That is Correct!');
    displayNumber(secretNumber);
    document.body.style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `Too high` : `Too Low`);
      displayScore((score = score - 1));
    } else {
      displayMessage(`☹ You lost the game`);
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.body.style.backgroundColor = 'rgb(44, 82, 139)';
  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.number').style.width = '15rem';
  displayNumber('?');
  document.querySelector('.guess').value = '';
});

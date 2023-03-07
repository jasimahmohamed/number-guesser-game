let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

minNum.textContent = min
maxNum.textContent = max

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

game.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload()
  }
})

guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value)
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red')
  } else if (guess !== winningNum) {
    guessesLeft -= 1
    guessInput.style.borderColor = 'red'
    guessInput.value = ''
    setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')
  } else if (guessesLeft === 0) {
    gameOver(false, `Game over :( The winning number was ${winningNum}
      `)
  } else {
    gameOver(true, `${winningNum} is correct, you win!`)
  }
  if (guessesLeft === 0) {
    gameOver(false, `Game over :( The winning number was ${winningNum}`)
  }
})

function gameOver(won, msg) {
  let color
  won === true ? color = 'green' : 'red'
  guessInput.disabled = true
  guessInput.style.borderColor = color
  setMessage(msg, color)
  guessBtn.value = 'Play Again?'
  guessBtn.className += 'play-again'
}

function setMessage(msg, color) {
  message.style.color = color
  message.textContent = msg
}
document.addEventListener("DOMContentLoaded", () => {
  const btnStart = document.querySelector("#btn-start");
  const highestSpans = [...document.querySelectorAll(".highest span")];

  // startGame();
  btnStart.addEventListener("click", startGame);
  const highestScore = localStorage.getItem("@genius-highestScore");

  if (highestScore) {
    highestSpans.forEach((span) => {
      span.innerText = highestScore;
    });
  }
});

function startGame() {
  const buttonsColors = [...document.querySelectorAll(".btn-color")];
  const menu = document.querySelector(".menu");

  menu.classList.add("d-none");

  const sequence = [];
  const userSequence = [];

  buttonsColors.map((button) => {
    button.addEventListener("click", () => {
      buttonValue = Number(button.value);
      userSequence.push(buttonValue);
      compareSequence(sequence, userSequence);
    });
  });

  generateSequence(sequence);
  executeSequence(sequence);
}

function generateSequence(arr) {
  const value = getRandom();
  arr.push(value);
}

function getRandom() {
  const randomNumber = Math.floor(Math.random() * 4) + 1;
  return randomNumber;
}

function executeSequence(sequence, speed = 500) {
  const buttonsColors = [...document.querySelectorAll(".btn-color")];
  const [btnBlue, btnYellow, btnRed, btnGreen] = buttonsColors;
  const exucutingSequence = [...sequence];

  blinkButton();

  function blinkButton() {
    if (exucutingSequence.length > 0) {
      setTimeout(() => {
        const value = exucutingSequence.shift();

        switch (value) {
          case 1:
            activeButton(btnBlue, speed);
            break;
          case 2:
            activeButton(btnYellow, speed);
            break;
          case 3:
            activeButton(btnRed, speed);
            break;
          case 4:
            activeButton(btnGreen, speed);
            break;
          default:
            alert("Houve Algum problema ao executar o jogo");
            break;
        }

        blinkButton();
      }, 700);
    }
  }
}

function compareSequence(sequence, userSequence) {
  const lastClickedButton = userSequence[userSequence.length - 1];

  if (sequence[userSequence.length - 1] !== lastClickedButton) {
    gameOver(sequence, userSequence);
  }

  if (userSequence.length === sequence.length) {
    setTimeout(() => {
      generateSequence(sequence);
      executeSequence(sequence);
      userSequence.length = 0;
      setScore(sequence.length - 1);
    }, 500);
  }
}

function gameOver(sequence, userSequence) {
  const menu = document.querySelector(".menu");
  const gameOverMessage = document.querySelector(".game-over-message");

  sequence.length = 0;
  userSequence.length = 0;
  setScore(0);

  menu.classList.remove("d-none");
  gameOverMessage.classList.remove("d-none");
}

function activeButton(button, speed) {
  button.classList.add("lighter");

  setTimeout(() => {
    button.classList.remove("lighter");
  }, speed);
}

function setScore(score = 0) {
  const scoreSpan = document.querySelector(".score span");
  const highestSpans = [...document.querySelectorAll(".highest span")];
  const highestScore = localStorage.getItem("@genius-highestScore");

  if (!highestScore || score > highestScore) {
    localStorage.setItem("@genius-highestScore", score);

    highestSpans.forEach((span) => {
      span.innerText = score;
    });
  }

  scoreSpan.innerText = score;
}

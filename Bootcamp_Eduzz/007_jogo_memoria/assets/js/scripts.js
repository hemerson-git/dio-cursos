document.addEventListener("DOMContentLoaded", () => {
  const btnStart = document.querySelector("#btn-start");
  // startGame();
  btnStart.addEventListener("click", startGame);
});

function startGame() {
  const sequence = [];
  const buttonsColors = [...document.querySelectorAll(".btn-color")];

  generateSequence(sequence);
  executeSequence(sequence, buttonsColors);
}

function generateSequence(arr) {
  const value = getRandom();
  arr.push(value);
}

function getRandom() {
  const randomNumber = Math.floor(Math.random() * 4) + 1;
  return randomNumber;
}

function executeSequence(sequence, buttons, speed = 500) {
  const [btnBlue, btnYellow, btnRed, btnGreen] = buttons;

  sequence.map((value) => {
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
  });

  generateSequence(sequence);
}

function activeButton(button, speed) {
  button.classList.add("lighter");

  setTimeout(() => {
    button.classList.remove("lighter");
  }, speed);
}

function setPontuation(score = 3) {
  const scoreSpan = document.querySelector(".score span");

  scoreSpan.innerText = score;
}

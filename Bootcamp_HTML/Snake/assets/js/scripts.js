let canvas = document.querySelector('#snake');
let context = canvas.getContext('2d');
let box = 32;
let snake = [{
  x: 8 * box,
  y: 8 * box
}]

let size = snake.length;
let food = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box
}

let direction = "right";

let record = JSON.parse(localStorage.getItem('record')) ?? 0;

function createBackground() {
  context.fillStyle = '#071108';
  context.fillRect(0, 0, 16 * box, 16 * box);
}

function createSnake() {
  for (let i = 0; i < snake.length; i++) {
    context.fillStyle = '#c7dbe6';
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

function createFood() {
  context.fillStyle = '#bfb1c1'
  context.fillRect(food.x, food.y, box, box)
}

function gameOver() {
  for(let i = 1; i < snake.length; i++) {
    if(snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
      if (size > record) {
        localStorage.setItem('record', size - 1);
      }

      clearInterval(game);
      alert('Game Over');
    }
  }
}

function restartGame() {
  location.href = location.href;
}

document.addEventListener('keydown', chageDirection);

function chageDirection(e) {
  // Pega o código do evento e faz um replace para deixar apenas a string de direção
  let newDirection = (e.code).replace('Arrow', '').toLowerCase();

  if (
    (direction === 'up' && newDirection === 'down') ||
    (direction === 'down' && newDirection === 'up') ||
    (direction === 'left' && newDirection === 'right') ||
    (direction === 'right' && newDirection === 'left')
  ) {
    return;
  }
  
  direction = newDirection;
}

function increasePotuation() {
  let pointsSpan = document.querySelector('#points span');
  size ++;

  pointsSpan.textContent = size - 1;
  
}

function gameStart() {
  gameOver();
  
  if(snake[0].x > 15 * box) snake[0].x = 0;
  if(snake[0].x < 0) snake[0].x = 15 * box;
  if(snake[0].y > 15 * box) snake[0].y = 0;
  if(snake[0].y < 0) snake[0].y = 15 * box;
  
  createBackground();
  createSnake();
  createFood();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (direction === 'right') {
    snakeX += box;
  }

  if (direction === 'left') {
    snakeX -= box;
  }

  if (direction === 'down') {
    snakeY += box;
  }

  if (direction === 'up') {
    snakeY -= box;
  }

  
  if (snakeX !== food.x || snakeY !== food.y) {
    snake.pop();
  } else {
    food.x = Math.floor(Math.random() * 15 + 1) * box;
    food.y = Math.floor(Math.random() * 15 + 1) * box;
    increasePotuation();
  }

  // snake.pop();
  
  let newHead = {
    x: snakeX,
    y: snakeY
  }

  snake.unshift(newHead);
}

let game = setInterval(gameStart, 100)

document.addEventListener('DOMContentLoaded', () => {
  let pointsSpan = document.querySelector('#points span');
  let maxPontuationSpan = document.querySelector('#maxPontuation span');
  let restartGameButton = document.querySelector('#restartGame');

  restartGameButton.addEventListener('click', restartGame);

  pointsSpan.textContent = size - 1;
  maxPontuationSpan.textContent = record;
})

let canvas = document.querySelector('#snake');
let context = canvas.getContext('2d');
let box = 32;
let snake = [{
  x: 8 * box,
  y: 8 * box
}]

let food = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box
}

let direction = "right";

function createBackground() {
  context.fillStyle = 'lightgreen';
  context.fillRect(0, 0, 16 * box, 16 * box);
}

function createSnake() {
  for (let i = 0; i < snake.length; i++) {
    context.fillStyle = 'green';
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

function createFood() {
  context.fillStyle = 'red'
  context.fillRect(food.x, food.y, box, box)
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

function gameStart() {
  if(snake[0].x > 15 * box && direction === 'right') snake[0].x = 0;
  if(snake[0].x < 0 && direction === 'left') snake[0].x = 15 * box;
  if(snake[0].y > 15 * box && direction === 'down') snake[0].y = 0;
  if(snake[0].y < 0 && direction === 'up') snake[0].y = 15 * box;
  
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

  snake.pop();

  let newHead = {
    x: snakeX,
    y: snakeY
  }

  snake.unshift(newHead);
}

let game = setInterval(gameStart, 100)

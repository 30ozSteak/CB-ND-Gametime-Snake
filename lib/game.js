const Snake = require('./Snake.js');
const Food = require('./Food.js');


class Game {
  constructor() {
    this.gameOver = false;
    this.score = 0;
    this.highScore = 92;
    this.snake = new Snake(50, 50, 20, 20, 'rgb(255, 0, 0)', 0);
    this.food = new Food(350, 20, 20, 20, 'rgb(0, 255, 0)');
  }

  startGame() {
    this.snake.die = false;
    this.snake.makeInitialSnake();
  }

  animate(context) {
    this.snake.drawSnakeBody(context);
    this.snake.move();
    this.food.draw(context);
    this.eatFood();
    this.snake.checkEatItself(context);
    this.snake.checkInBounds(context);
  }

  eatFood() {
    if (this.snake.head.isCollidingWith(this.food)) {
      this.score += 1;
      this.food.createFood();
      this.snake.growSnake();
    }
  }
}

module.exports = Game;
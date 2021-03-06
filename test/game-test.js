const { expect } = require('chai');
const Game = require('../lib/Game.js');
const Snake = require('../lib/Snake.js');
const Food = require('../lib/Food.js');

describe('Game', () => {
  let game;
  let snake;
  let food;
  beforeEach(() => {
    game = new Game(false, 0, 0, snake = new Snake(50, 50, 20, 20, 'rgb(255, 0, 0)', 1), food = new Food(350, 20, 20, 20, 'rgb(0, 255, 0)'));
  });

  it('Should exist', () => {
    expect(game).to.exist;
    expect(game).to.be.an.instanceOf(Game);
  });

  it('Should set instance properties', () => {
    const actualState = game;
    const expectedState = {
      gameOver: false,
      score: 0,
      highScore: 0,
      snake: new Snake(50, 50, 20, 20, 'rgb(255, 0, 0)', 0),
      food: new Food(350, 20, 20, 20, 'rgb(0, 255, 0)')
    }

    expect(actualState).to.deep.equal(expectedState);
  });

  it('Should should have a eatFood method that does not eat', () => {
    const eatFood = snake.isCollidingWith(food);

    const actualState = eatFood;
    const expectedState = false; 

    expect(actualState).to.deep.equal(expectedState);
  });

  it('Should increase score by one after eating food', () => {
    const eatFood = snake.isCollidingWith(food);
    const actualState = snake.score;
    const expectedState = 1;
  })
});
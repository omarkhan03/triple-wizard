import { update as updateSnake, draw as drawSnake, 
  SNAKE_SPEED, onSnake, getSnakeHead, snakeIntersection, teleportSnake} from './snake.js'

import { update as updateP2, draw as drawP2, onP2, getP2Head, P2Intersection, teleportP2} from './playerTwo.js'

import { update as updateFood, draw as drawFood} from './food.js'
import { outsideGrid } from './grid.js'


let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')


function main(currentTime) {
  if (gameOver) {
    if (confirm('You lost. Press OK to restart.')) {
      window.location = '/'
    }
    return
  }

  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1/SNAKE_SPEED) return
   
  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main)

function update() {
  updateSnake()
  updateFood()
  checkDeath()
  checkWall()

  updateP2()
  checkP2Death()
  checkP2Wall()
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawP2(gameBoard)
  drawFood(gameBoard)
}

function checkDeath() {
  gameOver = snakeIntersection()
}

function checkP2Death() {
  gameOver = P2Intersection()
}

function checkWall() {
  if (outsideGrid(getSnakeHead())) {
    teleportSnake()
  }
}

function checkP2Wall() {
  if (outsideGrid(getP2Head())) {
    teleportP2()
  }
}
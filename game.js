import { update as updateSnake, draw as drawSnake, 
  SNAKE_SPEED, onSnake, getSnakeHead, snakeIntersection, teleportSnake} from './snake.js'

import { update as updateP2, draw as drawP2, onP2, getP2Head, P2Intersection, teleportP2} from './playerTwo.js'

import { update as updateFood, draw as drawFood} from './food.js'
import { outsideGrid } from './grid.js'

import { draw as drawScore } from './scoreBoard.js'


let lastRenderTime = 0
let winP2 = false
let winP1 = false
export const gameBoard = document.getElementById('game-board')


function main(currentTime) {
  if (winP1) {
      if (confirm('Blue wins!. Press OK to restart.')) {
      window.location = '/'
    }
    return
  }
  if (winP2) {
    if (confirm('Red wins!. Press OK to restart.')) {
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
  drawScore(gameBoard)
}

function checkDeath() {
  winP2 = snakeIntersection()
}

function checkP2Death() {
  winP1 = P2Intersection()
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
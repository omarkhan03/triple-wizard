import { update as updateSnake, draw as drawSnake, 
  SNAKE_SPEED, onSnake, getSnakeHead, snakeIntersection, teleportSnake, snakeBody} from './snake.js'

import { update as updateP2, draw as drawP2, onP2, getP2Head, P2Intersection, teleportP2, P2Body} from './playerTwo.js'

import { update as updateFood, draw as drawFood} from './food.js'
import { outsideGrid } from './grid.js'

import { draw as drawScore } from './scoreBoard.js'

let lastRenderTime = 0
let winP2 = false
let winP1 = false
export const gameBoard = document.getElementById('game-board')

const blueWinScreen = document.getElementById('blue-win')
blueWinScreen.style = 'visibility: hidden;'
const redWinScreen = document.getElementById('red-win')
redWinScreen.style = 'visibility: hidden;'
const drawGame = document.getElementById('draw-game')
drawGame.style = 'visibility: hidden;'

window.addEventListener("keydown", removeStart);

function removeStart( e ) {

  if (
    e.key === 'w' ||
    e.key === 'a' ||
    e.key === 's' ||
    e.key === 'd' ||
    e.key === 'ArrowUp' ||
    e.key === 'ArrowDown' ||
    e.key === 'ArrowLeft' ||
    e.key === 'ArrowRight'
  ) {
      const start = document.getElementById('start')
      
      var seconds = 1;
      start.style.transition = "opacity "+seconds+"s ease"

      start.style.opacity = 0
      setTimeout(function() {
          start.remove()
      }, 1000)

      window.removeEventListener("keydown", removeStart);
  }
}



function main(currentTime) {
  if (winP1 && winP2) {
    drawGame.style = 'visibility: visible; opacity: 0.8;'
    window.addEventListener('keydown', function(e) {
      if (e.key === " ") {
        window.location = '/2P_snake_game/'
      }
    })
    return
  }
  else if (winP1) {
    blueWinScreen.style = 'visibility: visible; opacity: 0.8;'
    window.addEventListener('keydown', function(e) {
      if (e.key === " ") {
        window.location = '/'
      }
    })
    return
  }
  else if (winP2) {
    redWinScreen.style = 'visibility: visible; opacity: 0.8;'
    window.addEventListener('keydown', function(e) {
      if (e.key === " ") {
        window.location = '/'
      }
    })
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
  updateP2()
  updateFood()

  checkP2Death()
  checkP2Wall()

  checkDeath()
  checkWall()
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawP2(gameBoard)
  drawFood(gameBoard)
  drawScore(gameBoard)
}

function checkDeath() {
  winP2 = snakeIntersection() || P2Body.length >= 80;
}

function checkP2Death() {
  winP1 = P2Intersection() || snakeBody.length >= 80;
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
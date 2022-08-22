import { onSnake, expandSnake } from './snake.js'
import { onP2, expandP2 } from './playerTwo.js'
import { randomGridPosition } from './grid.js'
import { draw as drawScore, scoreRed, scoreBlue } from './scoreBoard.js'
import { gameBoard } from './game.js'

let food = getRandomFoodPosition()

const EXPANSION_RATE = 1

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    food = getRandomFoodPosition()
    scoreBlue()
    drawScore(gameBoard)
  }
  if (onP2(food)) {
    expandP2(EXPANSION_RATE)
    food = getRandomFoodPosition()
    scoreRed()
    drawScore(gameBoard)
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}
import { onwizard, expandwizard } from './wizard.js'
// import { onP2, expandP2 } from './playerTwo.js'
import { randomGridPosition } from './grid.js'
import { draw as drawScore, scoreRed, scoreBlue } from './scoreBoard.js'
import { gameBoard } from './game.js'

let food = [
  getRandomFoodPosition(),
  getRandomFoodPosition(),
  getRandomFoodPosition(),
]

const EXPANSION_RATE = 2

export function update() {
  if (onwizard(food[0])) {
    expandwizard(EXPANSION_RATE)
    food[0] = getRandomFoodPosition()
    scoreBlue()
    drawScore(gameBoard)
  }
  if (onP2(food[0])) {
    expandP2(EXPANSION_RATE)
    food[0] = getRandomFoodPosition()
    scoreRed()
    drawScore(gameBoard)
  }

  if (onwizard(food[1])) {
    expandwizard(EXPANSION_RATE)
    food[1] = getRandomFoodPosition()
    scoreBlue()
    drawScore(gameBoard)
  }
  if (onP2(food[1])) {
    expandP2(EXPANSION_RATE)
    food[1] = getRandomFoodPosition()
    scoreRed()
    drawScore(gameBoard)
  }

  if (onwizard(food[2])) {
    expandwizard(EXPANSION_RATE)
    food[2] = getRandomFoodPosition()
    scoreBlue()
    drawScore(gameBoard)
  }
  if (onP2(food[2])) {
    expandP2(EXPANSION_RATE)
    food[2] = getRandomFoodPosition()
    scoreRed()
    drawScore(gameBoard)
  }
}

export function draw(gameBoard) {
  const foodElement1 = document.createElement('div')
  foodElement1.style.gridRowStart = food[0].y
  foodElement1.style.gridColumnStart = food[0].x
  foodElement1.classList.add('food')
  gameBoard.appendChild(foodElement1)

  const foodElement2 = document.createElement('div')
  foodElement2.style.gridRowStart = food[1].y
  foodElement2.style.gridColumnStart = food[1].x
  foodElement2.classList.add('food')
  gameBoard.appendChild(foodElement2)

  const foodElement3 = document.createElement('div')
  foodElement3.style.gridRowStart = food[2].y
  foodElement3.style.gridColumnStart = food[2].x
  foodElement3.classList.add('food')
  gameBoard.appendChild(foodElement3)
}

function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onwizard(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}
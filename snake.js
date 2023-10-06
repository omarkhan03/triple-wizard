import { createFireball, fireball } from "./fireball.js"
import { createZap, zap } from "./zap.js"

export const SNAKE_SPEED = 15 //moves this many times per second
export const snakeBody = [ 
  { x: 25, y: 4 },
]
let newSegments = 0

window.addEventListener('keydown', e=> {
  switch (e.key) {
    case 'w':
      snakeBody[0].y --
      break
    case 's':
      snakeBody[0].y ++
      break
    case 'a':
      snakeBody[0].x --
      break
    case 'd':
      snakeBody[0].x ++
      break

    case 'ArrowUp':
      if (fireball.power==0)
        createFireball(snakeBody[0].y, snakeBody[0].x, -1, 0)
      break
    case 'ArrowLeft':
      if (fireball.power==0)
        createFireball(snakeBody[0].y, snakeBody[0].x, 0, -1)
      break
    case 'ArrowDown':
      if (fireball.power==0)
        createFireball(snakeBody[0].y, snakeBody[0].x, 1, 0)
      break
    case 'ArrowRight':
      if (fireball.power==0)
        createFireball(snakeBody[0].y, snakeBody[0].x, 0, 1)
      break
    case 'z':
      if (zap.power==0)
        createZap(snakeBody[0].y, snakeBody[0].x, 0, 1)
      break


  }
})

export function update() {

}

export function move() {

}

export function draw(gameBoard) {
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
  })
}

export function expandSnake(amount) {
  newSegments += amount
}

export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false
    return equalPositions(segment, position)
  })
}

export function getSnakeHead() {
  return snakeBody[0]
}

export function snakeIntersection() {
  return onSnake(snakeBody[0], { ignoreHead: true }) || onP2(snakeBody[0], { ignoreHead: false })
}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
  // for (let i = 0; i < newSegments; i++) {
  //   snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
  // }

  // newSegments=0
}

export function teleportSnake() {
  let oldPos = snakeBody[0]

  switch(oldPos.x) {
    case 0:
      snakeBody[0] = { x: 42, y: oldPos.y }
      break
    case 43:
      snakeBody[0] = { x: 1, y: oldPos.y }
      break

    default:

      switch(oldPos.y) {
        case 0:
          snakeBody[0] = { x: oldPos.x, y: 42 }
          break
        case 43:
          snakeBody[0] = { x: oldPos.x, y: 1 }
          break
      }
  }
}
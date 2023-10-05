import { getP2Direction } from "./input.js"
import { onSnake, snakeBody } from "./snake.js"

export const P2_SPEED = 15 //moves this many times per second
export const P2Body = [ 
  { x: 17, y: 6 },
]
let newSegments = 0

export function update() {
  addSegments()

  const P2Direction = getP2Direction()
  for (let i = P2Body.length -2; i>=0; i--) {
    P2Body[i+1] = { ...P2Body[i] }
  }

  P2Body[0].x += P2Direction.x
  P2Body[0].y += P2Direction.y
}

export function draw(gameBoard) {
  // P2Body.forEach(segment => {
  //   const P2Element = document.createElement('div')
  //   P2Element.style.gridRowStart = segment.y
  //   P2Element.style.gridColumnStart = segment.x
  //   P2Element.classList.add('playerTwo')
  //   gameBoard.appendChild(P2Element)
  // })
}

export function expandP2(amount) {
  newSegments += amount
}

export function onP2(position, { ignoreHead = false } = {}) {
  return P2Body.some((segment, index) => {
    if (ignoreHead && index === 0) return false
    return equalPositions(segment, position)
  })
}

export function getP2Head() {
  return P2Body[0]
}

export function P2Intersection() {
  return onP2(P2Body[0], { ignoreHead: true }) || onSnake(P2Body[0], { ignoreHead: false })
}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    P2Body.push({ ...P2Body[P2Body.length - 1] })
  }

  newSegments=0
}

export function teleportP2() {
  let oldPos = P2Body[0]

  switch(oldPos.x) {
    case 0:
      P2Body[0] = { x: 42, y: oldPos.y }
      break
    case 43:
      P2Body[0] = { x: 1, y: oldPos.y }
      break

    default:

      switch(oldPos.y) {
        case 0:
          P2Body[0] = { x: oldPos.x, y: 42 }
          break
        case 43:
          P2Body[0] = { x: oldPos.x, y: 1 }
          break
      }
  }
}
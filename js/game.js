/* Course: SENG 513 */
/* Date: NOV 14, 2023 */
/* Assignment 3 */
/* Name: Omar Khan */
/* UCID: 30143707 */

import { draw as drawP1} from './PlayerOne.js'
import { draw as drawP2} from './PlayerTwo.js'
import { update as updateFireball, draw as drawFireball, update2 as updateFireball2, draw2 as drawFireball2, fireball, fireball2 } from './Fireball.js'
import { update as updateZap, draw as drawZap, update2 as updateZap2, draw2 as drawZap2  } from './Zap.js'
import { update as updateIce, draw as drawIce, update2 as updateIce2, draw2 as drawIce2 } from './Ice.js'
import { worms, draw as drawWorm, update as updateWorms } from './Worm.js'

let lastRenderTime = 0
export const gameBoard = document.getElementById('game-board')
const victoryScreen = document.getElementById('victoryScreen')

export let gameOn = true

function main(currentTime) {

  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1/10) return // fps
    
  lastRenderTime = currentTime

  update()
  draw()
}

if (gameOn)
  window.requestAnimationFrame(main)

// Call update functions for all objects
function update() {
  updateFireball()
  updateFireball2()

  updateZap()
  updateZap2()

  updateIce()
  updateIce2()

  updateWorms()
}

// Call draw functions for all objects
function draw() {
  gameBoard.innerHTML = ''
  drawP1(gameBoard)
  drawP2(gameBoard)

  drawFireball(gameBoard)
  drawFireball2(gameBoard)

  drawZap(gameBoard)
  drawZap2(gameBoard)


  drawIce(gameBoard)
  drawIce2(gameBoard)

  drawWorm(gameBoard)

// Draw grid
 for (let i=0; i<=25; i++) {
   for (let j=0; j<=25; j++) {
     const square = document.createElement('div')
     square.style.gridRowStart = i
     square.style.gridColumnStart = j
     square.classList.add('square')
     gameBoard.appendChild(square)
   }
 }
}

// Called when player one wins
export function handleP1Victory() {
  victoryScreen.className = "endscreen"
  victoryScreen.firstChild.innerHTML = "P1 Wins!"
  gameOn = false
}

// Called when player two wins
export function handleP2Victory() {
  victoryScreen.className = "endscreen"
  victoryScreen.firstChild.innerHTML = "P2 Wins!"
  gameOn = false
}

// Called when there is a draw
export function handleDraw() {
  victoryScreen.className = "endscreen"
  victoryScreen.firstChild.innerHTML = "Draw!"
  gameOn = false
}
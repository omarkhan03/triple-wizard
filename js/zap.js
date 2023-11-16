/* Course: SENG 513 */
/* Date: NOV 14, 2023 */
/* Assignment 3 */
/* Name: Omar Khan */
/* UCID: 30143707 */

/* Note to marker: 
  CUSTOM ALGORITHM on the how the zap attack tiles on the grid - lines 50-76 and 117-143
  CUSTOM ANIMATION on movement of zap attack - lines 24 to 30
*/

import { checkWorm } from './Worm.js'

export let zap = {
  x: 6, y: 6, power: 0
}

let direction = {
  x: 0, y: 0
}

// update zap position
export function update() {
  zap.x += direction.x 
  zap.y += direction.y 

  if (zap.power > 0) {
    checkWorm(zap.x, zap.y, 1)
    zap.power--
  }

  // edge detection
  if (zap.x > 25 || zap.y > 25 || zap.x < 1 || zap.y < 1) {
    zap.power = 0
    zap.x = 0;
    zap.y = 0;
  }
}

// this function is called when the player uses the zap attack
export function createZap(x, y, dirX, dirY) {
  zap.x = x
  zap.y = y

  direction.x = dirX
  direction.y = dirY

  zap.power = 7
}

// CUSTOM ALGORITHM - draw the zap on the grid
export function draw(gameBoard) {
  if (zap.power>1) {
    const zapElement = document.createElement('div')
    zapElement.style.gridRowStart = zap.x 
    zapElement.style.gridColumnStart = zap.y
    zapElement.classList.add('zap')
    gameBoard.appendChild(zapElement)
  } else if (zap.power==1) {

    for (let i=zap.x-3; i<=zap.x+3; i++) {
      for (let j=zap.y-3; j<=zap.y+3; j++) {
        const zapElement = document.createElement('div')
        zapElement.style.gridRowStart = i
        zapElement.style.gridColumnStart = j
        zapElement.classList.add('zap')

        checkWorm(i, j, 1)

        // make diamond shape
        if (Math.abs(i-zap.x)+Math.abs(j-zap.y)<=4) {
          gameBoard.appendChild(zapElement)
        }
      }
    }
  }
}

//--------------- Below is the same code as above, but for the second player ---------------//

export let zap2 = {
  x: 6, y: 6, power: 0
}

let direction2 = {
  x: 0, y: 0
}

// update zap position
export function update2() {
  zap2.x += direction2.x
  zap2.y += direction2.y

  if (zap2.power > 0) {
    checkWorm(zap2.x, zap2.y, 2)
    zap2.power --
  }

  // edge detection
  if (zap2.x > 25 || zap2.y > 25 || zap2.x < 1 || zap2.y < 1) {
    zap2.power = 0
    zap2.x = 0;
    zap2.y = 0;
  }
}

// this function is called when the player uses the zap attack
export function createZap2(x, y, dirX, dirY) {
  zap2.x = x
  zap2.y = y

  direction2.x = dirX
  direction2.y = dirY

  zap2.power = 7
}

// CUSTOM ALGORITHM - draw the zap on the grid
export function draw2(gameBoard) {
  if (zap2.power>1) {
    const zap2Element = document.createElement('div')
    zap2Element.style.gridRowStart = zap2.x
    zap2Element.style.gridColumnStart = zap2.y
    zap2Element.classList.add('zap')
    gameBoard.appendChild(zap2Element)
  } else if (zap2.power==1) {

    for (let i=zap2.x-3; i<=zap2.x+3; i++) {
      for (let j=zap2.y-3; j<=zap2.y+3; j++) {
        const zap2Element = document.createElement('div')
        zap2Element.style.gridRowStart = i
        zap2Element.style.gridColumnStart = j
        zap2Element.classList.add('zap')

        checkWorm(i, j, 2)

        // make diamond shape
        if (Math.abs(i-zap2.x)+Math.abs(j-zap2.y)<=5) {
          gameBoard.appendChild(zap2Element)
        }
      }
    }
  }
}
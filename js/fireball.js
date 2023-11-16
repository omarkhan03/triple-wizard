/* Course: SENG 513 */
/* Date: NOV 14, 2023 */
/* Assignment 3 */
/* Name: Omar Khan */
/* UCID: 30143707 */

/* Note to marker: 
  CUSTOM ALGORITHM on the how the fireball attack tiles on the grid - lines 50-75 and 116-141
  CUSTOM ANIMATION on movement of fireball attack - lines 24 to 30
*/

import { checkWorm } from './Worm.js'

export let fireball = {
  x: 5, y: 5, power: 0
}

let direction = {
  x: 0, y: 0
}

// update the fireball's position
export function update() {
  fireball.x += direction.x
  fireball.y += direction.y

  if (fireball.power > 0) {
    checkWorm(fireball.x, fireball.y, 1)
    fireball.power --
  }

  // edge detection
  if ((fireball.x > 25 || fireball.y > 25 || fireball.x < 1 || fireball.y < 1) && fireball.power>0) {
    fireball.power = 0
    fireball.x = 0;
    fireball.y = 0;
  }
}

// this function is called when the player attacks with fireball
export function createFireball(x, y, dirX, dirY) {
  fireball.x = x
  fireball.y = y

  direction.x = dirX
  direction.y = dirY

  fireball.power = 15
}

// CUSTOM ALGORITHM - draw the fireball on the grid
export function draw(gameBoard) {
  if (fireball.power>0) {
    const fireballElement = document.createElement('div')
    fireballElement.style.gridRowStart = fireball.x
    fireballElement.style.gridColumnStart = fireball.y
    fireballElement.classList.add('fire')
    gameBoard.appendChild(fireballElement)

    for (let i=fireball.x-2; i<=fireball.x+2; i++) {
      for (let j=fireball.y-2; j<=fireball.y+2; j++) {
        const fireballElement = document.createElement('div')
        fireballElement.style.gridRowStart = i
        fireballElement.style.gridColumnStart = j
        fireballElement.classList.add('fire')

        checkWorm(i, j, 1)

        // make diamond shape
        if (Math.abs(i-fireball.x)+Math.abs(j-fireball.y)<=2) {
          gameBoard.appendChild(fireballElement)
        }
      }
    }
  }
}

//--------------- Below is the same code as above, but for the second player ---------------//

export let fireball2 = {
  x: 5, y: 5, power: 0
}

let direction2 = {
  x: 0, y: 0
}

// update the fireball's position
export function update2() {
  fireball2.x += direction2.x
  fireball2.y += direction2.y

  if (fireball2.power > 0) {
    checkWorm(fireball.x, fireball.y, 2)
    fireball2.power --
  }

  // edge detection
  if ((fireball2.x > 25 || fireball2.y > 25 || fireball2.x < 1 || fireball2.y < 1) && fireball2.power>0) {
    fireball2.power = 0
    fireball2.x = 0;
    fireball2.y = 0;
  }
}

// this function is called when the player attacks with fireball
export function createFireball2(x, y, dirX, dirY) {
  fireball2.x = x
  fireball2.y = y

  direction2.x = dirX
  direction2.y = dirY

  fireball2.power = 15
}

// CUSTOM ALGORITHM - draw the fireball on the grid
export function draw2(gameBoard) {
  if (fireball2.power>1) {
    const fireball2Element = document.createElement('div')
    fireball2Element.style.gridRowStart = fireball2.x
    fireball2Element.style.gridColumnStart = fireball2.y
    fireball2Element.classList.add('fire')
    gameBoard.appendChild(fireball2Element)

    for (let i=fireball2.x-2; i<=fireball2.x+2; i++) {
      for (let j=fireball2.y-2; j<=fireball2.y+2; j++) {
        const fireball2Element = document.createElement('div')
        fireball2Element.style.gridRowStart = i
        fireball2Element.style.gridColumnStart = j
        fireball2Element.classList.add('fire')

        checkWorm(i, j, 2)

        // make diamond shape
        if (Math.abs(i-fireball2.x)+Math.abs(j-fireball2.y)<=2) {
          gameBoard.appendChild(fireball2Element)
        }
      }
    }
  }
}
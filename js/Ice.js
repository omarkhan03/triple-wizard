/* Course: SENG 513 */
/* Date: NOV 14, 2023 */
/* Assignment 3 */
/* Name: Omar Khan */
/* UCID: 30143707 */

/* Note to marker: 
   CUSTOM ALGORITHM on the how the ice attack tiles on the grid - lines 50-77 and 118-144
   CUSTOM ANIMATION on movement of ice attack - lines 24 to 30
*/

import { checkWorm } from './Worm.js'

export let ice = {
    x: 6, y: 6, power: 0
}
  
let direction = {
    x: 0, y: 0
}
  
// update ice position
export function update() {
    ice.x += direction.x
    ice.y += direction.y

    if (ice.power > 0) {
        checkWorm(ice.x, ice.y, 1)
        ice.power --
    }
    
    // edge detection
    if (ice.x > 25 || ice.y > 25 || ice.x < 1 || ice.y < 1) {
        ice.power = 0
        ice.x = 0;
        ice.y = 0;
    }
}

// this function is called when the player uses the ice attack
export function createIce(x, y, dirX, dirY) {
    ice.x = x
    ice.y = y

    direction.x = dirX
    direction.y = dirY

    ice.power = 3
}

// CUSTOM ALGORITHM - draw the ice on the grid
export function draw(gameBoard) {
    if (ice.power>1) {
        const iceElement = document.createElement('div')
        iceElement.style.gridRowStart = ice.x
        iceElement.style.gridColumnStart = ice.y
        iceElement.classList.add('ice')
        gameBoard.appendChild(iceElement)
    } else if (ice.power==1) {
        console.log('ice')

        for (let i=ice.x-2; i<=ice.x+2; i++) {
        for (let j=ice.y-2; j<=ice.y+2; j++) {
            const iceElement = document.createElement('div')
            iceElement.style.gridRowStart = i
            iceElement.style.gridColumnStart = j
            iceElement.classList.add('ice')

            checkWorm(i, j, 1)

            // make diamond shape
            if (Math.abs(i-ice.x)+Math.abs(j-ice.y)<=3) {
            gameBoard.appendChild(iceElement)
            }
        }
        }
    }
}

//--------------- Below is the same code as above, but for the second player ---------------//

export let ice2 = {
    x: 6, y: 6, power: 0
}
  
let direction2 = {
    x: 0, y: 0
}
  
// update ice position
export function update2() {
    ice2.x += direction2.x
    ice2.y += direction2.y

    if (ice2.power > 0) {
        checkWorm(ice.x, ice.y, 2)
        ice2.power --
    }
    
    // edge detection
    if (ice2.x > 25 || ice2.y > 25 || ice2.x < 1 || ice2.y < 1) {
        ice2.power = 0
        ice2.x = 0;
        ice2.y = 0;
    }
}

// this function is called when the player uses the ice attack
export function createIce2(x, y, dirX, dirY) {
    ice2.x = x
    ice2.y = y

    direction2.x = dirX
    direction2.y = dirY

    ice2.power = 3
}

// CUSTOM ALGORITHM - draw the ice on the grid
export function draw2(gameBoard) {
    if (ice2.power>1) {
        const ice2Element = document.createElement('div')
        ice2Element.style.gridRowStart = ice2.x
        ice2Element.style.gridColumnStart = ice2.y
        ice2Element.classList.add('ice')
        gameBoard.appendChild(ice2Element)
    } else if (ice2.power==1) {

        for (let i=ice2.x-2; i<=ice2.x+2; i++) {
        for (let j=ice2.y-2; j<=ice2.y+2; j++) {
            const ice2Element = document.createElement('div')
            ice2Element.style.gridRowStart = i
            ice2Element.style.gridColumnStart = j
            ice2Element.classList.add('ice')

            checkWorm(i, j, 2)

            // make diamond shape
            if (Math.abs(i-ice2.x)+Math.abs(j-ice2.y)<=3) {
            gameBoard.appendChild(ice2Element)
            }
        }
        }
    }
}
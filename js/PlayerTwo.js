/* Course: SENG 513 */
/* Date: NOV 14, 2023 */
/* Assignment 3 */
/* Name: Omar Khan */
/* UCID: 30143707 */

import { createFireball2 as createFireball, fireball2 as fireball } from "./Fireball.js"
import { createZap2 as createZap, zap2 as zap } from "./Zap.js"
import { selection2 as elementSelection } from "./Select.js"
import { createIce2 as createIce, ice2 as ice } from "./Ice.js"
import { gameOn } from "./Game.js"

// initialize position of player 2
export const wizardBody = { x: 13, y: 3 }

// initialize attack direction to down
let attackDirection2 = "down"

// listen for keyboard input
window.addEventListener('keydown', e=> {
  if (gameOn) {  // makes sure game is not over
    switch (e.key) {

      case 'ArrowUp':
        attackDirection2 = "up" // set attack direction
        if (wizardBody.y > 1) // edge detection
          wizardBody.y -- // move up
        break 

      case 'ArrowDown':
        attackDirection2 = "down" // set attack direction
        if (wizardBody.y < 25) // edge detection
          wizardBody.y ++ // move down
        break

      case 'ArrowLeft':
        attackDirection2 = "left" // set attack direction
        if (wizardBody.x > 1) // edge detection
          wizardBody.x -- // move left
        break

      case 'ArrowRight':
        attackDirection2 = "right" // set attack direction
        if (wizardBody.x < 25) // edge detection
          wizardBody.x ++ // move right
        break
  
      case 'o':
        attack2(attackDirection2) // call attack function
    }
  }

})

// handle attack event
function attack2(direction) {

  if (elementSelection == 'fire' && fireball.power==0)
  {
    if (direction == 'up')
      createFireball(wizardBody.y, wizardBody.x, -1, 0) // send fireball up
    else if (direction == 'down')
      createFireball(wizardBody.y, wizardBody.x, 1, 0) // send fireball down
    else if (direction == 'left')
      createFireball(wizardBody.y, wizardBody.x, 0, -1) // send fireball left
    else if (direction == 'right')
      createFireball(wizardBody.y, wizardBody.x, 0, 1) // send fireball right
  }

  else if (elementSelection == 'zap' && zap.power==0) 
  {
    if (direction == 'up') 
      createZap(wizardBody.y, wizardBody.x, -1, 0) // send zap up
    else if (direction == 'down') 
      createZap(wizardBody.y, wizardBody.x, 1, 0) // send zap down
    else if (direction == 'left') 
      createZap(wizardBody.y, wizardBody.x, 0, -1) // send zap left
    else if (direction == 'right') 
      createZap(wizardBody.y, wizardBody.x, 0, 1) // send fireball right
  }

  else if (elementSelection == 'ice' && ice.power==0) 
  {
    if (direction == 'up')
      createIce(wizardBody.y, wizardBody.x, -1, 0) // send ice up
    else if (direction == 'down')
      createIce(wizardBody.y, wizardBody.x, 1, 0) // send ice down
    else if (direction == 'left')
      createIce(wizardBody.y, wizardBody.x, 0, -1) // send ice left
    else if (direction == 'right') 
      createIce(wizardBody.y, wizardBody.x, 0, 1) // send ice right
  }

}

// called every frame to draw player 2 to the gameboard
export function draw(gameBoard) {
    const wizardElement = document.createElement('div')
    wizardElement.style.gridRowStart = wizardBody.y
    wizardElement.style.gridColumnStart = wizardBody.x
    wizardElement.classList.add('wizard2')
    gameBoard.appendChild(wizardElement)
}

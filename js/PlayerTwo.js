import { createFireball2 as createFireball, fireball2 as fireball } from "./Fireball.js"
import { createZap2 as createZap, zap2 as zap } from "./Zap.js"
import { selection2 as elementSelection } from "./Select.js"
import { createIce2 as createIce, ice2 as ice } from "./ice.js"


// export const wizard_SPEED = 15 //moves this many times per second
export const wizardBody = { x: 13, y: 3 }

let attackDirection2 = "down"


window.addEventListener('keydown', e=> {

  switch (e.key) {
    case 'ArrowUp':
      attackDirection2 = "up"
      // edge detection
      if (wizardBody.y > 1) {
        wizardBody.y --
      }

      break
    case 'ArrowDown':
      attackDirection2 = "down"
      // edge detection
      if (wizardBody.y < 25) {
        wizardBody.y ++
      }

      break
    case 'ArrowLeft':
      attackDirection2 = "left"
      // edge detection
      if (wizardBody.x > 1) {
        wizardBody.x --
      }

      break
    case 'ArrowRight':
      attackDirection2 = "right"
      // edge detection
      if (wizardBody.x < 25) {
        wizardBody.x ++
      }

      break

    case 'o':
      attack2(attackDirection2)

  }
})

function attack2(direction) {
  if (elementSelection == 'fire' && fireball.power==0)
  {
    if (direction == 'up') {
      createFireball(wizardBody.y, wizardBody.x, -1, 0)
    } else if (direction == 'down') {
      createFireball(wizardBody.y, wizardBody.x, 1, 0)
    } else if (direction == 'left') {
      createFireball(wizardBody.y, wizardBody.x, 0, -1)
    } else if (direction == 'right') { 
      createFireball(wizardBody.y, wizardBody.x, 0, 1)
    }
  }
  else if (elementSelection == 'zap' && zap.power==0) {
    
    if (direction == 'up') {
      createZap(wizardBody.y, wizardBody.x, -1, 0)
    } else if (direction == 'down') {
      createZap(wizardBody.y, wizardBody.x, 1, 0)
    } else if (direction == 'left') {
      createZap(wizardBody.y, wizardBody.x, 0, -1)
    } else if (direction == 'right') { 
      createZap(wizardBody.y, wizardBody.x, 0, 1)
    }
    
  }
  else if (elementSelection == 'ice' && ice.power==0) {
    
    if (direction == 'up') {
      createIce(wizardBody.y, wizardBody.x, -1, 0)
    } else if (direction == 'down') {
      createIce(wizardBody.y, wizardBody.x, 1, 0)
    } else if (direction == 'left') {
      createIce(wizardBody.y, wizardBody.x, 0, -1)
    } else if (direction == 'right') { 
      createIce(wizardBody.y, wizardBody.x, 0, 1)
    }
    
  }
}




export function move() {

}

export function draw(gameBoard) {
    const wizardElement = document.createElement('div')
    wizardElement.style.gridRowStart = wizardBody.y
    wizardElement.style.gridColumnStart = wizardBody.x
    wizardElement.classList.add('wizard2')
    gameBoard.appendChild(wizardElement)
}

export function onwizard(position, { ignoreHead = false } = {}) {
  return wizardBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false
    return equalPositions(segment, position)
  })
}

export function getwizardPos() {
  return wizardBody
}

export function wizardIntersection() {
  return onwizard(wizardBody, { ignoreHead: true }) || onP2(wizardBody, { ignoreHead: false })
}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y
}
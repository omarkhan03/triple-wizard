import { createFireball, fireball } from "./fireball.js"
import { createZap, zap } from "./zap.js"
import { selection1 as elementSelection } from "./select.js"
import { createIce, ice } from "./ice.js"


// export const wizard_SPEED = 15 //moves this many times per second
export const wizardBody = { x: 13, y: 23 }

let attackDirection = "up"


window.addEventListener('keydown', e=> {

  switch (e.key) {
    case 'w':
      attackDirection = "up"
      // edge detection
      if (wizardBody.y > 1) {
        wizardBody.y --
      }

      break
    case 's':
      attackDirection = "down"
      // edge detection
      if (wizardBody.y < 25) {
        wizardBody.y ++
      }

      break
    case 'a':
      attackDirection = "left"
      // edge detection
      if (wizardBody.x > 1) {
        wizardBody.x --
      }

      break
    case 'd':
      attackDirection = "right"
      // edge detection
      if (wizardBody.x < 25) {
        wizardBody.x ++
      }

      break

    case '1':
      attack(attackDirection)

  }
})

function attack(direction) {
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
    wizardElement.classList.add('wizard')
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

export function teleportwizard() {
  // let oldPos = wizardBody[0]

  // switch(oldPos.x) {
  //   case 0:
  //     wizardBody[0] = { x: 25, y: oldPos.y }
  //     break
  //   case 25:
  //     wizardBody[0] = { x: 1, y: oldPos.y }
  //     break

  //   default:

  //     switch(oldPos.y) {
  //       case 0:
  //         wizardBody[0] = { x: oldPos.x, y: 25 }
  //         break
  //       case 25:
  //         wizardBody[0] = { x: oldPos.x, y: 1 }
  //         break
  //     }
  // }
}
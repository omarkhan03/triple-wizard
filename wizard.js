import { createFireball, fireball } from "./fireball.js"
import { createZap, zap } from "./zap.js"

// export const wizard_SPEED = 15 //moves this many times per second
export const wizardBody = { x: 25, y: 4 }


window.addEventListener('keydown', e=> {



  switch (e.key) {
    case 'w':

      // edge detection
      if (wizardBody.y > 1) {
        wizardBody.y --
      }

      break
    case 's':

      // edge detection
      if (wizardBody.y < 25) {
        wizardBody.y ++
      }
    

      break
    case 'a':

      // edge detection
      if (wizardBody.x > 1) {
        wizardBody.x --
      }


      break
    case 'd':
      // edge detection
      if (wizardBody.x < 25) {
        wizardBody.x ++
      }
      

      break

    case 'ArrowUp':
      if (fireball.power==0)
        createFireball(wizardBody.y, wizardBody.x, -1, 0)
      break
    case 'ArrowLeft':
      if (fireball.power==0)
        createFireball(wizardBody.y, wizardBody.x, 0, -1)
      break
    case 'ArrowDown':
      if (fireball.power==0)
        createFireball(wizardBody.y, wizardBody.x, 1, 0)
      break
    case 'ArrowRight':
      if (fireball.power==0)
        createFireball(wizardBody.y, wizardBody.x, 0, 1)
      break
    case 'z':
      if (zap.power==0)
        createZap(wizardBody.y, wizardBody.x, 0, 1)
      break


  }
})

export function update() {

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
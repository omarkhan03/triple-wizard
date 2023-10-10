import { update as updateWizard, draw as drawwizard, 
   onwizard, getwizardPos, wizardIntersection, teleportwizard, wizardBody} from './wizard.js'
import { outsideGrid } from './grid.js'
import { update as updateFireball, draw as drawFireball } from './fireball.js'
import { update as updateZap, draw as drawZap } from './zap.js'
import { update as updateZombie, draw as drawZombie } from './zombie.js'

// import { draw as drawScore } from './scoreBoard.js'

let lastRenderTime = 0
let winP2 = false
let winP1 = false
export const gameBoard = document.getElementById('game-board')

// const blueWinScreen = document.getElementById('blue-win')
// blueWinScreen.style = 'visibility: hidden;'
// const redWinScreen = document.getElementById('red-win')
// redWinScreen.style = 'visibility: hidden;'
// const drawGame = document.getElementById('draw-game')
// drawGame.style = 'visibility: hidden;'

window.addEventListener("keydown", removeStart);

function removeStart( e ) {

  if (
    e.key === 'w' ||
    e.key === 'a' ||
    e.key === 's' ||
    e.key === 'd' ||
    e.key === 'z' ||
    e.key === 'ArrowUp' ||
    e.key === 'ArrowDown' ||
    e.key === 'ArrowLeft' ||
    e.key === 'ArrowRight'
  ) {
      const start = document.getElementById('start')
      
      var seconds = 1;
      start.style.transition = "opacity "+seconds+"s ease"

      start.style.opacity = 0
      setTimeout(function() {
          start.remove()
      }, 1000)

      window.removeEventListener("keydown", removeStart);
  }
}



function main(currentTime) {

  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1/10) return // fps
   
  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main)

function update() {
  updateWizard()
  updateFireball()
  updateZap()
  updateZombie()

  checkDeath()
  checkWall()
}

function draw() {
  gameBoard.innerHTML = ''
  drawwizard(gameBoard)
  drawFireball(gameBoard)
  // drawScore(gameBoard)
  drawZombie(gameBoard)
  drawZap(gameBoard)


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

function checkDeath() {
}


function checkWall() {
  if (outsideGrid(getwizardPos())) {
    teleportwizard()
  }
}

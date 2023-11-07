import { draw as drawP1} from './PlayerOne.js'
import { draw as drawP2} from './PlayerTwo.js'
import { outsideGrid } from './grid.js'
import { update as updateFireball, draw as drawFireball, update2 as updateFireball2, draw2 as drawFireball2 } from './fireball.js'
import { update as updateZap, draw as drawZap, update2 as updateZap2, draw2 as drawZap2  } from './zap.js'
import { update as updateIce, draw as drawIce, update2 as updateIce2, draw2 as drawIce2 } from './ice.js'
import { spawnWorm, draw as drawWorm } from './Worm.js'

let lastRenderTime = 0
let winP2 = false
let winP1 = false
export const gameBoard = document.getElementById('game-board')

function main(currentTime) {

 window.requestAnimationFrame(main)
 const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
 if (secondsSinceLastRender < 1/2) return // fps
  
 lastRenderTime = currentTime

 update()
 draw()
}

window.requestAnimationFrame(main)

function update() {
  console.log("fuck")
 updateFireball()
 updateFireball2()

 updateZap()
  updateZap2()

 updateIce()
  updateIce2()

 checkDeath()
}

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

  // drawWorm(gameBoard)



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


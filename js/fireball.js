import { worms, spawnWorm } from './worm.js'

export let fireball = {
  x: 5, y: 5, power: 0
}

let direction = {
  x: 0, y: 0
}

export function update() {
  fireball.x += direction.x
  fireball.y += direction.y

  if (fireball.power > 0) {
    fireball.power --
  }

  // edge detection
  if ((fireball.x > 25 || fireball.y > 25 || fireball.x < 1 || fireball.y < 1) && fireball.power>0) {
    fireball.power = 0
    fireball.x = 0;
    fireball.y = 0;
  }
}

export function createFireball(x, y, dirX, dirY) {
  fireball.x = x
  fireball.y = y

  direction.x = dirX
  direction.y = dirY

  fireball.power = 12
}


export function draw(gameBoard) {
  if (fireball.power>1) {
    const fireballElement = document.createElement('div')
    fireballElement.style.gridRowStart = fireball.x
    fireballElement.style.gridColumnStart = fireball.y
    fireballElement.classList.add('fire')
    gameBoard.appendChild(fireballElement)
  } else if (fireball.power==1) {
    for (let i=fireball.x-3; i<=fireball.x+3; i++) {
      for (let j=fireball.y-3; j<=fireball.y+3; j++) {
        const fireballElement = document.createElement('div')
        fireballElement.style.gridRowStart = i
        fireballElement.style.gridColumnStart = j
        fireballElement.classList.add('fire')

        
        //check for worm
        // for (let k=0; k<worms.length; k++) {
        //   if (worms[k].x==i && worms[k].y==j) {
        //     // remove worm
        //     worms.splice(k, 1)
        //     spawnWorm()
        //     console.log('worm killed')
        //   }
        // }

        // make diamond shape
        if (Math.abs(i-fireball.x)+Math.abs(j-fireball.y)<=3) {
          gameBoard.appendChild(fireballElement)
        }

      }
    }
  }

}


export let fireball2 = {
  x: 5, y: 5, power: 0
}

let direction2 = {
  x: 0, y: 0
}

export function update2() {
  fireball2.x += direction2.x
  fireball2.y += direction2.y

  if (fireball2.power > 0) {
    fireball2.power --
  }

  // edge detection
  if ((fireball2.x > 25 || fireball2.y > 25 || fireball2.x < 1 || fireball2.y < 1) && fireball2.power>0) {
    fireball2.power = 0
    fireball2.x = 0;
    fireball2.y = 0;
  }
}

export function createFireball2(x, y, dirX, dirY) {
  fireball2.x = x
  fireball2.y = y

  direction2.x = dirX
  direction2.y = dirY

  fireball2.power = 12
}


export function draw2(gameBoard) {
  if (fireball2.power>1) {
    const fireball2Element = document.createElement('div')
    fireball2Element.style.gridRowStart = fireball2.x
    fireball2Element.style.gridColumnStart = fireball2.y
    fireball2Element.classList.add('fire')
    gameBoard.appendChild(fireball2Element)
  } else if (fireball2.power==1) {
    for (let i=fireball2.x-3; i<=fireball2.x+3; i++) {
      for (let j=fireball2.y-3; j<=fireball2.y+3; j++) {
        const fireball2Element = document.createElement('div')
        fireball2Element.style.gridRowStart = i
        fireball2Element.style.gridColumnStart = j
        fireball2Element.classList.add('fire')
        // make diamond shape
        if (Math.abs(i-fireball2.x)+Math.abs(j-fireball2.y)<=3) {
          gameBoard.appendChild(fireball2Element)
        }

      }
    }
  }

}
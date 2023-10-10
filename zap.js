export let zap = {
  x: 6, y: 6, power: 0
}

let direction = {
  x: 0, y: 0
}

export function update() {
  zap.x += direction.x
  zap.y += direction.y

  if (zap.power > 0) {
    zap.power --
  }

  // edge detection
  if (zap.x > 25 || zap.y > 25 || zap.x < 1 || zap.y < 1) {
    zap.power = 0
    zap.x = 0;
    zap.y = 0;
  }
}

export function createZap(x, y, dirX, dirY) {
  zap.x = x
  zap.y = y

  direction.x = dirX
  direction.y = dirY

  zap.power = 7
}


export function draw(gameBoard) {
  if (zap.power>1) {
    const zapElement = document.createElement('div')
    zapElement.style.gridRowStart = zap.x
    zapElement.style.gridColumnStart = zap.y
    zapElement.classList.add('zap')
    gameBoard.appendChild(zapElement)
  } else if (zap.power==1) {
    console.log('zap')

    for (let i=zap.x-1; i<=zap.x+1; i++) {
      for (let j=zap.y-1; j<=zap.y+1; j++) {
        const zapElement = document.createElement('div')
        zapElement.style.gridRowStart = i
        zapElement.style.gridColumnStart = j
        zapElement.classList.add('zap')
        gameBoard.appendChild(zapElement)
      }
    }

  }

}
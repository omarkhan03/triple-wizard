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
    // console.log("fuck")
    zap.power--
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

  zap.power = 6
}


export function draw(gameBoard) {
  if (zap.power>1) {
    const zapElement = document.createElement('div')
    zapElement.style.gridRowStart = zap.x 
    zapElement.style.gridColumnStart = zap.y
    zapElement.classList.add('zap')
    gameBoard.appendChild(zapElement)
  } else if (zap.power==1) {
    // console.log('zap')

    for (let i=zap.x-2; i<=zap.x+2; i++) {
      for (let j=zap.y-2; j<=zap.y+2; j++) {
        const zapElement = document.createElement('div')
        zapElement.style.gridRowStart = i
        zapElement.style.gridColumnStart = j
        zapElement.classList.add('zap')
        // make diamond shape
        if (Math.abs(i-zap.x)+Math.abs(j-zap.y)<=2) {
          gameBoard.appendChild(zapElement)
        }
      }
    }

  }

}


export let zap2 = {
  x: 6, y: 6, power: 0
}

let direction2 = {
  x: 0, y: 0
}

export function update2() {
  zap2.x += direction2.x
  zap2.y += direction2.y

  if (zap2.power > 0) {
    zap2.power --
  }

  // edge detection
  if (zap2.x > 25 || zap2.y > 25 || zap2.x < 1 || zap2.y < 1) {
    zap2.power = 0
    zap2.x = 0;
    zap2.y = 0;
  }
}

export function createZap2(x, y, dirX, dirY) {
  zap2.x = x
  zap2.y = y

  direction2.x = dirX
  direction2.y = dirY

  zap2.power = 6
}


export function draw2(gameBoard) {
  if (zap2.power>1) {
    const zap2Element = document.createElement('div')
    zap2Element.style.gridRowStart = zap2.x
    zap2Element.style.gridColumnStart = zap2.y
    zap2Element.classList.add('zap')
    gameBoard.appendChild(zap2Element)
  } else if (zap2.power==1) {
    console.log('zap')

    for (let i=zap2.x-2; i<=zap2.x+2; i++) {
      for (let j=zap2.y-2; j<=zap2.y+2; j++) {
        const zap2Element = document.createElement('div')
        zap2Element.style.gridRowStart = i
        zap2Element.style.gridColumnStart = j
        zap2Element.classList.add('zap')
        // make diamond shape
        if (Math.abs(i-zap2.x)+Math.abs(j-zap2.y)<=2) {
          gameBoard.appendChild(zap2Element)
        }
      }
    }

  }

}
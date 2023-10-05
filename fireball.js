let fireball = {
  x: 0, y: 0, power: 0
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
}

export function createFireball(x, y, dirX, dirY) {
    fireball.x = x
    fireball.y = y

    direction.x = dirX
    direction.y = dirY

    fireball.power = 10
}


export function draw(gameBoard) {
  if (fireball.power>0) {
    const fireElement = document.createElement('div')
    fireElement.style.gridRowStart = fireball.x
    fireElement.style.gridColumnStart = fireball.y
    fireElement.classList.add('fire')
    gameBoard.appendChild(fireElement)
  }

}
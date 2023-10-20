import { fireball } from "./fireball.js"

export let zombie = {
    x: 0, y: 0, alive: true
}

export function update() {

    if (fireball.x - zombie.x <2 && fireball.y - zombie.y <2) {
        zombie.alive = false
        fireball.power = 0
    }
}
  
export function draw(gameBoard) {
    const zombieElement = document.createElement('div')
    zombieElement.style.gridRowStart = zombie.x
    zombieElement.style.gridColumnStart = zombie.y
    if (zombie.alive) {
        zombieElement.classList.add('alive')
    } else {
        zombieElement.classList.add('dead')
    }
    gameBoard.appendChild(zombieElement)
    
}
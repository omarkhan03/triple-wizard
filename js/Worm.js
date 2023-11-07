import { gameBoard } from './Game.js'

export let worms = []

export function update() {
}

export function draw(gameBoard) {
    // loop through each worm
    for (let i = 0; i < worms.length; i++) {
        const wormElement = document.createElement('div')
        wormElement.style.gridRowStart = worms[i].y
        wormElement.style.gridColumnStart = worms[i].x
        wormElement.classList.add('worm')
        gameBoard.appendChild(wormElement)
    }
}

export function spawnWorm() {
    // create new worm at random x and y positions between 0 and 25
    let x = Math.floor(Math.random() * 25) + 1
    let y = Math.floor(Math.random() * 25) + 1
    let overlap = false

    // loop through each worm
    for (let i = 0; i < worms.length; i++) {
        // if the new worm is on top of an existing worm, get new x and y positions
        if (x == worms[i].x && y == worms[i].y) {
            overlap = true
        }
    }

    if (!overlap) {
        worms.push({
            x: x,
            y: y
        })
    }
}

spawnWorm()
spawnWorm()
spawnWorm()
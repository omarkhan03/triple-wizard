import { gameBoard } from './Game.js'
import { fireball } from './Fireball.js'

export let worms = []

export function update() {
    // // loop through each worm
    // for (let i = 0; i < worms.length; i++) {
    //     if (fireball.x == worms[i].x && fireball.y == worms[i].y) {
    //         console.log('hit worm')
    //         worms.splice(i, 1)
    //         spawnWorm()
    //     }
    // }
}

export function checkWorm(xp, yp) {
    console.log(worms)
    // loop through each worm
    for (let i = 0; i < worms.length; i++) {
        if (xp == worms[i].x && yp == worms[i].y) {
            console.log('hit worm')
            console.log(worms)
            worms.splice(i, 1)
            console.log(worms)
            spawnWorm()
            console.log(worms)
        }
    }
}

export function draw(gameBoard) {
    // loop through each worm
    for (let i = 0; i < worms.length; i++) {
        const wormElement = document.createElement('div')
        wormElement.style.gridRowStart = worms[i].x
        wormElement.style.gridColumnStart = worms[i].y
        wormElement.classList.add('worm')
        gameBoard.appendChild(wormElement)
    }
}

export function spawnWorm() {
    // create new worm at random x and y positions between 0 and 25
    let xr = Math.floor(Math.random() * 25) + 1
    let yr = Math.floor(Math.random() * 25) + 1

    worms.push({
        x: xr,
        y: yr
    })
    // let overlap = false

    // // loop through each worm
    // for (let i = 0; i < worms.length; i++) {
    //     // if the new worm is on top of an existing worm, get new x and y positions
    //     if (x == worms[i].x && y == worms[i].y) {
    //         overlap = true
    //     }
    // }

    // if (!overlap) {

    // }
}

spawnWorm()
spawnWorm()
spawnWorm()
import { gameBoard } from './Game.js'
import { fireball } from './Fireball.js'

let wormsKilledP1 = 0
let wormsKilledP2 = 0

const p1Score = document.getElementById('p1score')
const p2Score = document.getElementById('p2score')


export let worms = []

export function update() {
    // loop through each worm
    for (let i = 0; i < worms.length; i++) {
        // move worm in random direction
        let direction = Math.floor(Math.random() * 15)
        if (direction == 0 && worms[i].x < 25) {
            worms[i].x++
        }
        else if (direction == 1 && worms[i].x > 1) {
            worms[i].x--
        }
        else if (direction == 2 && worms[i].y < 25) {
            worms[i].y++
        }
        else if (direction == 3 && worms[i].y > 1) {
            worms[i].y--
        }
    }
}

export function checkWorm(xp, yp, player) {
    // loop through each worm
    for (let i = 0; i < worms.length; i++) {
        if (xp == worms[i].x && yp == worms[i].y) {
            worms.splice(i, 1)
            spawnWorm()
            if (player == 1) {
                wormsKilledP1++
                p1Score.innerHTML = wormsKilledP1
            }
            else if (player == 2) {
                wormsKilledP2++
                p2Score.innerHTML = wormsKilledP2
            }
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
spawnWorm()
spawnWorm()
spawnWorm()

/* Course: SENG 513 */
/* Date: NOV 14, 2023 */
/* Assignment 3 */
/* Name: Omar Khan */
/* UCID: 30143707 */

/* Note to marker: 
   CUSTOM COLLISION DETECTION MECHANISM lines 59-76 
   CUSTOM ANIMATION - random movement of worms lines 91-101
*/

import { handleP1Victory, handleP2Victory, handleDraw } from './Game.js'

// initialize worms killed to 0
let wormsKilledP1 = 0
let wormsKilledP2 = 0

const p1Score = document.getElementById('p1score')
const p2Score = document.getElementById('p2score')

export let worms = []

// Update function for worms
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

    // check if either player has won, or if there is a draw
    checkVictory()
}

// Check if either player has won, or if there is a draw
function checkVictory() {
    if (wormsKilledP1 >= 50 && wormsKilledP2 < 50) {
        handleP1Victory()
    }
    else if (wormsKilledP2 >= 50 && wormsKilledP1 < 50) {
        handleP2Victory()
    }
    else if (wormsKilledP2 >= 50 && wormsKilledP1 >= 50) {
        handleDraw()
    }
}

// COLLISION DETECTION - Check if a worm is on the same tile as a player
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

// Draw function for worms
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

// CUSTOM ANIMATION - Spawn a new worm at a random x and y position
export function spawnWorm() {
    // create new worm at random x and y positions between 0 and 25
    let xr = Math.floor(Math.random() * 25) + 1
    let yr = Math.floor(Math.random() * 25) + 1

    worms.push({
        x: xr,
        y: yr
    })
}

// Spawn a few worms at the start of the game
spawnWorm()
spawnWorm()
spawnWorm()
spawnWorm()
spawnWorm()
spawnWorm()
spawnWorm()
spawnWorm()
spawnWorm()
spawnWorm()
spawnWorm()
spawnWorm()
spawnWorm()
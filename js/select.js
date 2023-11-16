/* Course: SENG 513 */
/* Date: NOV 14, 2023 */
/* Assignment 3 */
/* Name: Omar Khan */
/* UCID: 30143707 */

import { fireball } from './Fireball.js'
import { zap } from './Zap.js'
import { ice } from './Ice.js'
import { gameOn } from "./Game.js"

// initialize selections to zap
export let selection1 = 'zap'
export let selection2 = 'zap'

const fireSelect1 = document.getElementById('fireSelect1');
const zapSelect1 = document.getElementById('zapSelect1');
const iceSelect1 = document.getElementById('iceSelect1');

const fireSelect2 = document.getElementById('fireSelect2');
const zapSelect2 = document.getElementById('zapSelect2');
const iceSelect2 = document.getElementById('iceSelect2');

// initialize styling of default selectiobs
zapSelect1.style = 'border: 2px solid white;'
zapSelect2.style = 'border: 2px solid white;'

// listen for keyboard input
window.addEventListener('keydown', e=> {

    // toggle element for player 1
    if (gameOn && e.key === '2') {
        if (selection1 == 'fire' && fireball.power == 0) {
            clearSelection(1)
            selection1 = 'zap'
            zapSelect1.style = 'border: 2px solid white;'
        }
        else if (selection1 == 'zap' && zap.power == 0) {
            clearSelection(1)
            selection1 = 'ice'
            iceSelect1.style = 'border: 2px solid white;'
        }
        else if (selection1 == 'ice' && ice.power == 0) {
            clearSelection(1)
            selection1 = 'fire'
            fireSelect1.style = 'border: 2px solid white;'
        }
    }

    // toggle element for player 2
    if (gameOn && e.key === 'p') {
        if (selection2 == 'fire' && fireball.power == 0) {
            clearSelection(2)
            selection2 = 'zap'
            zapSelect2.style = 'border: 2px solid white;'
        }
        else if (selection2 == 'zap' && zap.power == 0) {
            clearSelection(2)
            selection2 = 'ice'
            iceSelect2.style = 'border: 2px solid white;'
        }
        else if (selection2 == 'ice' && ice.power == 0) {
            clearSelection(2)
            selection2 = 'fire'
            fireSelect2.style = 'border: 2px solid white;'
        }
    }
})

// clear selection styling for specified player
function clearSelection(player) {
    if (player == 1) {
        fireSelect1.style = 'border: none;'
        zapSelect1.style = 'border: none;'
        iceSelect1.style = 'border: none;'
    }
    else if (player == 2) {
        fireSelect2.style = 'border: none;'
        zapSelect2.style = 'border: none;'
        iceSelect2.style = 'border: none;'
    }

}
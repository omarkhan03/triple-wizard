export let selection = 'fire'

const fireSelect = document.getElementById('fireSelect');
const zapSelect = document.getElementById('zapSelect');
const iceSelect = document.getElementById('iceSelect');

fireSelect.style = 'border: 2px solid white;'

window.addEventListener('keydown', e=> {
    /* 1-3 */
    if (e.key === '1') {
        selection = 'fire'
        clearSelection()
        fireSelect.style = 'border: 2px solid white;'
    }
    if (e.key === '2') {
        selection = 'zap'
        clearSelection()
        zapSelect.style = 'border: 2px solid white;'
    }
    if (e.key === '3') {
        selection = 'ice'
        clearSelection()
        iceSelect.style = 'border: 2px solid white;'
    }
})

function clearSelection() {
    fireSelect.style = 'border: none;'
    zapSelect.style = 'border: none;'
    iceSelect.style = 'border: none;'
}
export let redScore = 0
export let blueScore = 0

export function draw(gameBoard) {
  const redScoreElement = document.createElement('div')
  const blueScoreElement = document.createElement('div')
  redScoreElement.classList.add('redScore')
  redScoreElement.innerHTML = redScore
  gameBoard.appendChild(redScoreElement)
  blueScoreElement.classList.add('blueScore')
  blueScoreElement.innerHTML = blueScore
  gameBoard.appendChild(blueScoreElement)
}

export function scoreRed() {
  redScore++
}

export function scoreBlue() {
  blueScore++
}
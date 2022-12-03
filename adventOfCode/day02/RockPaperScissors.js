// --- Day 2: Rock Paper Scissors ---
// 1 --- Rock (A)
// 2 --- Paper (B)
// 3 --- Scissors (C)
// Y --- draw
// X --- loose
// Z --- win
// 0 --- Loosing
// 3 --- Draw
// 6 --- Winning

const fs = require('fs')

try {
  const data = fs.readFileSync(
    '/home/ktrip96/Algorithms/adventOfCode/day02/input.txt',
    'utf8'
  )

  const resultPoints = {
    X: 0,
    Y: 3,
    Z: 6,
  }

  const materialPoints = {
    X: 1,
    Y: 2,
    Z: 3,
  }

  // What should you play
  // in order to get a draw
  const draw = {
    A: 'X',
    B: 'Y',
    C: 'Z',
  }

  // What should you play
  // in order to get a L
  const lose = {
    A: 'Z',
    B: 'X',
    C: 'Y',
  }

  // What should you play
  // in order to get a win
  const win = {
    A: 'Y',
    B: 'Z',
    C: 'X',
  }

  function calculatePoints(array) {
    const first = array[0]
    const second = array[1]

    // calculate material points
    const winningPoints = resultPoints[second]

    let myMove

    // calculate material points
    if (second === 'Y') {
      myMove = draw[first]
    } else if (second === 'X') {
      myMove = lose[first]
    } else {
      myMove = win[first]
    }
    const pointsFromMaterial = materialPoints[myMove]

    return winningPoints + pointsFromMaterial
  }
  const gameArray = data
    .split('\n')
    .map((i) => i.split(' '))
    .map((singleGame) => calculatePoints(singleGame))
    .reduce((a, b) => {
      return a + b
    })

  console.log(gameArray)
} catch (err) {
  console.error(err)
}

// --- Day 3: Rucksack Reorganization ---

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
    '/home/ktrip96/Algorithms/adventOfCode/day03/input.txt',
    'utf8'
  )

  const gameArray = data.split('\n')
  // .map((i) => i.split(' '))
  // .map((singleGame) => calculatePoints(singleGame))

  console.log(gameArray)
} catch (err) {
  console.error(err)
}

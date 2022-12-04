// --- Day 4: Camp Cleanup ---

const fs = require('fs')

try {
  const data = fs.readFileSync(
    '/home/ktrip96/Algorithms/adventOfCode/day04/input.txt',
    'utf8'
  )

  const partA = (array) => {
    const first = array[0].split('-').map((item) => parseInt(item))
    const second = array[1].split('-').map((item) => parseInt(item))
    let isFullContained = false
    // find which pair is the smallest
    const firstLength = first[1] - first[0]
    const secondLength = second[1] - second[0]

    let smaller = first
    let bigger = second
    if (secondLength < firstLength) {
      smaller = second
      bigger = first
    }

    // check if it is fully contained by the big one:
    // 1st elem of the small >= 1st elem of the big &&
    // last elem of the small <= last elem of the big

    if (smaller[0] >= bigger[0] && smaller[1] <= bigger[1]) {
      isFullContained = true
    }

    return isFullContained
  }

  const partB = (array) => {
    const first = array[0].split('-').map((item) => parseInt(item))
    const second = array[1].split('-').map((item) => parseInt(item))
    let isOverLapped = false

    let smaller = first
    let bigger = second

    if (first[1] > second[1]) {
      smaller = second
      bigger = first
    }

    if (
      (smaller[0] >= bigger[0] && smaller[0] <= bigger[1]) ||
      (smaller[1] >= bigger[0] && smaller[1] <= bigger[1])
    )
      isOverLapped = true
    return isOverLapped
  }

  const gameArray = data
    .split('\n')
    .map((l) => l.split(','))
    .map((pair) => partB(pair))
    .filter((i) => i === true).length

  console.log(gameArray)
} catch (err) {
  console.error(err)
}

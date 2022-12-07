// --- Day 4: Camp Cleanup ---

const fs = require('fs')

try {
  const data = fs.readFileSync(
    '/home/ktrip96/Algorithms/adventOfCode/day06/input.txt',
    'utf8'
  )

  const areUniqueCharacters = (string) => {
    let hashTable = {}
    for (let i = 0; i < string.length; i++) {
      if (hashTable[string[i]] === undefined) hashTable[string[i]] = 1
      else hashTable[string[i]]++
    }

    for (const property in hashTable) {
      if (hashTable[property] > 1) return false
    }

    return true
  }

  const partA = () => {
    let j, stringSlice
    for (let i = 0; i < data.length; i++) {
      j = i + 4
      stringSlice = data.slice(i, j)
      if (areUniqueCharacters(stringSlice)) {
        console.log(j)
        break
      }
    }
  }

  const partB = () => {
    let j, stringSlice
    for (let i = 0; i < data.length; i++) {
      j = i + 14
      stringSlice = data.slice(i, j)
      if (areUniqueCharacters(stringSlice)) {
        console.log(j)
        break
      }
    }
  }
  partB()
} catch (err) {
  console.error(err)
}

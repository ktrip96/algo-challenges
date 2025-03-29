/**Write a function canSum(targetSum, nubmers) that takes in
 * a targetSum and an array of numbers as arguments
 *
 * The funciton should return a boolean indicating whether or not it
 * is possible to generate the targetSum using numbers from the array
 */

const canSum = (target, numbers) => {
  const table = Array(target + 1).fill(false)
  table[0] = true

  for (let i = 0; i <= target; i++) {
    if (table[i] === true) {
      for (let n of numbers) {
        table[i + n] = true
      }
    }
  }

  return table[target]
}

console.log(canSum(7, [2, 3])) // true
console.log(canSum(7, [5, 3, 4, 7])) // true
console.log(canSum(7, [2, 4])) // false
console.log(canSum(8, [2, 3, 5])) // true
console.log(canSum(300, [7, 14])) // false

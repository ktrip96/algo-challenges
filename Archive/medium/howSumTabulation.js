/**Write a function howSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments.
 *
 * The function should return an array containing any combination of elements that add up to exactly the targetSum.
 * If there is no combination that adds up to the targetSum, then return null.
 */

const howSum = (target, numbers) => {
  const table = Array(target + 1).fill(null)

  table[0] = []

  for (let i = 0; i <= target; i++) {
    if (table[i] !== null) {
      for (let n of numbers) {
        table[i + n] = [n, ...table[i]]
      }
    }
  }

  return table[target]
}

console.log(howSum(7, [2, 3])) // [3,2,2]
console.log(howSum(7, [5, 3, 4, 7])) // [4,3]
console.log(howSum(7, [2, 4])) // null
console.log(howSum(8, [2, 3, 5])) // [2,2,2,2]
console.log(howSum(300, [7, 14])) // null

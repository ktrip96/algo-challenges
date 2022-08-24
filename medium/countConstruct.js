/** Write a function countConstruct(target, wordBank) that accepts a target string and an array of strings
 *
 * The function should return the number of ways that  the target can be constructed by concatenating
 * elements of the wordBank array
 *
 * You may reuse elements of wordBank as many times as needed.
 */

const countConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target]
  if (target === '') return 1

  let counter = 0

  for (let n of wordBank) {
    if (isPrefix(n, target)) {
      const remainder = removeString(n, target)
      const result = countConstruct(remainder, wordBank, memo)
      counter += result
    }
  }

  memo[target] = counter
  return counter
}

function isPrefix(string_a, string_b) {
  // returns true if the first string_a, is prefix of the string_b
  for (let i = 0; i < string_a.length; i++) {
    if (string_a[i] !== string_b[i]) return false
  }

  return true
}

function removeString(string_a, string_b) {
  let newString = ''
  for (let i = string_a.length; i < string_b.length; i++) {
    newString += string_b[i]
  }
  return newString
}

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // 2
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // 1
console.log(
  countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']) // 4
)
console.log(
  countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeeee',
    'eeeeeeee',
    'eeeeeeeeeeee',
    'eeeeeeeeeeeeeeeeee',
  ])
)
// 0

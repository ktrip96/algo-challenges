/** Write a function allConstruct(target, wordBank) that accepts a target string and an array of strings
 *
 * The function should return a 2D array containing all of the ways that the target can be constructed by concatenating
 * elements of the wordBank array
 *
 * You may reuse elements of wordBank as many times as needed.
 */

const allConstruct = (target, wordBank, memo = {}) => {
  if (target === '') return []
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

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // 2
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // 1
console.log(
  allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']) // 4
)
console.log(
  allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
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

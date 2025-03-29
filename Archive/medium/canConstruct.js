/** Write a function canConstruct(target, wordBank) that accepts a target string and an array of strings
 *
 * The function should return a boolean incicating wheter or not the target can be constructed by concatenating
 * elements of the wordBank array
 *
 * You may reuse elements of wordBank as many times as needed.
 */

const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target]
  if (target === '') return true

  for (let n of wordBank) {
    if (isPrefix(n, target)) {
      const remainder = removeString(n, target)
      if (canConstruct(remainder, wordBank, memo) === true) {
        memo[target] = true
        return true
      }
    }
  }

  memo[target] = false
  return false
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

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // true
console.log(
  canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
) // false
console.log(
  canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
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
// false

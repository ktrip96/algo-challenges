const calculateScore = (char) => {
  if (['a', 'e', 'i', 'o', 'u'].includes(char)) return 1
  return 2
}

function countVowelConsonant(str) {
  // write code here
  return str
    .split('')
    .map((char) => calculateScore(char))
    .reduce((a, b) => a + b)
}

console.log(countVowelConsonant('abcde'))

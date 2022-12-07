/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str) {
  let newStr = []
  let makeUpperCase = true
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      newStr[i] = str[i]
      continue
    }
    if (makeUpperCase) newStr[i] = str[i].toUpperCase()
    else newStr[i] = str[i].toLowerCase()
    makeUpperCase = !makeUpperCase
  }
  return newStr.join('')
}

console.log(altCaps('When you visit Portland you have to go to VooDoo Donuts'))
console.log(altCaps('I`m so happy it`s Monday'))

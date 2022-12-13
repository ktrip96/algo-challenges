/* We Come in Peace!  
We've received what (we assume) is a message of peace and brotherhood from 
an alien planet. They almost got it right, but the messages are 
backward. Write functions to reverse the backward messages so we can 
read what they have to say! 
*/

const title = ':htraE no od ot ffutS'
const messages = [
  'maerc eci yrT',
  'rewoT leffiE tisiV',
  'noom eht ot snamuh etacoleR',
  'egrahc ni stac tuP',
]

/* Step 1: Reverse a string
Write a function that takes in a string and returns the reverse 
of that string. An interviewer may want to check if you know your
string methods, or may want to know if you can reverse a string manually. 
Practice both ways! 

Example input: !htrae ot emocleW
Example output: Welcome to earth!
*/

function reverseString(str) {
  const tempArray = str.split('')
  const reversedArray = tempArray.reverse()
  const finalString = reversedArray.join('')
  return finalString
}

function reverseStringInterview(str) {
  let newString = []
  for (let i = str.length - 1; i >= 0; i--) {
    newString.push(str[i])
  }
  const finalString = newString.reduce((a, b) => a + b)
  return finalString
}

/*
Step 2: Now we'll reverse all strings in an array. Write a function that takes in
an array of strings and returns a new array with all strings reversed.

You can use reuse your reverseString() function, use string methods, or 
reverse the strings manually. 
*/

function reverseStringsInArray(arr, fun) {
  return arr.map((string) => fun(string))
}

console.log('*** String Method Solution ***')
console.log(reverseStringsInArray(messages, reverseString))
console.log('*** Interview Solution: ***')
console.log(reverseStringsInArray(messages, reverseStringInterview))

/* 
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palidrome, return true. If it isn't, return false. 
*/

function isPalindrome(str) {
  let j = str.length - 1
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[j]) return false
    j--
  }
  return true
}

// Test your function
console.log(isPalindrome('abba'))
console.log(isPalindrome('civic'))
console.log(isPalindrome('octopus'))
console.log(isPalindrome('pumpkins'))
console.log(isPalindrome('madam'))

// function insertDashes(arr) {
//   // write code here

//   return arr
//     .split(' ')
//     .map((word) => word.split('').join('-'))
//     .join(' ')
// }

function insertDashes(arr) {
  return arr
    .split(' ')
    .map((value) => value.split(''))
    .map((arr) => arr.join('-'))
    .join(' ')
}

console.log(insertDashes('aba caba'))

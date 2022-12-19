function centuryFromYear(num) {
  return num % 100 === 0 ? Math.floor(num / 100) : Math.floor(num / 100 + 1)
}

console.log(centuryFromYear(1700))
console.log(centuryFromYear(1701))
console.log(centuryFromYear(1801))
console.log(centuryFromYear(1905))

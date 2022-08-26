const fibonacciTab = (number) => {
  const table = Array(number + 1).fill(0)
  table[0] = 0
  table[1] = 1

  for (let i = 0; i < number; i++) {
    table[i + 1] += table[i]
    table[i + 2] += table[i]
  }

  return table[number]
}

console.log(fibonacciTab(6))
console.log(fibonacciTab(8))
console.log(fibonacciTab(50))

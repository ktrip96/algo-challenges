const gridTraveler = (x, y, memo = {}) => {
  const key = x + ',' + y
  if (key in memo) return memo[key]
  if (x == 1 || y == 1) return 1
  if (x == 0 || y == 0) return 0
  memo[key] = gridTraveler(x - 1, y, memo) + gridTraveler(x, y - 1, memo)
  return memo[key]
}

console.log(gridTraveler(1, 1))
console.log(gridTraveler(2, 3))
console.log(gridTraveler(3, 2))
console.log(gridTraveler(3, 3))
console.log(gridTraveler(18, 18))

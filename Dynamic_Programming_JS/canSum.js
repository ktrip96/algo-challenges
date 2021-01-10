// ** canSum Memoization **

const canSum = (targetSum, array, memo = {}) => {
    if (targetSum === 0) return true
    if (targetSum < 0) return false
    if (targetSum in memo) return memo[targetSum]
    
    for(let n of array){
        let remainder = targetSum - n
        if(canSum(remainder, array, memo) === true){
            memo[targetSum] = true
            return true
        }
    }

    memo[targetSum] = false
    return false
}

console.log(canSum(7, [2,3]))
console.log(canSum(7, [5, 3, 4, 7]))
console.log(canSum(7, [2, 3, 5]))
console.log(canSum(300, [7, 14, 5, 8, 9 , 10, 1, 2, 3, 4, 5, 6, 7, 8]))


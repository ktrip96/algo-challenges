const canSum = (targetSum : number, numbers : number[]) : boolean => {
   const tabArray : boolean[] = Array(targetSum + 1).fill(false)
   tabArray[0] = true
   for(let i = 0; i < tabArray.length; i++){
    if(tabArray[i] || i === 0){
        for(let j = 0; j < numbers.length; j++ ){
            if(i + numbers[j] <= targetSum)
            tabArray[i + numbers[j]] = true
        }
    }
   }

   return tabArray[targetSum]
}

console.log(canSum(7, [2, 3]))
console.log(canSum(7, [5, 3, 4, 7]))
console.log(canSum(7, [2, 4]))
console.log(canSum(8, [2, 3, 5]))
console.log(canSum(300, [7, 14]))

export {}

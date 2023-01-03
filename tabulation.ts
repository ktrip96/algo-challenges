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

// console.log(canSum(7, [2, 3]))
// console.log(canSum(7, [5, 3, 4, 7]))
// console.log(canSum(7, [2, 4]))
// console.log(canSum(8, [2, 3, 5]))
// console.log(canSum(300, [7, 14]))


const howSum = (targetSum:number, numbers:number[]) : number[] | null => {
    const tabArray : Array<number[]> | null = Array(targetSum + 1).fill(null)
    tabArray[0] = []
    for(let i = 0; i < targetSum + 1; i ++){
        // if you are not null
        // that essentially means we have at least one way to reach you
        if(tabArray[i] !== null){
            // iterate through numbers array
            // and update the tabArray accordingly
            // note: remember to check out for the edge of the array
            for(let num of numbers){
                if(num + i <= tabArray.length){
                    tabArray[i + num] = [...tabArray[i], num]
                }
            }

        }
    }
    return tabArray[targetSum]
}

console.log(howSum(7, [2, 3]))
console.log(howSum(7, [5, 3, 4, 7]))
console.log(howSum(7, [2, 4]))
console.log(howSum(8, [2, 3, 5]))
console.log(howSum(300, [7, 14]))

export {} 
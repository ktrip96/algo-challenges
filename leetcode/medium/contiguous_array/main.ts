const contiguousArray = (nums: number[]): number => {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0) nums[i] = -1
	}

	let finalArray: number[] = []

	for (let i = 0; i < nums.length; i++) {
		const isPositive = nums[i] > 0
		const isNextPositive = nums[i + 1] > 0
		const isTheFinal = i === nums.length - 1

		if (((isPositive && isNextPositive) || (!isPositive && !isNextPositive)) && !isTheFinal)
			nums[i + 1] += nums[i]
		else finalArray.push(nums[i])
	}

	if (finalArray.length < 2) return 0

	let contiguousPair = [0, 1]
	let maxAbsSum = -1

	for (let i = 0; i < finalArray.length - 1; i++) {
		const absDiff = Math.abs(finalArray[i]) + Math.abs(finalArray[i + 1])
		if (absDiff > maxAbsSum) {
			maxAbsSum = absDiff
			contiguousPair = [i, i + 1]
		}
	}

	let min = Math.min(Math.abs(finalArray[contiguousPair[0]]), Math.abs(finalArray[contiguousPair[1]]))

	let result = [
		...Array(min).fill(finalArray[contiguousPair[0]] > 0 ? 1 : 0),
		...Array(min).fill(finalArray[contiguousPair[1]] > 0 ? 1 : 0),
	]

	return result.length
}

const test = <Input, Output>(
	fn: (input: Input) => Output,
	testCases: { input: Input; expected: Output }[],
	isEqual: (a: Output, b: Output) => boolean = (a, b) => JSON.stringify(a) === JSON.stringify(b)
) => {
	testCases.forEach(({ input, expected }, index) => {
		const start = performance.now()
		const result = fn(input)
		const end = performance.now()
		const timeTaken = (end - start).toFixed(4)
		if (isEqual(result, expected)) {
			console.log(`✅ Test ${index + 1} passed (${timeTaken} ms)`)
		} else {
			console.error(
				`❌ Test ${index + 1} failed\nInput: ${JSON.stringify(input)}\nExpected: ${JSON.stringify(
					expected
				)}\nGot: ${JSON.stringify(result)}`
			)
		}
	})
}

type InputType = number[]

type OutputType = number

test<InputType, OutputType>(contiguousArray, [
	{ input: [0, 1], expected: 2 },
	{ input: [0, 1, 0], expected: 2 },
	{ input: [0, 1, 1, 1, 1, 1, 0, 0, 0], expected: 6 },
])

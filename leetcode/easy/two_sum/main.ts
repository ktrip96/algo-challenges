const twoSumV1 = (input: InputType): number[] => {
	const { nums, target } = input
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) return [i, j]
		}
	}
	return []
}

const twoSumV2 = (input: InputType): number[] => {
	const { nums, target } = input
	const numberMap: Record<number, { index: number; count: number }> = {}

	nums.forEach(
		(num, index) => (numberMap[num] = { index, count: numberMap[num] ? numberMap[num].count + 1 : 0 })
	)

	for (let i = 0; i < nums.length; i++) {
		const remainingTarget = target - nums[i]
		if (
			numberMap.hasOwnProperty(remainingTarget) &&
			(remainingTarget !== nums[i] || numberMap[remainingTarget].count > 0)
		)
			return [i, numberMap[remainingTarget].index]
	}

	return []
}

const test = <Input, Output>(
	foo: (input: Input) => Output,
	testCases: { input: Input; expected: Output }[],
	isEqual: (a: Output, b: Output) => boolean = (a, b) => JSON.stringify(a) === JSON.stringify(b) // Default equality check
): void => {
	testCases.forEach(({ input, expected }, index) => {
		const start = performance.now()
		const result = foo(input)
		const end = performance.now()
		const timeTaken = (end - start).toFixed(3)

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

type InputType = {
	nums: number[]
	target: number
}

type OutputType = number[]

console.log('*** Testing twoSumV1 ***')
test<InputType, OutputType>(twoSumV1, [
	{ input: { nums: [2, 7, 11, 15], target: 9 }, expected: [0, 1] },
	{ input: { nums: [3, 2, 4], target: 6 }, expected: [1, 2] },
	{ input: { nums: [3, 3], target: 6 }, expected: [0, 1] },
])

console.log('*** Testing twoSumV2 ***')

test<InputType, OutputType>(twoSumV2, [
	{ input: { nums: [2, 7, 11, 15], target: 9 }, expected: [0, 1] },
	{ input: { nums: [3, 2, 4], target: 6 }, expected: [1, 2] },
	{ input: { nums: [3, 3], target: 6 }, expected: [0, 1] },
])

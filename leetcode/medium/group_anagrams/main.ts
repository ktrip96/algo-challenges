const main = (input: InputType): OutputType => {
	return
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

type InputType = {}

type OutputType = {}

test<InputType, OutputType>(main, [
	{ input: {}, expected: [] },
	{ input: {}, expected: [] },
	{ input: {}, expected: [] },
])

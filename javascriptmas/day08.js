function validTime(str) {
  //  write code here.
  const splittedTime = str.split(':')
  const hours = parseInt(splittedTime[0])
  const minutes = parseInt(splittedTime[1])
  return hours <= 24 && minutes <= 60
}

/**
 * Test Suite
 */
describe('validTime()', () => {
  it('returns true for valid time', () => {
    // arrange
    const str = '13:58'

    // act
    const result = validTime(str)

    // log
    console.log('result 1: ', result)

    // assert
    expect(result).toBe(true)
  })

  it('returns false when invalid hours', () => {
    // arrange
    const str = '25:51'

    // act
    const result = validTime(str)

    // log
    console.log('result 1: ', result)

    // assert
    expect(result).toBe(false)
  })

  it('returns false when invalid minutes', () => {
    // arrange
    const str = '02:76'

    // act
    const result = validTime(str)

    // log
    console.log('result 1: ', result)

    // assert
    expect(result).toBe(false)
  })
})

import { Main } from '../src/app.js'

describe('A suite', function () {
  it('demo function should return 1', function () {
    // Arrange
    const main = new Main()

    // Act
    const result = main.demo()

    // Assert
    expect(result).toBe(1)
  })
})

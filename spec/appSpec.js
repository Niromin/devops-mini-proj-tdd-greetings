import { Main } from '../src/app.js'

describe('greet', function () {
  it('demo function greet person', function () {
    // Arrange
    const main = new Main()

    // Act
    const result = main.greet('Bob')

    // Assert
    expect(result).toBe('Hello, Bob')
  })
})

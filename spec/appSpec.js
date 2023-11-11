/* eslint-disable no-undef */
import { Main } from '../src/app.js'

describe('greet', function () {
  it('demo function greet person', function () {
    // Arrange
    const main = new Main()
    // Act
    const result = main.greet('Bob')

    // Assert
    expect(result).toBe('Hello, Bob.')
  })

  it('function greet return hello, my friend when the name is null', function () {
    // Arrange
    const main = new Main()
    // Act
    const result = main.greet(null)

    // Assert
    expect(result).toBe('Hello, my friend.')
  })

  it('function greet return hello, my friend when the name is void', function () {
    // Arrange
    const main = new Main()
    // Act
    const result = main.greet('')

    // Assert
    expect(result).toBe('Hello, my friend.')
  })

  it('function greet return hello, my friend when the name is undefined', function () {
    // Arrange
    const main = new Main()
    // Act
    const result = main.greet(undefined)

    // Assert
    expect(result).toBe('Hello, my friend.')
  })

  it('function greet return HELLO, NAME if name is UpperCase', function () {
    // Arrange
    const main = new Main()
    // Act
    const result = main.greet('BOB')

    // Assert
    expect(result).toBe('HELLO, BOB.')
  })

  it('function greet return 2 names', function () {
    // Arrange
    const main = new Main()
    // Act
    const result = main.greet('Bob', 'Patrick')

    // Assert
    expect(result).toBe('Hello, Bob and Patrick.')
  })

  it('function greet return 2 names UpperCase', function () {
    // Arrange
    const main = new Main()
    // Act
    const result = main.greet('BOB', 'PATRICK')

    // Assert
    expect(result).toBe('HELLO, BOB AND PATRICK.')
  })
})

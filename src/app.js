export class Main {
  greet (names) {
    if (!names || names.length === 0 || names[0] === '') {
      return 'Hello, my friend.'
    }
    names = names.filter((name) => (name !== null && name !== undefined && name !== ''))
    const upper = names.filter((name) => (name.toUpperCase() === name))
    if (names.length === 1) {
      if (names[0] === names[0].toUpperCase()) {
        return `HELLO, ${names[0]}.`
      }
      return `Hello, ${names[0]}.`
    }

    if (names.length === 2) {
      if (names[0] === names[0].toUpperCase() && names[1].toUpperCase()) {
        return `HELLO, ${names[0]} AND ${names[1]}.`
      }
      return `Hello, ${names[0]} and ${names[1]}.`
    }

    const lastName = names.pop()
    const otherName = names.join(', ')
    if (upper.length === names.length + 1) {
      return (`Hello, ${otherName} and ${lastName}.`).toUpperCase()
    }
    return `Hello, ${otherName} and ${lastName}.`
  }
}

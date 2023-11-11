export class Main {
  greet (names) {
    if (!names || names.length === 0 || names[0] === '') {
      return 'Hello, my friend.'
    }
    names = names.filter(
      (name) => name !== null && name !== undefined && name !== ''
    )
    const upper = names.filter((name) => name.toUpperCase() === name)
    let message = 'Hello, '
    for (let index = 0; index < names.length; index++) {
      if (index === 0) {
        message += names[index]
      } else if (names.length > 2 && index !== (names.length - 1)) {
        message += ', ' + names[index]
      } else {
        message += ' and ' + names[index]
      }
    }
    message += '.'
    if (upper.length === names.length) {
      return message.toUpperCase()
    }
    return message
  }
}

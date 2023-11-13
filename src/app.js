export class Main {
  greet (names) {
    if (!names) {
      return 'Hello, my friend.'
    }
    names = names.filter(
      (name) => name !== null && name !== undefined && name !== ''
    )

    if (names.length === 0) {
      return 'Hello, my friend.'
    }

    const upper = names.filter((name) => name.toUpperCase() === name)
    const normal = names.filter((name) => name.toUpperCase() !== name)

    let message
    let messageNormal = 'Hello, '
    let messageUpper = 'HELLO, '
    for (let index = 0; index < normal.length; index++) {
      if (index === 0) {
        messageNormal += normal[index]
      } else if (normal.length > 2 && index !== normal.length - 1) {
        messageNormal += ', ' + normal[index]
      } else {
        messageNormal += ' and ' + normal[index]
      }
    }
    messageNormal += '.'

    for (let index = 0; index < upper.length; index++) {
      if (index === 0) {
        messageUpper += upper[index]
      } else if (upper.length > 2 && index !== upper.length - 1) {
        messageUpper += ', ' + upper[index]
      } else {
        messageUpper += ' AND ' + upper[index]
      }
    }
    messageUpper += '!'

    if (normal.length > 0 && upper.length === 0) {
      message = messageNormal
    }
    if (upper.length > 0 && normal.length === 0) {
      message = messageUpper
    }
    if (normal.length > 0 && upper.length > 0) {
      message = messageNormal + ' AND ' + messageUpper
    }

    return message
  }
}

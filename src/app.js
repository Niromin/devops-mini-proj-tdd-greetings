export class Main {
  greet (name, nameBis) {
    if (name === null || name === undefined || name === '') {
      if (nameBis === null || nameBis === undefined || nameBis === '') {
        return 'Hello, my friend.'
      }
      if (nameBis === nameBis.toUpperCase()) {
        return 'HELLO, ' + nameBis + '.'
      }
      return 'Hello, ' + nameBis + '.'
    } else {
      if (nameBis === null || nameBis === undefined || nameBis === '') {
        if (name === name.toUpperCase()) {
          return 'HELLO, ' + name + '.'
        }
        return 'Hello, ' + name + '.'
      } else {
        return 'Hello, ' + name + ' and ' + nameBis + '.'
      }
    }
  }
}

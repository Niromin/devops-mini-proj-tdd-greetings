export class Main {
  greet (name, nameBis) {
    if (name === null || name === undefined || name === '') {
      return 'Hello, my friend.'
    } else {
      if (nameBis === null || nameBis === undefined || nameBis === '') {
        if (name === name.toUpperCase()) {
          return 'HELLO, ' + name + '.'
        }
        return 'Hello, ' + name + '.'
      } else {
        if (name === name.toUpperCase() && nameBis === nameBis.toUpperCase()) {
          return 'HELLO, ' + name + ' AND ' + nameBis + '.'
        }
        return 'Hello, ' + name + ' and ' + nameBis + '.'
      }
    }
  }
}

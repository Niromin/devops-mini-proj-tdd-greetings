export class Main {
  greet (name) {
    if(name === null || name === undefined){
      return 'Hello, my friend.'
    }
    return 'Hello, ' + name + '.'
  }
}

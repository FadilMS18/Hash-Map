import { HashMap } from "./hash-map.js"
console.clear()
let testing = new HashMap
testing.set("June", 'Maylin')
testing.set("June", 'poluy')
testing.set("Dog", 'you')
testing.set("Cat", 'me')
testing.set("Goku", 'meap')
testing.set("Godzilla", 'kulo')
testing.set("Fack", 'mu')

console.log(testing.get('Goku'))

console.log(testing.has('Fack'))

console.log(testing.remove(''))

// testing.clear()

console.log(testing.length())

console.log(testing.keys())

console.log(testing.values())

console.log(testing.entries())

console.log(testing)


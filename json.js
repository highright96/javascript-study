'use strict'
// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true)
console.log(json)

json = JSON.stringify(['apple', 'banana'])
console.log(json)

const rabbit = {
    name: 'tori',
    age: 2,
    size: null,
    birthDate: new Date(),
    jump: () => console.log('jump!')
}

json = JSON.stringify(rabbit)
console.log(json)

json = JSON.stringify(rabbit, ['name', 'age'])
console.log(json)

console.clear()
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`)
    return key === 'name' ? 'ellie' : value;
})
console.log(json)



// 2. JSON to object
console.clear()
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`)
    return key === 'birthDate' ? new Date(value) : value
});

console.log(obj)


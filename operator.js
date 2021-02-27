// 1. String concatenation
// 생략
console.log('my' + ' cat');

// 2.Numeric operators
// 생략

// 3. Increment and decrement operators
let counter = 2
const preIncrement = ++counter
// counter = counter + 1
// preIncrement = count
const postIncrement = counter++
// postIncrement = counter
// counter = counter + 1
console.log(`preIncrement: ${postIncrement}, postIncrement: ${postIncrement}`)

// 4. Assignment operators
let x = 3
let y = 6

x += y 
x -= y

// 5. Comparison operators
// 생략

// 6. logical operators
// ||(or), &&(and), !(not)
const value1 = true
const value2 = 4 < 2;
function check(){ return true; }
console.log(`or : ${value1 || value2 || check()}`);

// 7. Equality
const stringFive = `5`
const numberFive = 5

// 타입x
console.log(stringFive == numberFive) // true
// 타입o
console.log(stringFive === numberFive) // trie

// 8. Conditional operator: if
// if, else if, else
// 생략

// 9. Ternary operator: ?
// 조건 ? value1(true) : value2(false)
console.log(4<3 ? "YES" : "NO")

// 10. Switch
// 생략

// 11. loops
// 생략

// 12. For
for(i = 0; i<3; i++){
    console.log(i)
}

for(let i = 0; i<3; i = i + 1){
    console.log(i)
}

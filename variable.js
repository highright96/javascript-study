//1. Use strict
//aded in ES 5
//use this for Valina Javascript
'use strict';

console.log("Hello world!")

//2. Variable
// let (added in ES6)
let globalName = 'global'
{
    let name = 'local';
    console.log(name);
    name = 'rename'
    console.log(name)
    console.log(globalName)
}

// var (절대 사용하면 안된다.)
// var hoisting (변수 선언을 코드의 가장 윗부분으로 올려준다.)
// var (블록 스코프가 적용안된다.) 
console.log(age)
age = 4
var age

// 3.Constant
// 불변
// security
// thread safety
// reduce human mistakes
const daysInWeek = 7


// 4. Variable types
// primitive, single item : number, string, boolean, null, undefined
// object, box container
// function, first-class function
const count = 17
const size = 17.1
console.log(`value: ${count}, type: ${typeof count}`) // 17, number
console.log(`value: ${size}, type: ${typeof size}`) // 17.1, number

// number - special numberic values
const infinity = 1 / 0
const negativeInfinity = -1 / 0
const nAn = 'not a number' / 2;
console.log(infinity)
console.log(negativeInfinity)
console.log(nAn)

// string
const char = 'c'
const brendan = 'brendan'
const greeting = 'hello' + brendan
console.log(`value: ${brendan}, type: ${typeof brendan}`)
console.log(`value: ${greeting}, type: ${typeof greeting}`)

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3< 1;

// null
let nothing = null;

// undefined
let x;

// symbol, 유니크한 식별자를 생성
const symbol1 = Symbol('id')
const symbol2 = Symbol('id')
console.log(symbol1 === symbol2) // false
// symbol 은 바로 출력 불가능
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)
console.log(`value: ${symbol2.description}, type: ${typeof symbol2}`)

// object
const ellie = { name: "ellie", age: 20}
console.log(`value(age): ${ellie.age}, type: ${typeof ellie}`)
ellie.age = 30
console.log(`value(age): ${ellie.age}, type: ${typeof ellie}`)

// 5. Dynamic typing : 할당되는 타입에 따라 타입이 변경된다.
// 자바스크립트는 런타임시에 타입이 결정되기 때문에 개발자의 실수로 런타임 에러가 발생할 가능성이 높다.
// 해곃하고자 타입스크립트를 만들었다. 자바스크립트 위에 타입이 올려진 언어
// 자바스크립트는 브라우저가 이해할 수 있는 언어지만
// 타입스크립트는 브라우저가 이해할 수 있는 자바스크립트로 translate를 해야한다.
let text = 'hello';
console.log(text.charAt(0))
console.log(`value: ${text}, type: ${typeof text}`) // string

text = 1;
console.log(`value: ${text}, type: ${typeof text}`) // number

text = '7' + 5
console.log(`value: ${text}, type: ${typeof text}`) // string

text = '8' / '2'
console.log(`value: ${text}, type: ${typeof text}`) // number

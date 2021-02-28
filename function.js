'use strict';

// 1. Function declaration
// one function == one thing
// naming: doSomething, command, verb
// function is object in JS
function log(message){
    console.log(message);
}
log(`Hello`)
log(1234)

// 2. Parameter
// object -> reference
// primitive -> value
function changeObject(obj){
    obj.name = `changed`
}

function changeOther(a){
    a = `changed`
}

const ellie = { name : `ellie`}
let a = `ellie`
changeObject(ellie)
changeOther(a)
console.log(ellie) // changed
console.log(a) // ellie


// 3. Default Parameters (added in ES6)
// 파라미터를 전달하지 않은 경우 대체값을 지정할 수 있다.
function showMessage(message, from = 'unknown'){
    console.log(`message ${message}, from ${from}`)
}
showMessage(`Hi`) // message Hi, from unknown


// 4. Rest parameters (added in ES6)
function printAll(...args){
    for(let i =0; i<args.length; i++){
        console.log(args[i]);
    }

    // for in 과 동일
    for(const arg of args){
        console.log(arg)
    }

    // 함수형 언어
    args.forEach(arg => console.log(arg))
}

printAll(`a`, `b`, `c`);


// 5. Local scope
// 부모 스코프 -> 자식 스코프 변수 접근 x
// 자식 스코프 -> 부모 스코프 변수 접근 o
// 부모가 자식 스코프 변수에 접근 가능하게 하는 기술 closure
let global = 'global'
{
    let local = 'local'
    console.log(global)
}
//console.log(local) -> 에러


// 6. return
// 생략

// 7. Early return, Early exit
// 조건이 맞지 않아 리턴되는 부분을 if로 감싸주고 빨리 리턴할 수 있게 맨 앞에 위치시킨다.
// 조건이 많아 로직이 길어지는 부분은 블록 처리를 안해주는 편이 가독성에 좋다.
function upgradeUser(user){
    if(user < 10){
        return;
    }
    // long upgrade logic
}


// 7. Function Expression
// hoisting
//print() 에러 발생 -> 정의된 이후 사용 가능
const print = function () { //anonymous function 익명 함수
    console.log(`print`);
}
print()


// 8. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === `love you`){
        printYes();
    }else {
        printNo();
    }
}

const printYes = function () {
    console.log('YES');
}

const printNo = function () {
    console.log('NO');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// 9. Arrow function
// always anonymous function
const add = (a, b) => a + b
let sum = add(1,2)
console.log(sum)


// 10. IIFE : 선언함과 동시에 호출
(function hello(){
    console.log('IIFE');
})();
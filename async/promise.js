`use strict`

// Promise 는 JavaScript 에서 비동기 코드에서 콜백대신에 사용할 수 있는 object 이다.
// 자바스크립트에서 제공하는 비동기를 간편하게 쓸 수 있도록 도와준다.
// state: pending -> fulfilled or rejected
// Producer vs Consumer


// 1. Producer
// when new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log(`doing something...`)
    setTimeout(()=> {
        resolve('ellie');
        //reject(new Error('no network'));
    }, 2000)
});


// 2. Comsumer: then, catch, finally를 통해 받아올 수 있다.
// chaining 방식 사용 가능
promise
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log('finally')
    })


// 3. Promise chaining
console.clear()
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(()=> resolve(1), 1000);
})

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(()=> resolve(num - 1), 1000);
        })
    })
    .then(num => console.log(num))


// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
});
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
});
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
});

getHen() //
    .then(getEgg)
    .then(cook)
    .then(console.log)
    .catch(console.log);    
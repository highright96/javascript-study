'use strict'

// JavaScript is synchronous.
// 자바스크립트는 synchronous(동기) 언어
console.log(1)
setTimeout(()=>{
    console.log(2)
},1000)
console.log(3)
// 결과
// 1, 3, 2
// setTimeout 을 기다리지 않는다.


// Synchronous callback
// 동기 콜백
function printImmediately(print){
    print();
}
printImmediately(()=> console.log('hello'))


// Asynchronous callback
// 비동기 콜백
function printWithDelay(print, timeout){
    setTimeout(print, timeout)
}
console.clear()
console.log(1)
printWithDelay(()=>console.log('async callback'), 1000)
console.log(2)


// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
            (id === 'ellie' && password === 'dream') ||
            (id === 'coder' && password === 'academy')
            ) {
            onSuccess(id);
            } else {
            onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
            onSuccess({ name: 'ellie', role: 'admin' });
            } else {
            onError(new Error('no access'));
            }
        }, 1000);
    }
}
  
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your passrod');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
        user,
        userWithRole => {
            alert(
            `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
            );
        },
        error => {
            console.log(error);
        }
        );
    },
    error => {
        console.log(error);
    }
);
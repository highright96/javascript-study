// 1. Object
// object = { key : value } 의 집합
const obj1 = {};
const obj2 = new Object();

const ellie = { name : 'ellie', age : 20 }
console.log(ellie)

// javascript 는 동적인 언어
// 중간에 key를 추가할 수 있다.
ellie.hasJob = true;
console.log(ellie)

// 삭제도 가능하다.
delete ellie.hasJob;
console.log(ellie)


// 2. Computed properties
// 동적인 key 의 value 를 가져오거나 저장할때 사용한다.
console.log(ellie.name);
console.log(ellie['name'])
ellie['hasJob'] = true
console.log(ellie.hasJob);



// 3. Property value shorthand
// 같은 형식의 객체를 반복해서 생성해야할때
const person1 = { name : 'bob', age : 20}
const person2 = { name : 'steve', age : 25}
const person3 = new Person('ellie', 30)

// Constructor function 생성자 함수
function Person(name, age) {
    this.name = name;
    this.age = age;
}

console.log(person1)
console.log(person2)
console.log(person3)



// 5. in operator: property existence check
// 해당 키가 object 안에 존재하는지 확인
console.log('name' in person1) // true
console.log('random' in person2) // false



// 6. for..in vs for..of
console.clear()
// for (Key in obj)
// ellie object 내의 모든 key가 출력된다.
for(key in ellie){
    console.log(key)
}

// for ( value of iterable)
let arr = []
for(value of arr){
    console.log(value)
}



// 7. Fun cloning
// 얕은 복사
const user = { name : 'ellie' , age: 20};
const user2 = user;
user.name = 'code'
console.log(user)
console.log(user2)

// 깊은 복사
const user4 = {}
Object.assign(user4, user)
/*
const user4 = Object.assign({}, user)
*/
console.log(user4)
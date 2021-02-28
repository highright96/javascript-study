`use strict`

// Array


// 1. Declaration 정의
const arr1 = new Array();
const arr2 = [1,2];


// 2. looping over an array
// a. for
// b. for of
for(value of arr2){
    console.log(value);
}

// c. forEach
arr2.forEach((v, i) => console.log(`${v} + ${i}`));

arr2.forEach(function (value, index, array) {
    console.log(value)
    console.log(index)
    console.log(array)
})


// 4. Addition, deletion, copy
// push
console.clear()
arr2.push(3)
console.log(arr2)


// pop
arr2.pop()
console.log(arr2)


// unshift: 맨 앞에 원소 삽입
arr2.unshift(0)
console.log(arr2)


// shift: 맨 앞의 원소 제거
arr2.shift()
console.log(arr2)


// 특정 범위 원소 삭제 (start index, count) 
const deleted = arr2.splice(0)
console.log(arr2)
console.log(deleted)
arr2.push('a')
arr2.push('b')


// 삭제 후 배열 추가
arr2.splice(0, 2, '1', '2')
console.log(arr2)


// 배열 합치기
arr3 = ['3', '4']
const arr4 = arr2.concat(arr3)
console.log(arr4)


// 원소 찾기
console.clear();
console.log(arr4.indexOf('1'))
console.log(arr4.includes('1'))


// 원소를 찾을때 마지막으로 찾은 위치를 반환
console.clear();
arr4.push('1')
console.log(arr4) // 1,2,3,4,1
console.log(arr4.indexOf('1')) // 0
console.log(arr4.lastIndexOf('1')) // 4

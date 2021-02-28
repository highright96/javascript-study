'use strict'

  // Q1. make a string out of an array
  // array -> string
  {
      const fruits = ['apple', 'banana', 'orange'];
      const result = fruits.join(',');
      console.log(result);
  }
  


  // Q2. make an array out of a string
  // string -> array
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',');
    console.log(result);
  }
  


  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  // reverse
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array);
  }



  // Q4. make new array without the first two elements
  // 배열 자르기 slice
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    console.log(result);
    console.log(array);
  }
  


  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  // 조건에 해당하는 object 찾기
  // 찾으면 바로 반환하고 종료
  {
    const result = students.find((student) => student.score === 90);
    console.log(result);
  }
  


  // Q6. make an array of enrolled students
  // 조건이 true면 해당하는 object 반환
  // 배열 반환
  {
    const result = students.filter((student) => student.enrolled);
    console.log(result);
  }
  


  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  // 모든 배열의 원소를 방문하고, 특정 로직을 실행한후 반환하여 배열로 만든다.
  {
    console.clear()
    const result = students.map((student) => student.score);
    console.log(result);
  }
  


  // Q8. check if there is a student with the score lower than 50
  {
    //console.clear();
    // 하나라도 true면 true 반환
    const result = students.some((student) => student.score < 50);
    console.log(result); // true
  
    // 모두 true면 true 반환
    const result2 = students.every((student) => student.score >= 50);
    console.log(result2); // false
  }



  // Q9. compute students' average score
  // reduce(전 reduce의 리턴값, 현재값, => 로직, prev의 초기값)
  // 누적하는 기능을 한다.
  {
    console.clear();
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
  }
  


  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    const result = students
      .map((student) => student.score) // 배열을 리턴함
      .filter((score) => score >= 50) // map의 리턴배열을 조건 처리
      .join(); // filter 리턴배열을 string으로 변환
    console.log(result);
  }
  

  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const result = students
      .map((student) => student.score)
      .sort((a,b) => b-a)
      .join();
    console.log(result);
  }
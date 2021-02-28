'use strict';

// 1. Class, Object
// class: template
// object: instance of a class

class Person{
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //method
    speak(){
        console.log(`${this.name}: hello!`)
    }
}

const ellie = new Person('ellie', 20)
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


// 2. Getter, Setter

class User {
    constructor(firstName, lastName, age){
        this.firsName = firstName
        this.lastName = lastName
        this.age = age
        // this.age 는 getter(get age())를 호출
        // = age 는 setter(set age())를 호출
    }

    get age(){
        return this._age;
    }

    set age(value){
        //if(value < 0) throw Error('age can not be negatiave')
        
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age)


// 3. Fields (public, private)
class Experiment {
    publicField = 2; // public
    #privateField = 0; // private
}
const experiment = new Experiment();
console.log(experiment.publicField)
console.log(experiment.privateField) // undefined


// 4. Static
// 오브젝트의 동일한 로직이나 변수를 static 으로 선언
// 메모리 효율 up!
class Article{
    
    static publisher = 'Dream Coding';

    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log('print!')
    }
}
console.log(Article.publisher)
Article.printPublisher()


// 5. Inheritance
class Shape{
    constructor(width, height){
        this.width = width
        this.height = height
    }

    getArea () {
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape {
    // Override
    getArea(){
        //부모의 getArea()
        //super.getArea();
        return (this.height * this.width) / 2;
    }

    toString(){
        console.log(`Triangle!`)
    }
}

const rec = new Rectangle(10,20);
const tri = new Triangle(10,20);
console.log(rec.getArea());
console.log(tri.getArea());


// 6. Class checking instanceOf
// 생략



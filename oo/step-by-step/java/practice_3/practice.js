class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`
    }
}
let person = new Person('Tom',2);
console.log(person.introduce());

class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.class = klass;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old. I am at Class ${this.class}.`
    }
}
let student = new Student('Tom',21,2);
console.log(student.introduce());
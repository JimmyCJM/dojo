class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`
    }
}
let person = new Person('Tom',21);
console.log(person.introduce());

class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.class = klass;
    }
    introduce(){
        return `${person.introduce('Tom',21)} I am at Class ${this.class}`;
    }
}
let student = new Student('Tom',21,2);
console.log(student.introduce());

class Worker extends Student{
    constructor(name,age){
        super(name,age);
    }
    introduce(){
        return `${person.introduce('Tom',21)} I am a Worker. I have a job.`;
    }
}
let worker = new Worker('Tom',21);
console.log(worker.introduce());

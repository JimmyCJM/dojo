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
        return `${person.introduce('Tom',21)} I am a Student. I am at Class ${this.class}`;
    }
}
let student = new Student('Tom',21,2);
console.log(student.introduce());

class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age)
        this.class = klass
    }
    introduce(){
        if (this.class !== undefined)
            return `${person.introduce('Tom',21)} I am a Teacher. I teach Class ${this.class}.`
        else return `${person.introduce('Tom', 21)} I am a Teacher. I teach No Class.`
    }
}

let teacher_1 = new Teacher('Tom',21,2);
console.log(teacher_1.introduce());

let teacher_2 = new Teacher('Tom',21);
console.log(teacher_2.introduce());
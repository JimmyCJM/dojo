class Person{
    constructor(id,name,age){
        this.id = id;
        this.name = name;
        this.age = age;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`
    }
}
let person = new Person(01,'Tom',21);
console.log(person.introduce());


class Class{
    constructor(number){
        this.number = number;
    }

    assignLeader(student){
        this.leader = student.name;
        student.introduce = function () {
            return `My name is ${student.name}. I am ${student.age} years old. I am a Student. I am Leader of Class ${this.class.number}`;
        }
    }
}

let klass_2 = new Class(2);

class Student extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.class = new Class(klass);
    }
    introduce(){
        return `${super.introduce()} I am a Student. I am at Class ${this.class.number}`;
    }
}
let student = new Student(01,'Tom',21,2);
let student_2 = new Student(02,'Jerry',21,1);
console.log(student.introduce());


klass_2.assignLeader(student);
console.log(student.introduce());


class Teacher extends Person{
    constructor(id,name,age,klass){
        super(id,name,age)
        this.class = klass
    }
    introduce(){
        return (this.class !== undefined)?(`${super.introduce()} I am a Teacher. I teach Class ${this.class}.`):(`${super.introduce()} I am a Teacher. I teach No Class.`);
    }
    introduceWith(student){
        return (student.class.number === this.class)? `${super.introduce()} I am a Teacher. I teach ${student.name}.`:`${super.introduce()} I am a Teacher. I don't teach ${student.name}.`
    }
}



let teacher_1 = new Teacher(00,'Tom',21,2);
console.log(teacher_1.introduce());
console.log(teacher_1.introduceWith(student));
console.log(teacher_1.introduceWith(student_2));

let teacher_2 = new Teacher(10,'Tom',21);
console.log(teacher_2.introduce());

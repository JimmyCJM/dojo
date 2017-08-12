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
class Class{
    constructor(number){
        this.number = number;
    }
    appendMember(student){
        student.class.number = this.number;
        console.log(`I am ${teacher_2.name}. I know ${student.name} has joined Class ${student.class.number}`);
    }
    assignLeader(student){
        if (student.class.number !== this.number){
            console.log(`It is not one of us.`);
        }
        else {
            this.leader = student.name;
            console.log(`I am ${teacher_2.name}. I know ${student.name} become Leader of Class ${student.class.number}`);
        }
    }
    isIn(stdent){
        if (stdent.class.number === this.number)    console.log(true) ;
        else console.log(false);
    }
}

class Student extends Person{
    constructor(id,name,age,klass) {
        super(id, name, age);
        this.class = new Class(klass);
    }
    introduce(student){
        return `${super.introduce()} I am a Student. I am at Class ${this.class.number}`;
    }
}

class Teacher extends Person{
    constructor(id,name,age,classes){
        super(id,name,age);
        this.class = classes;
    }
    introduce(teacher){
        if (this.class !== undefined)
            return `${super.introduce()} I am a Teacher. I teach Class ${this.class}.`
        else return `${super.introduce()} I am a Teacher. I teach No Class.`
    }
    introduceWith(student){
        if (student.class.number === this.class) return `${super.introduce()} I am a Teacher. I teach ${student.name}.`
        else return `${super.introduce()} I am a Teacher. I don't teach ${student.name}.`
    }
    isTeaching(student){
        return this.class.isIn(student);
    }
}

let klass_1 = new Class(1);
let klass_2 = new Class(2);

let student_1 = new Student(10,'Tom',21,01);
let student_2 = new Student(11,'Jerry',21,02);
let student_3 = new Student(12,'Cruce',21,01);
let teacher_1 = new Teacher(00,'Green',35);
let teacher_2 = new Teacher(01,'Bluce',45,[01,02]);


console.log(student_1.introduce());
console.log(student_2.introduce());
console.log(student_3.introduce());
console.log(teacher_1.introduce());
console.log(teacher_2.introduce());

klass_1.assignLeader(student_1);
klass_2.assignLeader(student_3);
console.log(klass_1.leader);
console.log(klass_2.leader);

klass_2.appendMember(student_3);
console.log(student_3.introduce());
console.log(student_1.introduce());
console.log(teacher_1.isTeaching(student_1));
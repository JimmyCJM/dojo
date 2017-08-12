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


class Class{
    constructor(number){
        this.number = number;
    }
}

class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.class = new Class(klass);
    }
    introduce(){
        return `${person.introduce('Tom',21)} I am a Student. I am at Class ${this.class.number}`;
    }
}
let student = new Student('Tom',21,2);
let student_2 = new Student('Jerry',21,1);
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
    introduceWith(student){
        if (student.class.number === this.class) return `${person.introduce('Tom', 21)} I am a Teacher. I teach ${student.name}.`
        else return `${person.introduce('Tom', 21)} I am a Teacher. I don't teach ${student.name}.`
    }
}



let teacher_1 = new Teacher('Tom',21,2);
console.log(teacher_1.introduce());
console.log(teacher_1.introduceWith(student));
console.log(teacher_1.introduceWith(student_2));

let teacher_2 = new Teacher('Tom',21);
console.log(teacher_2.introduce());

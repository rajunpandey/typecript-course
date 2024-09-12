/*
//Syntax

class className {
    static property_name: data_type = value; 
}
*/


/*

//Example
class Circle {
    static pi: number = 3.14159; 
}
console.log("The value of the PI is: " + Circle.pi);
*/


//Example
class Student {
    static studentCount: number = 0; 
    

    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
        Student.studentCount++;
    }


    display() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}


let student1 = new Student('rajun', 20);
let student2 = new Student('ram', 21);

console.log("Total number of registered students is: " + Student.studentCount); // Output: 2
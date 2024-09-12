/*
//Syntax
class Class_name {
    static method_name(params) {
        // Code to be executed
    }
}
    */

/*
//Example
class Square {
    
    static area(side: number) {
        return side * side; 
    }
}


let area = Square.area(5);
console.log(`Area of the square: ${area}`);
*/

//Example
class Student {
    private static studentCount: number = 0; 

    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
        Student.studentCount++; 
    }


    static getStudentCount() {
        return Student.studentCount;
    }
}

let student1 = new Student('rajun', 20);
let student2 = new Student('ram', 21);

console.log("Total number of registered students is: " + Student.getStudentCount()); // Output: 2
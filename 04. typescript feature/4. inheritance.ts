//Inheritance allows you to reuse the properties and methods of other classes.

// Base class
class Person {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    display(): void {
      console.log(this.name);
    }
  }
  
  // Derived class
  class Employee extends Person {
    empCode: number;
    constructor(name: string, code: number) {
      super(name);
      this.empCode = code;
    }
    show(): void {
      console.log(this.empCode);
    }
  }
  
  let emp: Employee = new Employee("rajun", 123);
  emp.display(); // rajun
  emp.show(); // 123
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    display(): void {
        console.log(this.name);
    }
}


class Employee extends Person {
    empCode: number;
    constructor(name: string, code: number) {
        super(name);
        this.empCode = code;
    }
    show(): void {
        super.display();
    }
}

let emp = new Employee("rajun", 123);
emp.show();
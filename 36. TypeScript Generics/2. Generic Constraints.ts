/*
//Syntax

function merge<T extends object>(obj1: T) {
    // Code to execute
}
    */

/*
//Example: (Extending Generic Types with Interfaces)
interface Person {
    name: string;
    age: number;
    email: string;
}

interface Employee {
    empCode: number;
    empDept: string;
}

function merge<T extends Person, U extends Employee>(obj1: T, obj2: U) {
    return { ...obj1, ...obj2 };
}

const person: Person = { name: 'rajun', age: 23, email: 'rajunpandey1234@gmail.com' };
const employee: Employee = { empCode: 1001, empDept: 'IT' };

const mergedObj = merge(person, employee);
console.log(mergedObj);
*/



//example: Using Type Parameters in Generic Constraints
function getValue<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

const obj = {
    name: 'rajun',
    age: 23
};

const name1 = getValue(obj, 'name');
console.log(name1); // Sam
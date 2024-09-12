/*
//Syntax

interface IGeneric<T> {
    value1: T;
    value2: T;
}
*/



/*
//Example
interface IGeneric<T> {
    value1: T;
    value2: T;
}
let obj: IGeneric<number> = {
    value1: 10,
    value2: 20
};

console.log(obj.value1);
*/


/*
//Example
interface IGeneric<T, U> {
    value1: T;
    value2: U;
}

let obj: IGeneric<number, string> = {
    value1: 10,
    value2: "Hello"
};

console.log(obj.value2);
*/


/*
//Example
interface IGeneric<T, U> {
    value1: T;
    merge: (a: U, b: U) => U;
}

let obj: IGeneric<number, string> = {
    value1: 10,
    merge: (a, b) => a + b
};

console.log(obj.merge("Hello", "world!")); // Hello world!
*/


//example:Generic Interface as a Function Type
interface func_interface<T, U> {
    (input: T): U;
}

const stringToLength: func_interface<string, number> = (input) => {
    return input.length;
};

const result = stringToLength("Hello, TypeScript!"); 
console.log(result);

const numberToString: func_interface<number, string> = (input) => {
    return `Number: ${input}`;
};

const output = numberToString(123); 
console.log(output);
//The any type in TypeScript is a specific type that can represent any value. 
//It is generally used when a type of variable is unknown or not yet defined.

//Can represent any value
/*
//A variable declared with any type can hold value of any datatype –

let x: any;
x = "Hello";
x = 23;
x = true;

//Here the variable x is declared with any type. This allows us to assign any value, string, number, boolean, etc. to the variable.
*/

/*
//The type of a variable of any type is undefined when you check using typeof operator –

let x: any;
console.log(typeof x) // undefined
*/

//Example
//Let's understand the any type with help of the below TypeScript example –

let x: any;
console.log(typeof x);
x = "Hello";
console.log(typeof x);
x = 23;
console.log(typeof x);
x = true;
console.log(typeof x);

//Here the variable is declared of any type. Then assigned this with values of different types (string, number and boolean).


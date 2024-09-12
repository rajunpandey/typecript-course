/*
///Syntax
(param1, param2, ..., paramN) => statement
*/

/*
//Example: Arrow function with multiple statement
const multiply = (x: number, y: number): number => {
    let res: number = x * y;
    return res;
};
console.log(multiply(5,6));
*/

/*
//Example: Arrow function with no parameter
const greet = () => { return "Hello World!";}
console.log(greet());
*/


/*
//Example: Arrow function with a single parameter
const add = (x: number): number => {return x + 10;}
console.log(add(5));
*/


/*
//Example: Arrow function with multiple parameters
let sum: number;
const add = (a: number, b: number, c: number) => {
  sum = a + b + c;
  return sum;
};
let res = add(10, 30, 45);
console.log("The result is: " + res);
*/

/*

//Example: Arrow function with default parameters
const mul = (a = 10, b = 15) => a * b;
console.log("mul(5, 8) = " + mul(5, 8));
console.log("mul(6) = " + mul(6));
console.log("mul() = " + mul());
*/


/*
//Example: Arrow functions as callback function in other function
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(x => x * x);
console.log(`Original array: ${numbers}`);
console.log(`Squared array: ${squaredNumbers}`);
*/


/*
//Example: Arrow functions in Class
class Calculator {
    add = (x: number, y: number, z: number): number => x + y + z;
 }
 const obj = new Calculator();
 console.log(`The result is: ${obj.add(4, 3, 2)}`);
 */


 //Example: Implementing Higher Order Functions
 const applyOp = (
    x: number, 
    y: number, 
    operation: (a: number, b: number) => number
  ) => {
     return operation(x, y);
  };
  const result1 = applyOp(10, 20, (a, b) => a + b);
  console.log(result1);
  const result2 = applyOp(10, 20, (a, b) => a * b);
  console.log(result2);
/*
//Let’s declare a variable of function type −
let add: (a: number, b: number) => number

//This declares a variable add of function type. The function takes two numbers as argument and returns a number.
*/


//Example
let greet: (name: string) => string;
greet = (name) => {
  return `Hello, ${name}!`;
};
console.log(greet('rajun'));


//The function types in TypeScript can be defined using function type expressions. 
//Function type expression is syntactically similar to the arrow function.

/*
//Syntax

(para1: type1, para2: type2, ...) => returnType
*/


/*
//example
let addFun: (x: number, y: number) => number = function (x:number, y: number): number {
    return x + y
 }
 console.log(addFun(2, 3));
 */

 //example
 const greet: (name: string) => string = (name) => {
    return `Hello, ${name}!`;
  };
  console.log(greet("rajun"));
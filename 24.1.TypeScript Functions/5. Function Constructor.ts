/*
//Syntax
var res = new Function( [arguments] ) { ... }.
*/

/*
//Example
var myFunction = new Function("a", "b", "return a * b"); 
var x = myFunction(4, 3); 
console.log(x);
*/

/*
//Example 1: Creating a simple function without parameters
const greet = new Function("return 'Welcome to typescript course!'");
console.log(greet());
*/


/*
//Example 2: Creating a simple function with parameters
const resFucntion = new Function("x", "y", "return x + y");
let sum = resFucntion(5, 10);
console.log(sum);
*/


/*
//Example 3: Creating a function instance from a function expression
const add = new Function(
    "const sum = function (a, b) {return a+ b}; return sum",
)(); 
console.log(add(2,3));
*/



//Example 4: Creating a function instance from a function declaration
const sayHello = new Function(
    "return function (name) { return `Hello, ${name}` }",
)(); 
console.log(sayHello("rajun"));
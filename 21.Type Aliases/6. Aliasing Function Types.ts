//Aliasing function types can be particularly useful when dealing with higher-order functions or callbacks, providing a clear contract for what functions are supposed to accept and return.

// Define a function type
type GreeterFunction = (name: string) => string;
// Define a function that matches the type
const greet: GreeterFunction = name => `Hello, ${name}!`;
console.log(greet("TypeScript"));
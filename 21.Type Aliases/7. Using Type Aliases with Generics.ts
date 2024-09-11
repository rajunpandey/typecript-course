//Generic types are used to create the custom types. It takes the type 'T' as a parameter, and creates a new type based on the type 'T


// Defining the generic type alias
type Container<T> = { value: T };

// Using the generic type alias
let numberContainer: Container<number> = { value: 123 };
let stringContainer: Container<string> = { value: "Hello World" };

console.log(numberContainer); 
console.log(stringContainer);  
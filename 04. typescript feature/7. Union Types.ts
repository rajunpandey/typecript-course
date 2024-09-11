//The union types allow you to declare the multiple types for variables. Sometimes, developers are required to define a single variable that supports number, string, null, etc. types

// Union types in TypeScript
var unionType: string | number;
unionType = "Hello World"; // Assigning a string value
console.log("String value: " + unionType);

unionType = 500; // Assigning a number value
console.log("Number value: " + unionType);
// unionType = true; // Error: Type 'boolean' is not assignable to type 'string | number'




/*
// Union types in TypeScript
var unionType;
unionType = "Hello World"; // Assigning a string value
console.log("String value: " + unionType);
unionType = 500; // Assigning a number value
console.log("Number value: " + unionType);
// unionType = true; // Error: Type 'boolean' is not assignable to type 'string | number'

*/
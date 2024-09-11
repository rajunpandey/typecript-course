//You can combine different types of literals (string, numeric, boolean) using union types to allow a variable to hold a set of specified values.
// Mixed type literals
type MixedLiterals = "Click" | 404 | true;
let action: MixedLiterals;

action = "Click"; // Valid
console.log(action);

action = 404; // Valid
console.log(action);

action = true; // Valid
console.log(action);
// action = "Other"; 
// Error: Type '"Other"' is not assignable to type 'MixedLiterals'.
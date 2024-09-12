/*
//Syntax

function printVar<T>(val: T) {
    // execute the code
}
printVar(val);
*/



/*
//Example
function printVar<T>(val: T) { // T is a generic type
    console.log("data: ", val);
}
let arr = [1, 2, 3];
let obj = { name: "rajun", age: 23 };

printVar(arr); // Val is array
printVar(obj); // Val is Object
printVar(true); // Val is boolean
*/

/*
//Example
function printVar<T>(val: T) { // T is a generic type
    console.log("data: ", typeof val);
}

printVar(2); // Val is number
printVar("Hello"); // Val is string
printVar(true); // Val is boolean
*/

//Example

function concatenate<T, U>(first: T, second: U): T & U {
    return {...first, ...second};
}



// Example usage with strings
const resultString = concatenate("Hello, ", "world!");
console.log(resultString); // Output: Hello, world!

// Example usage with arrays
const resultArray = concatenate([1, 2, 3], [4, 5, 6]);
console.log(resultArray); // Output: [1, 2, 3, 4, 5, 6]
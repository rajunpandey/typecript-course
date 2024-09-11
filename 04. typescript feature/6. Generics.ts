//Generic types allow you to create reusable components, function codes, or classes that can work with different types, rather than working with the specific types

/*
// Generics in TypeScript
function printArray(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
  printArray([1, 2, 3]); // Array of numbers
  printArray(["a", "b", "c"]); // Array of strings
  */

// Generics in TypeScript
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printArray([1, 2, 3]); // Array of numbers
printArray(["a", "b", "c"]); // Array of strings
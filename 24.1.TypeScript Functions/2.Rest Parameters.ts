// Rest parameters don’t restrict the number of values that you can pass to a function.

/*
//Example: Rest Parameters
function addNumbers(...nums:number[]) {  
    var i;   
    var sum:number = 0; 
    
    for(i = 0;i<nums.length;i++) { 
       sum = sum + nums[i]; 
    } 
    console.log("sum of the numbers",sum) 
 } 
 addNumbers(1,2,3) 
 addNumbers(10,10,10,10,10)
 */

 /*
 //Example: Variable Length Parameter List
 function sum(...nums: number[]) {
   let totalSum = 0;
   for (let num of nums) {
       totalSum += num;
   }
   return totalSum;
}
console.log(sum(10, 20, 30, 40));
console.log(sum(10, 20));
console.log(sum());
*/

/*
//Example: Accessing argument length
function getLen(...theArgs:number[]) {
   console.log(theArgs.length);
 }
 getLen();
 getLen(5);
 getLen(5, 6, 7);
 */

 /*
//Example: Array as spread arguments 
const arr1: number[] = [10, 20, 30];
const arr2: number[] = [40, 50, 60];
arr1.push(...arr2);
console.log(arr1);
*/

/*

//Example: Finding max/min number
function getMax(...args:number[]){ // here ...args as rest parameter
   return Math.max(...args); // here ... works as spread operator
}
console.log(getMax(10,20,30,40));
console.log(getMax(10,20,30));
*/



//Example: Passing rest argument
function multiply(a: number, b: number, c: number): number {
   return a * b * c;
}
let numbers: [number, number, number];
numbers = [2, 3, 4];
console.log(multiply(...numbers));


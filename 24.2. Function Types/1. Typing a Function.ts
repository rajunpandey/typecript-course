//Typing a function refers to specifying types for the its parameters and return values. 
/*
function add (x: number, y: number): number {
    return x + y;
 } 
 let addNums = function (x: number, y: number): number {
    return x + y;
 }
    */


 //TypeScript infers the type of the variable
//In the below example, we have assigned a function to variable add −

let add = function (a: number, b: number): number {
   return a + b;
}
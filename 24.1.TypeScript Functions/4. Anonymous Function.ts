//Functions that are not bound to an identifier (function name) are called as anonymous functions
/*
//Syntax
var res = function( [arguments] ) { ... }
*/

/*
//Example ─ A Simple Anonymous function
var msg = function() { 
    return "hello world";  
 } 
 console.log(msg())
 */

 
 //Example ─ Anonymous function with parameters
 var res = function(a:number,b:number) { 
    return a*b;  
 }; 
 console.log(res(12,2)) 
//Optional parameters can be used when arguments need not be compulsorily passed for a function’s execution.

/*

//The syntax to declare a function with optional parameter is as given below −

function functionName(para1:type1, para2?:type2): returnType{
   // function body
}
   */

//Example: Optional Parameters
function disp_details(id:number,name:string,mail_id?:string) { 
    console.log("ID:", id); 
    console.log("Name",name); 
    
    if(mail_id!=undefined)  
    console.log("Email Id",mail_id); 
 }
 disp_details(123,"rajun");
 disp_details(111,"ram","ram@xyz.com");


 /*
 //example: Using Optional Function Parameters

 function sum(x: number, y: number, z?: number): number {
    if (z){
       return x + y + z;
    }
    else{
       return x + y;
    }
 }
 console.log(sum(2,3));
 console.log(sum(2,3,5));
 */

 /*
 //Example: Type Guards for Option Parameters
 function greet(name: string, age?: number): void {
    if (typeof age === 'number') {
      console.log(`You are ${age} years old.`);
    }
  }
  greet('rajun', 23);
  */

  /*
  //example: Optional parameters should be last parameters
  function add (x?: number, y: number = 30){
    return x + y;
 }
 console.log(add(2,3));

*/

/*
 //Example: Optional parameters can't have default values
 function add (x: number, y?: number = 30){
    return x + y;
 }
 console.log(add(2,3));
*/


 //Example: Default values for optional parameters
 function greet(name: string, age: number = 23): void {
    console.log(`Hello, ${name}!`);
    console.log(`You are ${age} years old.`);
  }
  greet('rajun');

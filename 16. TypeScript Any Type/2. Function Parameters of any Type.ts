/*
//You can also define a function with parameter of any type –
function func(para: any){
}
*/


//example
function greet(name: any): string{
    return `Hello Mr. ${name}`;
 }
 console.log(greet('rajun'));
 console.log(greet(123));
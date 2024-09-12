//Function parameters can also be assigned values by default. However, such parameters can also be explicitly passed values.

/*
//Syntax
function function_name(param1[:type],param2[:type] = default_value) { 
}
*/

/*
//Example: Default parameters
function calculate_discount(price:number,rate:number = 0.50) { 
    var discount = price * rate; 
    console.log("Discount Amount: ",discount); 
 } 
 calculate_discount(1000) 
 calculate_discount(1000,0.30)
 */

 /*
 //Example: Simple Default Parameters
 function greet(name: string, age: number = 30){
    console.log(`Hi ${name}, your age is ${age}.`)
    }
    greet('rajun', 23);
    greet('John');
 */

    /*
//Example: Default parameters after required parameters
function sum(x: number, y: number=10): number{
    return x + y;
}
console.log(sum (20,30));
console.log(sum (30));
*/

/*
//Example: Default parameters before required parameters
function sum(x: number=10, y:number):number{
    return x + y;
}
console.log(sum(20,30)); // 50
console.log(sum(30)); // NaN
*/



//Example: Passing a function as a value for default parameter
function getNum(): number {
    return 10;
}
function mul(a: number, b = getNum()) {
    return a * b;
}
console.log(mul(20, 5));
console.log(mul(20))




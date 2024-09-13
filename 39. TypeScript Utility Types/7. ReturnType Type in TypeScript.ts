//The ReturnType utility type allows to set type for any variable from the function’s return type. 
//For example, if we use any library function and don’t know the function's return type, we can use the ReturnType utility operator.


//example
function func(param1: string): string {
    return param1;
 }
 let result: ReturnType<typeof func> = func("Hello");
 console.log("The value of the result variable is " + result);
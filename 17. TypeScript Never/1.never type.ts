//The never type in TypeScript represents the values that can never occur. 
/*
//For example, the return type of a function that throws an error is never.

function funcName(): never{
   // it throws an exception or never returns
}
*/

/*
//You cannot assign a value to a variable of never type –
let x: never;
x = 10; // throw error

//The above TypeScript code snippet will throw the following errors –
//Type 'number' is not assignable to type 'never'.
*/


/*
//You can use the never type as the return type of a function that never returns or always throws an exception.
//A function that never stops executing –

function infiniteLoop(): never{
   for(;;){}
}
   */

/*
//Another example of function that never stops executing –

function infiniteLoop(): never{
   while (true) {
   }
}
//Variables also acquire the type never when narrowed by any type guards that can never be true.
*/

/*

//The never type is used when we have exhausted all possible value and we don't have anything to assign.

function check(value: string | number) {
    if (typeof value === 'string') {
        return "value is string";
    } else {
        return "value is number";
    }    
    // here, not a string or number
    // "value" can't occur here, so it's type "never"
}
The never type is a subtype of, and assignable to, every type; however, no type is a subtype of, or assignable to, never (except never itself). Even any isn’t assignable to never.

*/


//You can annotate a variable with never type, but it is very uncommon –

function showError(): never{
  throw new Error("Error message from function with never as return type.");
}
let x: never = showError();

//In the above Typescript code snippet, variable x is annotated with the never type. The variable x is assigned showError() function that itself has the never as return type.


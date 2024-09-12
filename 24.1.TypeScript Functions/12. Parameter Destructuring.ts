/*
//Syntax
function getObjValues({ key1, key2 }: { key1: string; key2: number }) {
   // use key1 and key2 as a variable
}
// calling the function with an object
getObjValues({ key1: "Hello", key2: 20 });
*/

/*
//Example 1
function printObjValues({ key1, key2 }: { key1: string; key2: number }) {
    console.log("The value of key1 is " + key1);
    console.log("The value of key2 is " + key2);
 }
 printObjValues({ key1: "Hello", key2: 20 });
 printObjValues({ key1: "TypeScript", key2: 50 });
 */

 /*
 //Example 2
 function getParams({
    param1,
    param2 = "default",
 }: {
    param1: boolean;
    param2?: string;
 }) {
    console.log("The value of param1 is " + param1);
    console.log("The value of param2 is " + param2);
 }
 
 getParams({ param1: true, param2: "value" });
 getParams({ param1: false });
 */

 /*
 //Example 3
// Creating the function whose all parameters are optional and initializing them with default values.
function sample_function(
    {
       value1,
       value2,
       value3,
    }: {
       value1?: number;
       value2?: number;
       value3?: number;
    } = { value1: 20, value2: 30, value3: 40 }
 ): number {
    let sum = value1 + value2 + value3;
    return sum;
 }
 
 console.log("The sum of default values is " + sample_function());
 console.log(
    "The sum of 10000, 20302, and value3 is " +
    sample_function({ value1: 10000, value2: 20302 })
 );
 console.log(
    "The sum of 10, 20, and 25 is " +
    sample_function({ value1: 10, value2: 20, value3: 25 })
 );
 */


 //Example 4
 interface lock {
    lock_id?: string;
    isDurable?: boolean;
 }
 
 let lockObj: lock = {
    lock_id: "4523fdr0",
    isDurable: true,
 };
 
 function callLockFunc(obj: lock) {
    let { lock_id, isDurable } = obj;
    console.log("The destructured lock_id value is " + lock_id);
    console.log("The destructured isDurable value is " + isDurable);
 }
 
 callLockFunc(lockObj);
 
 lockObj.isDurable = false;
 lockObj.lock_id = "eredf";
 callLockFunc(lockObj);
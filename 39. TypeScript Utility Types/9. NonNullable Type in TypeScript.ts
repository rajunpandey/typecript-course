//The NonNullable utility operator removes the null and undefined values from the property type. 
//It ensures that every variable exists with the defined value in the object.


//example
type var_type = number | boolean | null | undefined;

let variable2: NonNullable<var_type> = false;
let variable3: NonNullable<var_type> = 30;

console.log("The value of variable2 is " + variable2);
console.log("The value of variable3 is " + variable3);
// The below code will generate an error
// let variable4: NonNullable<var_type> = null;
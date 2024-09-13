//The Partial utility type transforms all the properties of the current type to optional. 
//The meaning of the partial is either all, some, or none. 
//So, it makes all properties optional, and users can use it while refactoring the code with objects.


//Example
type Type = {
    prop1: string;
    prop2: string;
    prop3: number;
    prop4?: boolean;
 };
 
 let partialType: Partial<Type> = {
    prop1: "Default",
    prop4: false,
 };
 
 console.log("The value of prop1 is " + partialType.prop1);
 console.log("The value of prop2 is " + partialType.prop2);
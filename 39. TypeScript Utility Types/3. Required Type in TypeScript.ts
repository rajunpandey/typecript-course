//The Required utility type allows us to transform type in such a way that it makes all properties of the type required. 
//When we use the Required utility type, it makes all optional properties to required properties.

//Example
type Type = {
    prop1: string;
    prop2: string;
    prop3?: number;
 };
 let requiredType: Required<Type> = {
    prop1: "Default",
    prop2: "Hello",
    prop3: 40,
 };
 console.log("The value of prop1 is " + requiredType.prop1);
 console.log("The value of prop2 is " + requiredType.prop2);
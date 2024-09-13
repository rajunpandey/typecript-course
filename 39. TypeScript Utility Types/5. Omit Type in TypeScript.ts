//The Omit removes the keys from the type and creates a new type. 
//Whatever key we use with the Omit utility operator removes those keys from the type and returns a new type.


//example
type type1 = {
    color: string;
    size: number;
    id: string;
 };
 
 let omitObj: Omit<type1, "color" | "id"> = {
    size: 20,
 };
 console.log(omitObj.size);
 // This will generate an error
 // console.log(omitObj.color);
 // console.log(omitObj.id)
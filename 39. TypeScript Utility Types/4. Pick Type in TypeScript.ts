//The Pick utility type allows us to pick a type of properties of other types and create a new type. 
//Users need to use the key of the types in the string format to pick the key with their type to include in the new type. 
//Users should use the union operator if they want to pick multiple keys with their type.



//Example
type type1 = {
    color: string;
    size: number;
    id: string;
 };
 
 let newObj: Pick<type1, "color" | "id"> = {
    color: "#00000",
    id: "5464fgfdr",
 };
 console.log(newObj.color);
 // This will generate a compilation error as a type of newObj doesn't contain the size property
 // console.log(newObj.size);
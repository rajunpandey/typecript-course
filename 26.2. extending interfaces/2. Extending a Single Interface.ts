interface Shape {
    color: string;
 }
 
 interface ColoredShape extends Shape {
    name: string;
 }
 
 const square: ColoredShape = {
    color: "red",
    name: "Square",
 };
 
 console.log(square.color);
 console.log(square.name); 
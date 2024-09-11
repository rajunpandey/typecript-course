//The tuple alias is used to define the structure of the fixed-size array, which can contain specific types of values in a particular order.

type RGBColor = [number, number, number];
let red: RGBColor = [255, 0, 0];
console.log(`Red color: ${red}`);
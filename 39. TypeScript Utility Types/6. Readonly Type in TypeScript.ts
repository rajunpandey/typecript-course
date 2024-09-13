//We can use the Readonly utility type to make all types read-only properties, making all properties immutable. 
//So, we can’t assign any value to the readonly properties after initializing for the first time.


//example

type keyboard_type = {
    keys: number;
    isBackLight: boolean;
    size: number;
 };
 
 let keyboard: Readonly<keyboard_type> = {
    keys: 70,
    isBackLight: true,
    size: 20,
 };
 console.log("Is there backlight in the keyboard? " + keyboard.isBackLight);
 console.log("Total keys in the keyboard are " + keyboard.keys);
 // keyboard.size = 30 
 // this is not allowed as all properties of the keyboard are read-only
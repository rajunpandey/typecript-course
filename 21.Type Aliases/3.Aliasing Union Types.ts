//Whenever you want to define a variable that can contain values of multiple types, you can use union types.


type StringOrNumber = string | number;
function logMessage(message: StringOrNumber): void {
    console.log(message);
}
logMessage("Hello");
logMessage(123);
//Use type assertion to narrow down the type of any variable
let value: any = "hello world";
let lenStr: number = (value as string).length;
console.log(lenStr);

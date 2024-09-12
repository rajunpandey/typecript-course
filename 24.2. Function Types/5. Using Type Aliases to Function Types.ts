type funcType = (s: string) => void;
function greet (fn: funcType) {
   fn ("Welcome to typescript course!")
}
function print (str: string) {
   console.log(str);
}
greet(print);
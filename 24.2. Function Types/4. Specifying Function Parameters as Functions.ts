

function greet (fn: (s: string) => void) {
    fn ("Welcome to typescript course!")
 }
 function print (str: string) {
    console.log(str);
 }
 greet(print);
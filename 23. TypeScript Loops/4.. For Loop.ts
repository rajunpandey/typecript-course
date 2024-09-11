/*
//Example: Simple for loop
var num:number = 5; 
var i:number; 
var factorial = 1; 

for(i = num;i>=1;i--) {
   factorial *= i;
}
console.log(factorial)
*/

/*
//Example: The for loop with break statement
var i: number = 0;
for (i; i < 5; i++) {
  if (i == 4) {
    break;
  }
  console.log(i);
}
  */


//Example: The for loop with continue statement
var i: number = 0;
for (i; i < 5; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}

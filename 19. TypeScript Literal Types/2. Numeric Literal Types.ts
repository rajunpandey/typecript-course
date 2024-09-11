//Numeric literal types are similar to string literals but allow you to specify exact numeric values as allowed types.


type SmallPrimes = 2 | 3 | 5 | 7 | 11;
let prime: SmallPrimes;
prime = 7; 
console.log(prime); // 7
// prime = 4; 
// Error: Type '4' is not assignable to type 'SmallPrimes'.
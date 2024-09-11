//TypeScript allows changing a variable from one type to another.

/*
var str = '1' 
var str2:number = <number> <any> str   //str is now of type number 
console.log(typeof(str2))
*/

"use strict";
var str = '1';
var str2 = str; //str is now of type number 
console.log(typeof (str2));
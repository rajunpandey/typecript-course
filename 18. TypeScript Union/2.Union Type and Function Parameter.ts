/*
//syntax
function display(name: string | string[]){
    // function body;
 }
    */

//Example
function disp(name: string|string[]) { 
    if(typeof name == "string") { 
       console.log(name) 
    } else { 
       var i; 
       
       for(i = 0;i<name.length;i++) { 
          console.log(name[i])
       } 
    } 
 } 
 disp("rajun") 
 console.log("Printing names array....") 
 disp(["rajun","shyam","hari","sita"])
//It is not mandatory to specify the data type of a parameter. 
//In such a case the data type of the parameter is any. 

/*
var func = (x)=> { 
   if(typeof x=="number") { 
      console.log(x+" is numeric") 
   } else if(typeof x=="string") { 
      console.log(x+" is a string") 
   }  
} 
func(12) 
func("Tom")
*/
/*
//Its output is as follows −
12 is numeric 
Tom is a string
*/


/*
//Optional parentheses for a single parameter
var display = x=> { 
   console.log("The function got "+x) 
} 
display(12)

 output :The function got 12
*/



//Optional braces for a single statement, Empty parentheses for no parameter
var disp =()=> { 
   console.log("Function invoked"); 
} 
disp();


//Its output is as follows −
//Function invoked
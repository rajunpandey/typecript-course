//Lambda statement is an anonymous function declaration that points to a block of code. 
//This syntax is used when the function body spans multiple lines.


/*
//Its syntax is as follows −

( [param1, parma2,…param n] )=> {
 
   //code block
}
   */


//Example: Lambda statement
var foo = (x:number)=> {    
   x = 10 + x 
   console.log(x)  
} 
foo(100)

/*
//example
class Shape { 
    Area:number 
    
    constructor(a:number) { 
       this.Area = a 
    } 
 } 
 
 class Circle extends Shape { 
    disp():void { 
       console.log("Area of the circle:  "+this.Area) 
    } 
 }
   
 var obj = new Circle(223); 
 obj.disp()
 */

 //Example
 class Root { 
    str:string; 
 } 
 
 class Child extends Root {} 
 class Leaf extends Child {}
 
 var obj = new Leaf(); 
 obj.str ="hello" 
 console.log(obj.str)
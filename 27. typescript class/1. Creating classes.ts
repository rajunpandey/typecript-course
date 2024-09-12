/*
//Syntax
class class_name { 
    //class scope 
 }
    */

 
 //Example: Declaring a class
 class Car { 
    //field 
    engine:string; 
  
    //constructor 
    constructor(engine:string) { 
       this.engine = engine 
    }  
 
    //function 
    disp():void { 
       console.log("Engine is  :   "+this.engine) 
    } 
 }
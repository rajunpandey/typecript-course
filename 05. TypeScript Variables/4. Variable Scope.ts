//The scope of a variable specifies where the variable is defined. The availability of a variable within a program is determined by its scope

/*
var global_num = 12          //global variable 
class Numbers { 
   num_val = 13;             //class variable 
   static sval = 10;         //static field 
   
   storeNum():void { 
      var local_num = 14;    //local variable 
   } 
} 
console.log("Global num: "+global_num)  
console.log(Numbers.sval)   //static variable  
var obj = new Numbers(); 
console.log("Global num: "+obj.num_val) 
*/


/*
var global_num = 12;              //global variable 
var Numbers = (function () {
   function Numbers() {
      this.num_val = 13;          //class variable 
   }
   Numbers.prototype.storeNum = function () {
      var local_num = 14;        //local variable 
   };
   Numbers.sval = 10;            //static field 
   return Numbers;
}());

console.log("Global num: " + global_num);
console.log(Numbers.sval);       //static variable  

var obj = new Numbers();
console.log("Global num: " + obj.num_val);
*/
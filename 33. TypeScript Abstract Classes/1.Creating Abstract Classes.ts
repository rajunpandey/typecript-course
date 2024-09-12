/*
//Example 1
abstract class sample {
    
    property1: string;
    constructor(property1: string, property2: number) {
       this.property1 = property1;
    }
    abstract demo(): void;
    
    save(): void {
       console.log("The save method of the abstract class is executed.");
    }
 }
 class test extends sample {
    property2: number;
    constructor(property1: string, property2: number) {
       super(property1);
       this.property2 = property2;
    }
    demo(): void {
       console.log("The value of the property 3 is " + this.propert2);
    }
 }
 let test_obj = new test("TutorialsPont", 9999);
 test_obj.demo();
 test_obj.save();
*/

//Example 2
abstract class class1 {
    abstract method1(): void;
 }
 abstract class class2 extends class1 {
    method2(): void {
       console.log("Inside the method 2 of class2.");
    }
 }
 class class3 extends class2 {
    method1(): void {
       console.log(
          "Implemented the abstract method name method1 of class1 inside the class3"
       );
    }
 }
 var object = new class3();
 
 object.method1();
 
 object.method2();
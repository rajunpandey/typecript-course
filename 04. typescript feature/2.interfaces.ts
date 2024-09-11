//It allows developers to define the structure of the object but doesn't provide the implementation.
/*
// Interfaces in TypeScript
interface IPerson {
    firstName: string;
    lastName: string;
    getFullName(): string;
  }
  
  // Define an object that implements the interface
  let obj: IPerson = {
    firstName: "rajun",
    lastName: "pandey",
    getFullName(): string {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(obj.getFullName());
  */



  // Define an object that implements the interface
let obj = {
    firstName: "rajun",
    lastName: "pandey",
    getFullName() {
       return this.firstName + " " + this.lastName;
    }
 };
 console.log(obj.getFullName());
interface User {
    name: string;
 }
 
 interface EnhancedUser extends User {
    age: number;
    greet(): void;
 }
 
 const user: EnhancedUser = {
    name: "rajun pandey",
    age: 25,
    greet() {
       console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
 };
 
 user.greet();
interface Animal {
    name: string;
    makeSound(): void;
 }
 
 interface Dog extends Animal {
    makeSound(): void;
 }
 
 const dog: Dog = {
    name: "Buddy",
    makeSound() {
       console.log("Woof woof!");
    }
 };
 
 dog.makeSound();
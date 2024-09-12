class Animal {
    protected name: string; 
    constructor(name: string) {
       this.name = name;
    } 
    protected makeSound(): void {
       console.log("The animal makes a sound");
    }
 } 
 class Dog extends Animal {
    public bark(): void {
       console.log(`${this.name} barks!`);
    }
 } 
 
 const dog = new Dog("Buddy"); 
 dog.bark();
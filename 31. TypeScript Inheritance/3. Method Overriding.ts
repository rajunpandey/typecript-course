class Animal {
    move() {
        console.log("Animal is moving");
    }
}


class Dog extends Animal {
    
    move() {
        console.log("Dog is moving");
    }
}

let dog = new Dog();
dog.move();

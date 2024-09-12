
class Car {

    model: string;
    price: number;
    readonly type: string = 'Car';

    constructor(model: string, price: number, type: string) {
        this.model = model;
        this.price = price;
        this.type = type;
    }
    
    display(): void {
        console.log(`Model: ${this.model}, Price: ${this.price}, Type: ${this.type}`);
    }
}

let car = new Car('BMW', 1000000, 'Sedan');
car.display();

// Try to change the value of readonly property
// car.type = 'SUV'; // Error: Cannot assign to 'type' because it is a read-only property.
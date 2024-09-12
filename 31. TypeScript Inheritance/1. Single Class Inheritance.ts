class Vehicle {
    getType() {
        return "Vehicle";
    }
}


class Car extends Vehicle {
    carName: string = "Innova";
    getCarName() {
        return this.carName;
    }
}


let car = new Car();
console.log(car.getType());
console.log(car.getCarName()); 
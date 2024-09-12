
interface Car {
    model: string;
    year: number;
    readonly fuel: string;
}


let car: Car = {
    model: 'BMW',
    year: 2019,
    fuel: 'petrol'
}

console.log(car.model);
console.log(car.year);
console.log(car.fuel);

// Error: Cannot assign to 'fuel' because it is a read-only property.
// car.fuel = 'diesel';
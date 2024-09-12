/*
//Example
class Person {
    private Name: string;

    constructor(Name: string) {
        this.Name = Name;
    }

    get SName(): string {
        return this.Name;
    }
}

const person = new Person("rajun");
console.log(person.SName); // Outputs: rajun
*/



//Example
class Temperature {
    private celsius: number;

    constructor(celsius: number) {
        this.celsius = celsius;
    }

    get fahrenheit(): number {
        return (this.celsius * 9 / 5) + 32;
    }
}

const temp = new Temperature(25);
console.log("The Fahrenheit value is: " + temp.fahrenheit); // Outputs: 77


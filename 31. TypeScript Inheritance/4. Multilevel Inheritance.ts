class Animal {

    move() {
        console.log('This animal moves');
    }
}

class Bird extends Animal {

    fly() {
        console.log('This bird flies');
    }
}


class Parrot extends Bird {

    speak() {
        console.log('The parrot speaks');
    }
}

let P1 = new Parrot();
P1.speak();
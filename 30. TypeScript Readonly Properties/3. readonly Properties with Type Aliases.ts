//  Readonly Properties with type alias
type Point = {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // Error

console.log(p1.x, p1.y);
//The string literal type allows you to define a set of specific values from which a variable or function parameter should contain any value.

// Defining a custom-type Direction
type Direction = "North" | "East" | "South" | "West";

// Defining a function move that takes a single argument of type Direction.
function move(direction: Direction) {
    console.log(`Moving in the direction: ${direction}`);
}
move("North"); 
move("East"); 
// move("Northeast"); 
// Error: Argument of type '"Northeast"' is not assignable to parameter of type 'Direction'.
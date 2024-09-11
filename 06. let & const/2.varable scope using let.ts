//we can't access the variable outside the block unlike the variable declared using the 'var' keyword.
/*
let bool: boolean = true;
if (bool) {
    let result: number = 10;
    console.log(result); // It can have accessed only in this block
}
// console.log(result); Can't access variable outside of the block.
*/


let animal: string = "cat";
// let animal: string = "dog"; 
// Error: Cannot redeclare block-scoped variable 'animal'
console.log(animal); // Output: cat
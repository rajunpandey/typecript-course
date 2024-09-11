//variables with the same name but if they are in different blocks, are considered as different variables.

let bool: boolean = false;
// If the boolean is true, the variable num will be 1, otherwise it will be 2
if (bool) {
    let num: number = 1;
    console.log(num);
} else {
    let num: number = 2;
    console.log(num);
}
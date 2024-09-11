/*
//Example: Variable declared with any
let user: any;
user.isEnrolled;
//The above TypeScript code will not show any error at compilation. But it will through the following run time error.
*/






//Example: Variable declared with unknown
let user:unknown;
user.isEnrolled;
//The above code will show a compile time error as follows –

//'user' is of type 'unknown'.

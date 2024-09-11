//The object can have properties in the key-value format. 
//Sometimes, you need to define multiple objects with the same structure, you can use the object type aliases. 

// Defining the type alias for the User object
type User = {
    id: string;
    name: string;
};

// Defining the user object using the User type alias
let user: User = { id: "101", name: "rajun" };
console.log(user);
//The Record utility type creates an object. 
//We need to define the object's keys using the Record utility type, and it also takes the type and defines the object key with that type of object.


//example
type Employee = {
    id: string;
    experience: number;
    emp_name: string;
 };
 
 let new_Employee: Record<"Emp1" | "Emp2", Employee> = {
    Emp1: {
       id: "123243yd",
       experience: 4,
       emp_name: "Shubham",
    },
    Emp2: {
       id: "2434ggfdg",
       experience: 2,
       emp_name: "John",
    },
 };
 
 console.log(new_Employee.Emp1.emp_name);
 console.log(new_Employee.Emp2.emp_name);
//In this type of enum, members of an enum are assigned numeric values. 
//Numeric enums possess an auto-increment nature


/*
//Example 1: Default numeric enums
//By default, enums in TypeScript are numeric
//. The first member is assigned a value of 0, and subsequent members are incremented by 1.

enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
}
console.log(Weekday.Monday);
console.log(Weekday.Tuesday);
console.log(Weekday.Wednesday);
console.log(Weekday.Thursday);
console.log(Weekday.Friday);
*/


/*
//Example 2: Initiated numeric enums
//We have initialized the first member and left other members for auto increment.
enum Color{
    Red = 10,
    Yellow,
    Green,
  }
  //print const variables values
  console.log(Color.Red);
  console.log(Color.Yellow);
  console.log(Color.Green);
*/


//Example 3: Fully initialized numeric enums
//we have initialized all member of the enum HttpStatus.
enum HttpStatus {
    Success = 200,
    NotFound = 404,
    InternalServerError = 500,
  }
  console.log(HttpStatus.Success);
  console.log(HttpStatus.NotFound);
  console.log(HttpStatus.InternalServerError);


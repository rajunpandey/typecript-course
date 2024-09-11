/*
var grade: string = 'B';
switch (grade) {
    case 'A': {
        console.log("Excellent");
        break;
    }
    case 'B': {
        console.log("Good");
        break;
    }
    case 'C': {
        console.log("Fair");
        break;
    }
    default: console.log("Unknown grade");
}

*/

//Example: Without break statement
var grade: string = 'A';
console.log("Entering switch block");
switch(grade) { 
   case "A": { 
      console.log("Excellent"); 
   } 
   case "B": { 
      console.log("Good"); 
   } 
   case "C": {
      console.log("Fair"); 
   } 
   case "D": { 
      console.log("Poor"); 
   }  
   default: { 
      console.log("Invalid choice");          
   } 
}
console.log("Exiting switch block");
var person = { 
    firstname:"rajun", 
    lastname:"pandey" 
 }; 
 var invokeperson = function(obj: { firstname:string, lastname :string }) { 
    console.log("first name :"+obj.firstname) 
    console.log("last name :"+obj.lastname) 
 } 
 invokeperson(person)
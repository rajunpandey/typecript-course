type User = {
    name: string;
    age: number | null;
    email?: string;
  };
  
  let user1: User = {
    name: "rajun pandey",
    age: null, // Explicitly no age provided
    email: "rajunpandey1234@example.com"
  };
  
  let user2: User = {
    name: "rajun pandey",
    age: 25
    // email is optional and thus can be undefined
  };
  
  console.log(user1); 
  console.log(user2); 
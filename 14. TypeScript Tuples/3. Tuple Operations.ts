var myTuple: [number, string, string, string]; 
myTuple = [10,"Hello","World","typeScript"]; 
console.log("Items before push " + myTuple.length)

myTuple.push(12) // append value to the tuple 
console.log("Items after push " + myTuple.length) 
console.log("Items before pop " + myTuple.length)
 
// removes and returns the last item
console.log(myTuple.pop() + " popped from the tuple") 
console.log("Items after pop " + myTuple.length)
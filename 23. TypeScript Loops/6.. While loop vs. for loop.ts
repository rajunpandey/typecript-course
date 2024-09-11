/*
//Let’s take the example of the following for loop –
for (var i = 0; i < 5; i++){
  console.log(i)
}
//The output is as follows-

0
1
2
3
4
*/

/*

//We can modify the above example code as follows –

var i = 0
for ( ; i < 5; ){
  console.log(i);
  i++;
}

//It will also produce the same output as the above code –

0
1
2
3
4
*/


//In the above example, we omitted the first and third expressions in the for loop. 
//It is similar to the while loop statement.
var i = 0
while(i < 5){
  console.log(i);
  i++;
}
//It will also produce the same output as the above two examples.

0
1
2
3
4

//Notice that a for loop without first and third expressions is similar to the while loop.


//For loops


//declaration of the loop
// var i = 0;

// how many loops
// i<10 ;

// what happens to i, after the execution of the loop
// i++;
for (var i = 0; i < 10; i++) {
  console.log("this is Loop/iteration : " + i);
}

var myArray= ["Richard", "Is a", "Golfer"];

for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

var i = 0;
// use while loop when you don't really know when
// the user wants to break.
while (i < 5) {
  console.log("this loop has run " + i + " times");
  i++;
}
// do while will always run the block ones
// then checks the conditional expression
do {
  number = Math.random();
  console.log(number);
} while (number < 0.5);


//create an object
var my_object = new Object();
//assign the keys with some values
my_object.a = "1";
my_object.b = "2";
my_object.c = "3";

// Loop over the keys in the object my_object
// 
for (var key in my_object) {
  console.log(key);
  console.log(my_object[key]);
}

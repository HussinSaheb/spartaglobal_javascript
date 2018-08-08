# spartaglobal_javascript


## Brendan Eich 1995
Built Js over the weekend,
### ES5
// are comments in JS

```javascript
var a = 5;
```

var : direction to JS
a : identifier
= : is an operation
5 : value

## Debugging starter code
folder for some code that is faulty - we're going to use it to debug and use the tools available to us such as stepping into stepping over and breakpoints


Insert breakpoints at code points to step over to work out problems.
### Data types
#### strings
 are basic data type to store paragraphs, single characters.
```javascript
var myString = "Hello";
```
Operators
concatenation
```javascript
console.log(myString + "Everyone");
```
.length tofind the size of the string

.indexOf("e")returns the index of the character 'e' within the string

.substr(2,4) - returns a substringfrom index 2-4

#### Numbers
```javascript
var myNumber = 5;
```
isFinite(myNumber) =True, as 5 is a finite number
#### Boolean
true and false values.

#### Arrays
arrays are lists that are stored in the format

```javascript
var myArray = [5,6,7,"a","b"];

// properties
// how many items in the array
console.log(myArray.length);

// operators
// set a value in a specific position

myArray[2] = 8;

console.log(myArray);

// join two arrays

console.log(myArray + ["more" , "stuff"]);

// methods
// add another value to the end
myArray.push("I'm at the end");
console.log(myArray);
// remove and return the last element from an array
console.log(myArray.pop());
console.log(myArray);
// reverse an array
myArray.reverse();
console.log(myArray);
```
#### Objects
#### Type Coercion
```javascript
var myString = "5";
var myDecimalString = "2.5";
var myNumber = 3;

// change string to integer
console.log( parseInt(myString) + myNumber );

// change string to decimal ( float )
console.log( parseFloat(myDecimalString) + myNumber );

// change decimal to integer ( remove the point )
console.log( parseInt(myDecimalString) + myNumber );
```
### Function
 ```javascript
 /* ------------------ feedback ------------------

  * don't edit presenting code before you present
  * if you use short variable names that don't make sense comment it out
  * have a stage repository, which you use to present so if you do make changes to code it won't break your presentation code
  * clear variable names, so if you look at it you know exactly what it is

  ------------------ feedback end ------------------ */

 // Richards demo - something you should never use.
 var num1 = 5;
 var operator = "+";
 var num2 = 10;

 console.log(eval(num1 + operator + num2));

 // ------------------ FUNCTIONS INTRO ------------------

 /*
 - DRY
   D - don't
   R - repeat
   Y - yourself

 declaration    name      parameters  block-list of instructions
 function    addNumbers    ()         {}

 name              decleration  parameters  block-list of instructions
 var addNumbers2 = function      ()          {}
 This is used to add the result of the function to a variable from the start

 2 functions above are the same
 */

 var results = 5 + 10;
 var results2 = 1 + 2;

 console.log(results);

 // Declaring Function
 // name function
 console.log("------ functions ------");
 function  addNumbers(){
   var function_results = 5 + 10;
   console.log(function_results);
 }
 // un-named function
 var addNumbers2 = function(){
   var function_results2 = 5 + 11;
   console.log(function_results2);
 }

 // using the functions
 addNumbers();
 addNumbers2();

 // hoisting
 /*
 when a function is called before it is declaired, it will find the function bring it to the top and run the function even if it's at the bottom
 */
 console.log("------ hoisting ------");

 makeNoise();

 function makeNoise(){
   console.log("how annoying - we will never use these in our games")
 }

 //function parameters
 /*
 use this to specify what values you want to run through the function
 */
 console.log("------ function parameters ------");

 function addNumbersTogether(number1, number2){
   var results = number1 + number2;
   console.log(results);
 }

 addNumbersTogether(1,5);
 addNumbersTogether(10,5);

 //returns in Functions
 /*
 when you pass a value you get an output (without console.log or alert)
 give the value of the function to the variable that asked for it

 after return anything you have underneath (within a loop/function) will not be executed
 works like break but returns a value when stopping the function/loop
 */
 console.log("------ return in functions ------");

 function addNumberWithReturn(number1, number2){
   var result = number1 + number2;
   return result;
 }

 var answer1 = addNumberWithReturn(1,3);

 var answer = addNumberWithReturn(addNumberWithReturn(5,7),addNumberWithReturn(addNumberWithReturn(2,10),2));
 // answer should be 26
 console.log(answer);

 // conrtol flow by Anthony
 console.log("------ control flow ------");
```
### control flow


```javascript
 /*
 for an if statement the statement inside the parentheses has to have a true or false argument

 we will make the sentence : "if the money in pocket less than £10 go home otherwise we get a drink" into code
 with the code bellow 20 is > 10 so it will run the code inside the if statement
 if money_in_my_pocket is between 10 and 5 it will run the code inside else if money_in_my_pocket > 5 section
 if money_in_my_pocket is < 10 it will execute the code inside else
 */
 var money_in_my_pocket = parseFloat(prompt("How much money do you have?"));
 if(money_in_my_pocket > 10){
   console.log("Another drink please!");
 }else if(money_in_my_pocket > 5){
   console.log("Just crisps then");
 }else{
   console.log("I'm off Home");
 }

 // comparison operators

 /*
 10 > 5               will be true
 false == !true       will be true
 1 < 3                will be true
 1 != 1               will be false
 10 <= 10             will be true
 10 >= 10             will be true
 //"a" < "b"            will be true -- reason is that A and B have a position in the alphabet it will check their position and show true and a is lower than b
 "z" > "c"            will be true
 true && true         will be true
 true && false        will be false
 5>10 && 3<5          will be false
 true || true         will be true
 true || false        will be true
 false || !true       will be false

 implementing it in code:
 when you have more than £10 and drank less than 3 drinks.
 when you have more than £5 or the crisps cost £0, also if you had more than 2 drinks and have more than £5 or crisps cost £0.
 */

 console.log("------ comparison practice ------");

 var money_in_my_pocket = parseFloat(prompt("How much money do you have?"));
 var drinks_drink = parseFloat(prompt("How many have you had already?"));
 var price_of_crisp = parseFloat(prompt("HOw much are those crisps"));

 if(money_in_my_pocket > 10 && drinks_drink < 3){
   console.log("Another drink please!");
 }else if(money_in_my_pocket > 5 || price_of_crisp == 0){
   console.log("Just crisps then");
 }else{
   console.log("I'm off Home");
 }

 /*
 switch statements

 if version of switch statements
 */

 console.log("------ switch statements ------");

 var name = "tim";

 if(name == "bob"){
   console.log("hi bob");
 }else if (name == "tim"){
   console.log("hi tim");
 }else if (name == "steve"){
   console.log("hi steve");
 }

 /*
 switch version

 switch uses strict comparison ===
 */

 switch (name) {
   case "bob":
     console.log("hi bob");
     break;
   case "tim":
     console.log("hi tim");
     break;
   case "steve":
     console.log("hi steve");
     break;
   default:
     console.log("hi default person");
 }
 ```
 ### Truthy / Falsy

 ```javascript

// truthy and falsy
//truthy when its a positive integer
// truthy is also when its a negative integer

var money_left = 5;
// is falsy
var money_left = 0;

if (money_left) {
  console.log("Great i have money left");
}else{
  console.log("I'm broke");
}
// is truthy
// var money_left = "Richard";
// is falsy
// var money_left = "";
// bang is a logical inverse
// !0; // false
// to work out if something is true or false
// we can use the double !! to inverse the inverse
// !!"" // True
// !!"string" // true
// !!-7 // True
// !![] // true
// !!{} // True
// !!null // false
// !! undefined // false
// true  || false // returns true
// "" || "Hello" // returns "Hello" as that is True
// 5 || 0 // 5 - 5 is True
// 5 || 6 // 6 - as it is the first
// null || null // null


// we can use a logical or to add a default response to name
var name = prompt("what is your name?") || "Captain no-name";
console.log("this is the name " +name);
```
### loops
```javascript
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


```
### Scope
```javascript
// what is scope?
// what can that bit of code see in terms of the variable or functions


// lexical scope - "Code can see out, but cant see in"
var outsideVariable = 5;
function doSomething() {
  console.log(outsideVariable);
}
doSomething();


// this has an inside variable
function doSomethingElse() {
  var insideVariable = 5;
}
// execute the function
doSomethingElse();
// wont print out the variable
// will return uncaught Error, variable not defined.
console.log(insideVariable);

function firstFunction() {
  console.log("Im in the first function");
}
function secondFunction() {
  firstFunction();
  console.log("Im in second function");
}

secondFunction();


//nested functions
function joinStringsAndPrint(sting1, string2) {
  var newString = string1 + string2;

  function printString(string) {
      console.log(string);
  };

  printString(newString);
  return newString;
};

// cant use printString
// because we cant see in
var string1 = "Hello, ";
var string2 = "World"
// make a call to the main function
joinStringsAndPrint(string1,string2);
// we can also add it to a variable as it has a return value;
var result = joinStringsAndPrint(string1,string2);
```
### closures
```javascript
// //Passing function tas variables
// function SayHellow() {
//   console.log("Hello");
// }
// // when we recieve the sayHello, it'll run the new function as an argument
// function funcCaller(functionToRun) {
//   functionToRun();
// }
// //the function name say Hello is being pased to the other function
// funcCaller(sayHello);


// Declaring a function
// function onTimerComplete() {
//   console.log("Timer Finished");
// }
// setTimeout(onTimerComplete, 3000);


//counter
// creating a function that passes a function as a return
function createCounter() {
  var total = 0;

  return function(){
    total++;
    return total;
  }
}
// save the return to counter
var counter = createCounter();
// we can then use the newly assigned name
counter();
counter();
counter();
var total = counter();
console.log(total);

// in this case, we have an annonymous function
// that is passed an argument of i
//()(argumentToPass)  -> is similar to function(argumentToPass)
for (var i = 0; i < 10; i++) {
  setTimeout((function(j){
    console.log(j);
  })(i), (i * 1000));
};

```

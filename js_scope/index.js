// what is scope?
// what can that bit of code see in terms of the variable or functions


lexical scope - "Code can see out, but cant see in"
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

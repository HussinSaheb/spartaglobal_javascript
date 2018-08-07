var result1 = 5 + 10;
var result2 = 1 + 2;

console.log(result1);

//declaring a function
//Named function
function addNumbers(){
  var function_result= 5 + 10;
  console.log(function_result);
};

// Unnamed function
var addNumbers2 = function(){
  var function_result2 = 5 + 10;
  console.log(function_result2);
};

//Calling the function
addNumbers();
addNumbers2();

//Hoisting
makeNoise();

function makeNoise(){
  alert("How annoying - we will never use these in our game ")
}

function addNumbersTogether(number1, number2){
var result= number1 +number2;
console.log(result);
}
addNumbersTogether(1,5);
addNumbersTogether(1,10);

function addNumbersWithReturn(number1, number2) {
  var result= number1 + number2;
  return result;
}

var answer1 = addNumbersWithReturn(1,3);
debugger;
var answer2 = addNumbersWithReturn(1,9);

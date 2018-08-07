// promt the user to type in values
var number_1 = prompt("please enter number 1");
var operator = prompt("plase provide the operator");
var number_2 = prompt("please enter number 2");

// convert the values recieved from strings to integers
number_1 = parseInt(number_1);
number_2 = parseInt(number_2);


//conditionals for the operators
if (operator == "+"){
console.log(number_1 + number_2);
}else if (operator == "-") {
  console.log(number_1 - number_2);
}else if (operator == "*") {
   console.log(number_1 * number_2);
}else if (operator == "/") {
   console.log(number_1 / number_2);
};

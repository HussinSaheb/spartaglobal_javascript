// promt the user to type in values
var a = prompt("please enter number 1");
var operator = prompt("plase provide the operator");
var b = prompt("please enter number 2");
// convert the values recieved from strings to integers
a = parseInt(a);
b = parseInt(b);


//conditionals for the operators 
if (operator == "+"){
console.log(a + b);
}else if (operator == "-") {
  console.log(a - b);
}else if (operator == "*") {
   console.log(a * b);
}else if (operator == "/") {
   console.log(a / b);
};

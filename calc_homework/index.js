var a = prompt("please enter number 1");
var operator = prompt("plase provide the operator");
var b = prompt("please enter number 2");
  
a = parseInt(a);
b = parseInt(b);

if (operator == "+"){
console.log(a + b);
}else if (operator == "-") {
  console.log(a - b);
}else if (operator == "*") {
   console.log(a * b);
}else if (operator == "/") {
   console.log(a / b);
}

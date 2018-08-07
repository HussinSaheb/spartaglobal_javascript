// var money_in_my_pocket = parseFloat(prompt("How much money do you have?"));
// var drinks_drunk= parseFloat(prompt("How many have you had already?"));
// var price_of_crisp= parseFloat(prompt("How much are those crisps"));
//
// if (money_in_my_pocket > 10 && drinkks_drunk < 3) {
//   console.log("Another Drink Please!");
// }else if (money_in_my_pocket > 5 || price_of_crisp == 0) {
//   console.log("Just crisps then");
// }else{
//   console.log("I'm off Home");
// }
var name = "tim";
if (name === "bob") {
  console.log("HiHO, Bob!");
}else if (name === "tim") {
  console.log("Heya, Tim!");
}else if (name === "steve") {
  console.log("Hi, Steve");
}


// Switch verison
switch (name) {
  case "bob":
    console.log("HiHO, Bob CASE!");
    break;
  case "tim":
    console.log("Heya, Tim CASE!");
    break;
  case "steve":
    console.log("Hi, Steve CASE");
    break;
  default:
    console.log("Hejsan, Stranger! ");
}

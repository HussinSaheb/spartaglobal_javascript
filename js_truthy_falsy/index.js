
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

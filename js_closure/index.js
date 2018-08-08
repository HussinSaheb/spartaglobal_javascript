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

// event listenr on the dom, to wait for html to DOMContentLoaded
//then run the js
document.addEventListener("DOMContentLoaded", function(){

  myButton.addEventListener("click", handleClick)



  //handleClick function
  function handleClick() {
    console.log("button was clicked");
  }

  //access the myForm
  var myForm = document.getElementById("myForm");
  // myForm.addEventListener("submit", function(event){
  //   // prevents the default event methods.
  //   event.preventDefault();
  //   console.log(event);
  // });
  myForm.addEventListener("submit", function(){
    event.preventDefault();
    var firstnameField = document.getElementById("firstname");
    // if the firstname value is empty
    if (!firstnameField.value) {
      // log the firstname
      console.log(firstnameField);
      //change the background color of the input to orange
      firstnameField.style.backgroundColor = "orange" ;
    }else{
      // if there is a value, add it to name variable
      name = firstnameField.value;
      // change the backgroundColor to green
      firstnameField.style.backgroundColor = "green" ;
      console.log(name);
    }
  });

var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
// events get triggered upwards in the dom.
div1.addEventListener("click", function(event){
  // stops it from going up the tree.   
  event.stopPropagation();
  console.log("div1 was clicked");
})
// true flag allows it to trigger top down
div2.addEventListener("click", function(event){
  event.stopPropagation();
  console.log("div2 was clicked");
})
// instead of the default from the bottom up
div3.addEventListener("click", function(event){
  event.stopPropagation();
  console.log("div3 was clicked");
})

});

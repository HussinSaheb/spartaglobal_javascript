
var chosen = false;
//loop if the user hasnt chosen a calculator to ask them to chose one
while(!chosen){
  //prompt the user for the type of calculator they'd like to use
  var choice = prompt("Please chose the mode you'd like to access\n" + "a - Advanced\n"+ "b - Basic\n" + "i - BMI\n" + "t - Trip\n");
  // switch on the choice
  // setting the choice to Lowercase
  // to make the imput be correct no matter if user
  // uses uppercase or lowercase letters
  switch (choice.toLowerCase()) {
    // if A, is chosen then
    // Advanced Calculator
    case "a":
       advancedCalc();
    break;
    // Basic Calculator
    case "b":
       basicCalc();
    break;
    // BMI Calculator
    case "i":
      bmiCalc();
    break;
    // Trip Calculator
    case "t":
      tripCalc();
    break;
    default:
    alert(choice +" isnt a valid entry")
 }
}
// custom function to crete prompts, with first argument being the amount of prompts to create
// the msg_1,msg_2,msg_3,msg_4 parameters are there with a default string value for msg1 and msg2
// this is can be overwritten by passing new arguments when the function is called elsewhere.
function prompt_for_values(amount_of_prompts,msg_1= "please enter first number",msg_2 = "please enter second number",msg_3 = "",msg_4="" ) {
    //create the variables to stope the prompts return value
  var first_number,second_number,third_number,fourth_number;
  if (amount_of_prompts = 1) {
    first_number = parseFloat(prompt(msg_1));
    return first_number
  }
  else if (amount_of_prompts == 2) {
     first_number = parseFloat(prompt(msg_1));
     second_number = parseFloat(prompt(msg_2));
    // return the value as an array
    return [first_number, second_number];
  }else if (amount_of_prompts ==4 ) {
    // assign the values of the prompt to  msg1-4
     first_number = parseFloat(prompt(msg_1));
     second_number = parseFloat(prompt(msg_2));
     third_number = parseFloat(prompt(msg_3));
     fourth_number = parseFloat(prompt(msg_4));
     // return the values as an array
    return [first_number, second_number,third_number,fourth_number];
  }
}

//Function to do basic oprations
function basicCalc(){
  //prompt to chose what operator to use
  var operator =  parseInt(prompt("please chose your operation \n" + "1 - Addition (+)\n" +" 2 - Subtraction (-)\n"+" 3 - Mulitplication (*) Root\n"+" 4 - Division (/)\n" ));
  // use our function with 2 prompts, and default messages for 2 values
  // save the returned value_array
  var value_array = prompt_for_values(2);
  //assign the returned value_array values from index 0 and 1 into the numbers to use
  number_1 = value_array[0];
  number_2 = value_array[1];
  // switch on the operator
  switch (operator) {
    //if operator is 1= +,
    case 1:
    // then preform the addition and return the value as an alert
      return alert("The addition of numbers: " +number_1 + " + " +  number_2+ " = " + (number_1+number_2));
      break;
    // if operator is 2 = -
    case 2:
    // then preform the addition and return the value as an alert
      return alert("The subtraction of numbers: " +number_1 + " - " + number_2+ " = "+ (number_1-number_2));
      break;
    // if operator is 3 = *
    case 3:
    // then preform the addition and return the value as an alert
      return alert("The mulitplication of numbers: " +number_1 + " * " + number_2  +" = "+ (number_1*number_2));
      break;
    // if operator is 4 = /
    case 4:
    // then preform the addition and return the value as an alert
      return alert("The division of numbers: -:" +number_1 + " / " + number_2 +" = "+ (number_1/number_2));
      break;
    default:
  }
}
// function to do more Advanced operations
function advancedCalc() {
  var type =  parseInt(prompt("please chose \n" + "1 - Power\n" +" 2- Square Root\n" ));
  if (type==1) {
    var value_array = prompt_for_values(2);
    number_1 = value_array[0];
    number_2 = value_array[1];
    return alert(Math.pow(number_1, number_2));
  }else if (type==2) {
    return alert(Math.sqrt(prompt_for_values(1)));
  }
}
// function to calculate the BMI
function bmiCalc() {
  //prompt whether user wants to use the imperial or metric system
  var type =  parseInt(prompt("please chose your operation \n" + "1 - Imperial (lb)\n" +" 2 - Metric (kg)"));
  // save the value in our value_array
  var value_array = prompt_for_values(2,"please enter your weight","please enter your height" )
  var weight = value_array[0];
  var height = value_array[1];
  // conditional if the type is imperial
  if (type == 1) {
    // we carry out the imperial formula for BMI calculation
    return alert("Your BMI is :" + (weight / Math.pow(height,2) * 703).toFixed(2));
    // conditional if the type is metric
  }else if(type == 2 ){
    //we carry our the metric formula
    return alert("Your BMI is : " + (weight / Math.pow(height,2).toFixed(2)).toFixed(2));
  }

}
//function to calculate the trip
function tripCalc() {
  //send a message to ask the user to have the values ready
  alert("Please prepare the following information\n" + "distance\n"+ "fuel efficiency (mpg)\n" + "cost per gallon\n" + "speed\n");
  // use the fuction to prompt the user to provide the details required
  var value_array =  prompt_for_values(4,"please enter your distance(miles)","please enter your miles per gallon (mpg)","please enter your cost per gallon(£/gallon)","please enter your speed(mph)")
  // assign the return value of the prompt from the value_array to each individual variable
  var distance = value_array[0];
  var miles_per_gallon = value_array[1];
  var cost_per_gallon = value_array[2];
  var speed = value_array[3];
  // to account for the loss on miles_per_gallon past 60 mph
  // for each mph past 60, we lose 2 miles_per_gallon. so modulus 60,returns remainder of 60.
  // mulitply the return by 2 to get the actual miles_per_gallon
  var price;
  if (speed > 60) {
    var reduced_mpg =  miles_per_gallon - ((speed % 60) * 2);
    //stopping the reduction at 15mpg, as that seems to be the worst
    // mpg rating of any car.
    if (reduced_mpg < 15 ) {
      reduced_mpg = 15;
    }
    //divide this new miles_per_gallon by the distance to find the actual gallons needed
    // then mulitply the return of the final calculation by the cost_per_galon
    price = (distance/reduced_mpg) * cost_per_gallon;
  } else{
    // if the speed is less than 60 or equal to 60
    //then do the usual price. of
    price = (distance/miles_per_gallon) * cost_per_gallon;
  }
  // divide the distance by speed which returns hours
  // .toFixed(2) is to trunkate the decimals to 2 only.
  var duration = (distance/speed).toFixed(2);
  alert("Your trip will take "+ duration + "hours and cost £" + price.toFixed(2)) ;
}

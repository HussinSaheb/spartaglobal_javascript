
var chosen = false;
while(!chosen){
  var choice = prompt("Please chose the mode you'd like to access\n" + "a - Advanced\n"+ "b - Basic\n" + "i - BMI\n" + "t - Trip\n");

  switch (choice) {
    case "a":
       advancedCalc();
       chosen = true;
    break;
    case "b":
       basicCalc();
       chosen = true;
    break;
    case "i":
      bmiCalc();
      chosen = true;
    break;
    case "t":
      tripCalc();
      chosen = true;
    break;
    default:
    chosen = false;
 }
}
function prompt_2_numbers() {
  var first_number = parseFloat(prompt("please enter first number"));
  var second_number = parseFloat(prompt("please enter second number"));
  return [first_number, second_number];
}

function advancedCalc() {
  var type =  parseInt(prompt("please chose \n" + "1 - Power\n" +" 2- Square Root\n" ));
  var array = prompt_2_numbers();
  number_1 = array[0];
  number_2 = array[1];
  if (type==1) {
    return alert(Math.pow(number_1, number_2));
  }else if (type==2) {
    return alert(Math.sqrt(number_1, number_2));
  }
}

function basicCalc(){
  var type =  parseInt(prompt("please chose your operation \n" + "1 - Addition (+)\n" +" 2 - Subtraction (-)\n"+" 3 - Mulitplication (*) Root\n"+" 4 - Division (/)\n" ));
  var array = prompt_2_numbers();
  number_1 = array[0];
  number_2 = array[1];
  switch (type) {
    case 1:
      return alert("The addition of numbers: Number 1:" +number_1 + " + " + "Number 2:"+ number_2+ " = " + (number_1+number_2));
      break;
    case 2:
      return alert("The subtraction of numbers: Number 1:" +number_1 + " - " + "Number 2:"+ number_2+ " = "+ (number_1-number_2));
      break;
    case 3:
      return alert("The mulitplication of numbers: Number 1:" +number_1 + " * " + "Number 2:" + number_2  +" = "+ (number_1*number_2));
      break;
    case 4:
      return alert("The division of numbers: Number 1 -:" +number_1 + " / " + "Number 2 -:"+ number_2 +" = "+ (number_1/number_2));
      break;
    default:
  }
}

function bmiCalc() {
  var type =  parseInt(prompt("please chose your operation \n" + "1 - Imperial (lb)\n" +" 2 - Metric (kg)"));
  var weight;
  var height;
  if (type == 1) {
    weight = parseFloat(prompt("please enter your weight(lb)"));
    height = parseFloat(prompt("please enter your height (in)"));
    return alert("Your BMI is :" + weight / Math.pow(height,2) * 703);
  }else if(type == 2 ){
    weight = parseFloat(prompt("please enter your weight(KG)"));
    height = parseFloat(prompt("please enter your height (M)"));
    return alert("Your BMI is : " +weight / Math.pow(height,2));
  }

}
function tripCalc() {
   alert("Please prepare the following information\n" + "distance\n"+ "fuel efficiency (mpg)\n" + "cost per gallon\n" + "speed\n");
  var distance, miles_per_gallon,cost_per_litre,speed;
  distance = parseFloat(prompt("please enter your distance(miles)"));
  miles_per_gallon = parseFloat(prompt("please enter your miles per gallon (mpg)"));
  cost_per_gallon = parseFloat(prompt("please enter your cost per gallon(£/gallon)"));
  speed = parseFloat(prompt("please enter your speed(mph)"));

  console.log(distance);
  console.log(miles_per_gallon);
  console.log(cost_per_litre);
  var price = (distance/( miles_per_gallon - (speed %60) * 2)) * cost_per_gallon;
  var duration = (distance/speed).toFixed(2);
  alert("Your trip will take "+ duration + "hours and cost £" + price.toFixed(2)) ;
}

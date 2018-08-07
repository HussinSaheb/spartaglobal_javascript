// 1. Write a function called 'multiply' that multiplies two numbers and returns the result
function multiply (number1, number2) {
  return number1 * number2;
}

// 2. Write a function called 'addThree' that adds three numbers together and returns the result
function addThree(number1,number2,number3) {
  return number1+number2+number3;
}
// 3. Write a function called 'smallestNumber' that returns the smaller of 2 numbers
function smallestNumber(number1,number2) {
  return Math.min(number1,number2);
}
// 4. Write a function called 'maxOfThree' that returns the largest of 3 numbers
function maxOfThree(number1,number2, number3) {
  return Math.max(number1,number2,number3);
}
// 5. Write a function called 'reverseString' that returns the reverse a string
function reverseString(string) {
  return string.split("").reverse().join("");
}
// 6. Write a function called 'disemvowel' that returns the vowels from the string parameter
function disemvowel(string) {
  return string.replace(/[aeiou]/ig,'');
}
// 7. Write a function called 'removeOdd' that removes all ODD number from an array
function removeOdd(array){
    for (var i = 0; i < array.length; i++) {
      if ((array[i] % 2) == 1) {
        array.splice(i,1);
        i = i-1;
      }
    }
    return array
}
// 8. Write a function called 'removeEven' that removes all EVEN number from an array
function removeEven(array){
    for (var i = 0; i < array.length; i++) {
      if ((array[i] % 2) == 0) {
        array.splice(i,1);
        i = i-1;
      }
    }
    return array
}
// 9. Write a function called 'longestString' that takes an array of strings and returns the string with the longest character length
function longestString(array){
  for (var i = 0; i < array.length; i++) {
    var temp = 0;
    var tempString="";
    if (array[i].length > temp) {
      temp = array[i].length;
      tempString = array[i];
    }
  }
  return tempString;
}
// 10. Write a function called 'allElementsExceptFirstThree' that discards the first 3 elements of an array,
// e.g. [1, 2, 3, 4, 5, 6] becomes [4, 5, 6]
function allElementsExceptFirstThree(array) {
  return array.slice(3);
}
//#### BONUS ####

// 11. Write a function called 'convertArrayToAnObject' that turns an array (with an even number of elements) into a hash, by
// pairing up elements. e.g. ['a', 'b', 'c', 'd'] becomes
// {'a' => 'b', 'c' => 'd'}
  function convertArrayToAnObject(array) {
    var hash = new Object;
    if ((array.length % 2) == 0) {
      for (var i = 0; i < array.length; i++) {
        if ((i % 2) == 0) {
          hash[array[i]] = array[i+1];
        }
      }
    }

    // var theHash = { ting: 'tang', tung: 'tong' }
    // debugger
    return hash
  }
// 12. Write a function called 'fizzBuzz' that takes any number and returns a value based on these rules
// But for multiples of three print "Fizz" instead of the number
// For the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
function fizzBuzz(number) {
  if ((number % 5) == 0 && (number % 3) == 0) {
   return "FizzBuzz";
  }else if ((number % 5) == 0) {
   return "Buzz";
 }else if ((number % 3) == 0) {
    return "Fizz";
  }else{
return number;
  }
}

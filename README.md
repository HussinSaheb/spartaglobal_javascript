# spartaglobal_javascript

## Brendan Eich 1995
Built Js over the weekend,
### ES5
// are comments in JS

```javascript
var a = 5;
```

var : direction to JS
a : identifier
= : is an operation
5 : value

## Debugging starter code
folder for some code that is faulty - we're going to use it to debug and use the tools available to us such as stepping into stepping over and breakpoints


Insert breakpoints at code points to step over to work out problems.
### Data types
#### strings
 are basic data type to store paragraphs, single characters.
```javascript
var myString = "Hello";
```
Operators
concatenation
```javascript
console.log(myString + "Everyone");
```
.length tofind the size of the string

.indexOf("e")returns the index of the character 'e' within the string

.substr(2,4) - returns a substringfrom index 2-4

#### Numbers
```javascript
var myNumber = 5;
```
isFinite(myNumber) =True, as 5 is a finite number
#### Boolean
true and false values.

#### Arrays
arrays are lists that are stored in the format

```javascript
var myArray = [5,6,7,"a","b"];

// properties
// how many items in the array
console.log(myArray.length);

// operators
// set a value in a specific position

myArray[2] = 8;

console.log(myArray);

// join two arrays

console.log(myArray + ["more" , "stuff"]);

// methods
// add another value to the end
myArray.push("I'm at the end");
console.log(myArray);
// remove and return the last element from an array
console.log(myArray.pop());
console.log(myArray);
// reverse an array
myArray.reverse();
console.log(myArray);
```
#### Objects
#### Type Coercion
```javascript
var myString = "5";
var myDecimalString = "2.5";
var myNumber = 3;

// change string to integer
console.log( parseInt(myString) + myNumber );

// change string to decimal ( float )
console.log( parseFloat(myDecimalString) + myNumber );

// change decimal to integer ( remove the point )
console.log( parseInt(myDecimalString) + myNumber );
```

//declare a new Object
var person = new Object();
// set the key and value of the objects
person.name = "Hussin";
person.age = "24";
person.employed = true;
person.friends = ["Maytham", "Adeel"];

// we can also create methods for the object
person.sayHello = function() {
  console.log("Hello");
}

//logging the object by it reference
console.log(person);
//
// // creating a cunstuctor
// var Person = function(name, age,employed,friend){
//   this.name = "no name";
//   this.age = "no age";
//   this.employed = true;
//   this.friends = "no friends";
//   this.sayHello = function(){
//     console.log("Hi my name is " + this.name);
//   };
// };
//
//
// // create instance of object person
// var person1 = new Person();
// var person2 = new Person();


// creating a cunstuctor
var Person = function(name, age,employed,friend){
  this.name = name;
  this.age = age;
  this.employed = employed || "not specified";
  this.friends = [];
  this.sayHello = function(){
    console.log("Hi my name is " + this.name);
  };
};


// create instance of object person
// with arguments
var person1 = new Person("Hussin",24, true);
var person2 = new Person("Maytham",28, false);
var person3 = new Person();

// calling the method inside the object.
console.log(person1.sayHello());
console.log(person2.sayHello());

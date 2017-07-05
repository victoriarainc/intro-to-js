// Answer the following questions in this file using comments without running the code

// 1.
// What does `givenName` equal right now?
let givenName;
// A: undefined


// 2.
// What is `givenName` set to right now?
givenName = "Tim";
// A: Tim


// 3.
// What is `givenName` set to right now?
givenName = givenName;
// A: Tim


// 4.
// What is `greeting` set to?
let greeting = "Hello, how are you? " + givenName;
// A: Hello, how are you? Tim


// 5.
// What is `math` set to?
let high = 50;
let low  = 10;
let math = high - low;
// A: 40


// 6.
// What is `math` set to?
math = high - "5";
// A: 50 - 5


// 7.
// Create a variable to calculate Tim's age
// The answer should read "Tim is 33 years old"
// The answer shoud not be written in a comment.
let born = 1984;
let today = 2017;
let age = today - born;
console.log("Tim is " + age + " years old");
// A: 33


// 8.
// Adjust this code. Store some information in the following variables.
// A:
let yourName = "Victoria";
let instructorName = "Lexi";


// 9.
// Update the variables `yourName` and `instructorName` so the expression below reads correctly.
// A: *done in number 8*


// This statement should read correctly
let statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;
console.log (statement + ".")

// 10.
// We've created a variable named after each primitive type.
// Use the `=` operator to assign a value to each variable matching the type in the name.
let myNumber = Number;
let myString = String;
let myBoolean = Boolean;
// This one's a little tricky - think carefully about what makes a value "undefined"!
let myUndefined = undefined;
// A:

// For questions 11 - 19: List which boolean value will be stored in each variable. (Remember: `==` does not check data type)

// 11.
let x = (false == 0);
// A. true
console.log (x)


// 12.
let y = (false == "");
// A. true
console.log (y)

// 13.
let z = (0 == "");
// A. true
console.log (z)

// 14.
let a = (null == null);
// A. true
console.log (a)

// 25.
let b = (undefined == undefined);
// A. true
console.log (b)

// 16.
let c = (undefined == null);
// A. true
console.log (c)

// 17.
let d = (null == false);
// A. false
console.log (d)

// 18.
let e = (NaN == null);
// A. false
console.log (e)

// 19.
let f = (NaN == NaN);
// A. false
console.log (f)

// 20.
// Fix the `if...else` statement below by adding an `if` keyword and conditional expression.
// Use the variable `thirsty` as part of your conditional expression.
// A:
let thirsty = true;

if (thirsty = true){
  console.log("I'm parched!");
} else {
  console.log("I've had enough to drink.");
}

// For questions 21 - 29 list which statement will be logged.

// 21.
let g;

if(g){
	console.log("True!");
} else {
	console.log("False!");
}
// A: False!


// 22.
if(""){
	console.log("True!");
} else {
	console.log("False!");
}
// A: False!


// 23.
// this expression will set x to NaN
let h = 1 * undefined;

if(h){
	console.log("True!");
} else {
	console.log("False!");
}
// A: False!


// 24.
if(false){
	console.log("True!");
} else {
	console.log("False!");
}
// A:True!


// 25.
if(-5 && 5){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True!


// 26.
if("Hello World!"){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True!


// 27.
if({}){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True!


// 28.
if({name: "Yehuda Katz"}){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True!


// 29.
if(new Date()){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True!


// 30.
// Link this file to the sibling `index.html` document, open the file in your browser and make sure there are no errors in your console.

// Boolean
var isDone = false;
//Number
var decimal = 9;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// String
var color = "blue";
color = 'red';
var fullName = "Eunsang Jeon";
var age = 30;
var sentence = "Hello, my name is " + fullName + "\n";
var sentenceTwo = "I'will be " + (age + 1) + " years old next year.";
console.log(sentence + sentenceTwo);
//Array
var list = [1, 2, 3];
var listTwo = [4, 5, 6];
//Tuple
var x;
var y;
x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error
console.log(x[0].substring(1)); // OK
// console.log(x[1].substring(1)); // Error, 'number' does not have 'substring'

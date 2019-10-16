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
var listOne = [1, 2, 3];
var listTwo = [4, 5, 6];
//Tuple
var x;
var y;
x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error
console.log(x[0].substring(1)); // OK
// console.log(x[1].substring(1)); // Error, 'number' does not have 'substring'
// x[3] = "world"; // Error, Property '3' does not exist on type '[string, number]'.
// console.log(x[5].toString()); // Error, Property '5' does not exist on type '[string, number]'.
//Enum
var ColorOne;
(function (ColorOne) {
    ColorOne[ColorOne["Red"] = 0] = "Red";
    ColorOne[ColorOne["Green"] = 1] = "Green";
    ColorOne[ColorOne["Blue"] = 2] = "Blue";
})(ColorOne || (ColorOne = {}));
var colorOne = ColorOne.Green;
console.log(colorOne);
var ColorTwo;
(function (ColorTwo) {
    ColorTwo[ColorTwo["Red"] = 1] = "Red";
    ColorTwo[ColorTwo["Green"] = 2] = "Green";
    ColorTwo[ColorTwo["Blue"] = 3] = "Blue";
})(ColorTwo || (ColorTwo = {}));
var colorTwo = ColorTwo.Green;
console.log(colorTwo);
var ColorThree;
(function (ColorThree) {
    ColorThree[ColorThree["Red"] = 3] = "Red";
    ColorThree[ColorThree["Green"] = 9] = "Green";
    ColorThree[ColorThree["Blue"] = 27] = "Blue";
})(ColorThree || (ColorThree = {}));
var colorThree = ColorThree.Green;
console.log(colorThree);
// let colorName: string = ColorThree[2]; // Error. It is undefined.
var colorName = ColorThree[9];
console.log(colorName);
//Any
var notSure = 4;
var list = [1, true, "free"];
//Void
function warnUser() {
    console.log("This is my warning message");
}
var unusable = undefined;
// unusable = null; // OK if `--strictNullChecks` is not given
//Null and Undefined
var u = undefined;
var n = null;
//Never
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop() {
    while (true) {
    }
}
// Object
function create(o) {
    console.log("OK");
}
;
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
// Type assertions
var someValue = "this is a string";
var strLength = someValue.length;
someValue = "this is a string";
strLength = someValue.length;
// Just Curious
var doubleNum = 1.234;
console.log(doubleNum);

// First Interface

//function printLabel(labeledObj: { label: string }) {
//	console.log(labeledObj.label);
//}
//
//let myObj = { size: 10, label: "size 10 Object"};
//printLabel(myObj);

// First Interface with an Inteface (LOL)

interface LabeledValue {
	label: string;
}

function printLabel(labeledObj: LabeledValue) {
	console.log(labeledObj.label);
}

let myObj = { size: 10, label: "size 10 object"};
printLabel(myObj);

// Opstional Properties

interface SquareConfig {
	color?: string;
	width?: number;
}

function createSquare(config: SquareConfig): {color: string, area: number} {
	let newSquare = {color: "white", area: 100};
	if(config.color) {
		newSquare.color = config.color;
	}

	if(config.width){
		newSquare.area = config.width * config.width;
	}
	return newSquare;
}

let mySquare = createSquare({color: "Blue"});
console.log(mySquare);

// Readonly properties

interface Point {
	readonly x: number;
	readonly y: number;
}

let p1: Point = {x: 10, y: 20};
// p1.x = 5; // error!

let array1: number[] = [1, 2, 3, 4];
let ro1: ReadonlyArray<number> = array1;
// ro1[0] = 12; //error
// ro1.push(4); //error
// ro1.length = 100 //error
// array1 = ro1//error
array1 = ro1 as number[];//NOT RECOMMENDED!!
// const con1: array1; // you cannot do like this with const

// Excess Property checks

interface SquareConfigEx1 {
	color?: string;
	width?: number;
}

function createSquareEx1 (config: SquareConfigEx1): {color: string, area: number} {
	let newSquare = {color: "white", area: 100};
	if(config.color) {
		newSquare.color = config.color;
	}

	if(config.width){
		newSquare.area = config.width * config.width;
	}
	return newSquare;
}

// let mySquaredEx1 = createSquareEx1({ colour: "red", width: 100});
// error: Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'. Did you mean to write 'color'?

let mySquareEx1 = createSquareEx1({ colour: "red", width: 100 } as SquareConfigEx1);
// above works but is not recommended

console.log(mySquareEx1);

// right ways to do is like below:

interface SquareConfigEx2 {
	color?: string;
	width?: number;
	[propName: string]: any;
}

function createSquareEx2 (config: SquareConfigEx2): {color: string, area: number} {
	let newSquare = {color: "white", area: 100};
	if(config.color) {
		newSquare.color = config.color;
	}

	if(config.width){
		newSquare.area = config.width * config.width;
	}
	return newSquare;
}

let mySquareEx2 = createSquareEx2({colour: "red", width: 20});

console.log(mySquareEx2);

let parameterEx1 = {
	colour: 'grey',
	width: 33
}

let mySquareEx3 = createSquareEx1(parameterEx1);
console.log(mySquareEx3);

// Function Interfaces

interface SearchFunc1 {
	(source: string, subString: string): boolean;
}

let mySearch1: SearchFunc1;
mySearch1 = function(source: string, subString: string){
	let result = source.search(subString);
	return result > -1;
}
let mySearch2: SearchFunc1;
mySearch2 = function(src: string, sub: string): boolean {
	    let result = src.search(sub);
	    return result > -1;
}
let mySearch3: SearchFunc1;
mySearch3 = function(src, sub) {
	    let result = src.search(sub);
	    return result > -1;
}

// Indexable Types

interface StringArray1 {
	[index: number]: string;
}

let myArray1: StringArray1;
myArray1 = ["Jessie", "Heisenberg"];
let myStr1: string = myArray1[1];
console.log(myStr1);

interface NumberDictionary {
	[index: string]: number;
	length: number;
	// name: string; this cannot be. all the properties' return type should be same.
}

interface NumberOrStringDictionary {
	[index: string]: number | string;
	length: number;
	name: string;
}

let NumDict: NumberOrStringDictionary = {length: 1, name: "numbers"};
NumDict["One"] = 1;
console.log(NumDict);
NumDict["Two"] = 2;
console.log(NumDict);
console.log(NumDict["One"]);

// readonly in order to prevent assignment to their indices

interface ReadonlyStringArray {
	readonly [index: number]: string;
}

let myArray2: ReadonlyStringArray = ["Alice", "Bob"];
// myArray2[2] = "Clair"; // error

//CLASSES and INTERFACES- CLASSIC 

interface ClockInterface {
	currentTime: Date;
	setTime(d: Date): void;
}

class Clock implements ClockInterface {
	currentTime: Date = new Date();
	setTime(d: Date) {
		this.currentTime = d;
	}
	constructor(h: number, m: number) {}
}

// Extending Interfaces

interface Shape {
	color: string;
}

interface Square extends Shape {
	sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;


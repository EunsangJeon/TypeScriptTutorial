// Boolean
let isDone: boolean = false;

//Number
let decimal: number = 9;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let color: string = "blue";
color = 'red';
let fullName: string = `Eunsang Jeon`;
let age: number = 30;
let sentence: string = `Hello, my name is ${ fullName }\n`;
let sentenceTwo: string = "I'will be " + (age + 1) + " years old next year.";
console.log(sentence + sentenceTwo);

//Array
let listOne: number[] = [1, 2, 3];
let listTwo: Array<number> = [4, 5, 6];

//Tuple
let x: [string, number];
let y: [string, number, number];
x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error
console.log(x[0].substring(1)); // OK
// console.log(x[1].substring(1)); // Error, 'number' does not have 'substring'
// x[3] = "world"; // Error, Property '3' does not exist on type '[string, number]'.
// console.log(x[5].toString()); // Error, Property '5' does not exist on type '[string, number]'.

//Enum
enum ColorOne {Red, Green, Blue}
let colorOne: ColorOne = ColorOne.Green;
console.log(colorOne);
enum ColorTwo {Red = 1, Green, Blue}
let colorTwo: ColorTwo = ColorTwo.Green;
console.log(colorTwo);
enum ColorThree {Red = 3, Green = 9, Blue = 27}
let colorThree: ColorThree = ColorThree.Green;
console.log(colorThree);
// let colorName: string = ColorThree[2]; // Error. It is undefined.
let colorName: string = ColorThree[9];
console.log(colorName);

//Any
let notSure: any = 4;
let list: any[] = [1, true, "free"];

//Void
function warnUser(): void {
    console.log("This is my warning message");
}
let unusable: void = undefined;
// unusable = null; // OK if `--strictNullChecks` is not given

//Null and Undefined
let u: undefined = undefined;
let n: null = null;

//Never
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}

// Object
declare function create(o: object | null): void;
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

// Type assertions
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
someValue = "this is a string";
strLength = (someValue as string).length;


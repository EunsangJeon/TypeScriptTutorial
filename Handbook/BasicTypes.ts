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
let list: number[] = [1, 2, 3];
let listTwo: Array<number> = [4, 5, 6];

//Tuple
let x: [string, number];
let y: [string, number, number];
x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error
console.log(x[0].substring(1)); // OK
// console.log(x[1].substring(1)); // Error, 'number' does not have 'substring'

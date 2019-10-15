// Array destructing

let input: number[] = [1, 2];
let [first, second] = input;
console.log(first); // 1
console.log(second); // 2

[first, second] = [second, first];
console.log(first); // 2
console.log(second); // 1

function f([first, second]: [number, number]){
	console.log(first);
	console.log(second);
}
f([3,4]);

let [one, ...rest] = [1, 3, 5, 7];
console.log(one);
console.log(rest);

let [en] = [1, 2, 3, 4];
console.log(en);

let [, zwei, , vier] = [1, 2, 3, 4];
console.log(zwei);
console.log(vier);

// Tuple destructing

let tupleSample: [number, string, boolean] = [7, "hello", true];
console.log(tupleSample);
let [a, b, c] = tupleSample;
// let [a, b, c, d] = tupleSample; // Error, no element at index 3 
// let [a, ...bc] = tupleSample; // bc: [string, boolean]

// Object desctructing

let objectSample = {
	alpha: "foo",
	beta: 12,
	gamma: "hoo",
};

// let {al, be} = objectSample; // error because name is different.
//let { alpha, b } = objectSample; // OK

let { alpha, ...restObject} = objectSample;
console.log(alpha);
console.log(restObject);
console.log(restObject.beta);

// Property renaming(Object)

let { alpha: newAlpha, beta: newBeta } = objectSample;
console.log(newAlpha);
// Confusingly, the colon here does not indicate the type.
// The type, if you specify it, still needs to be written after the entire destructuring:
// let { a, b }: { a: string, b: number } = o;

// Default values

function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
}

// Spread

let firstArray = [1, 2];
let secondArray = [3, 4];
let bothPlusArray = [0, ...firstArray, ...secondArray, 5];

console.log(bothPlusArray);

let defaultsRestaurantObject = {
	food: "spicy",
	price: "$$",
	ambiance: "noisy"
}

let spreadExampleOne: Object = { ...defaultsRestaurantObject, food: "rich"};
console.log(spreadExampleOne);

let spreadExampleTwo: Object = { food: "rich", ...defaultsRestaurantObject};
console.log(spreadExampleTwo);

//// Basics

function myAdd1(x: number, y: number): number {
	return x + y;
}

let myAdd2 = function(x: number, y: number): number {
	return x + y;
}

let myAdd3: (x: number, y:number) => number = function(x: number, y: number): number {
	return x + y;
}

//// Optional Parameter

function buildName1(firstName: string, lastName?: string){
	if (lastName)
		return firstName + " " + lastName;
	else
		return firstName;
}

console.log(buildName1("Bob"));
// console.log(buildName1("Bob", "Adams", "error")); // error
console.log(buildName1("Bob", "Adams"));

//// Default Parameter

function buildName2(firstName:string, lastName = "Smith") {
	return firstName + " " + lastName;
}

console.log(buildName2("Bob"));
console.log(buildName2("Bob", undefined));
// console.log(buildName2("Bob", "Adams", "error")); // error
console.log(buildName2("Bob", "Adams"));

function buildName3(firstName = "Will", lastName: string) {
	    return firstName + " " + lastName;
}

// console.log(buildName3("Bob")); // error
// console.log(buildName3("Bob", "Adams", "error")); // error
console.log(buildName3("Bob", "Adams"));
console.log(buildName3(undefined, "Adams"));

//// Rest Parameters

function buildName4(firstName: string, ...restOfName: string[]) {
	return firstName + " " + restOfName.join(" ");
}

console.log(buildName4("John", "Paul", "George", "Ringo"));

let buildName5: (fname: string, ...rest: string[]) => string = buildName4;

//// this and arrow functions.

/*

let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
	    createCardPicker: function() {
		            return function() {
				                let pickedCard = Math.floor(Math.random() * 52);
				                let pickedSuit = Math.floor(pickedCard / 13);

				                return {suit: this.suits[pickedSuit], card: pickedCard % 13};
				            }
		        }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

*/

// above will cause error due to 'this'

/*
let deck = {
	suits: ["hearts", "spades", "clubs", "diamonds"],
	cards: Array(52),
	createCardPicker: function() {
	// NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
		return () => {
			let pickedCard = Math.floor(Math.random() * 52);
			let pickedSuit = Math.floor(pickedCard / 13);
			return {suit: this.suits[pickedSuit], card: pickedCard % 13};
		}
	}
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
 */

// above is much better but 'this' is any type not Deck type.

interface Card {
	suit: string;
	card: number;
}

interface Deck {
	suits: string[];
	createCardPicker(this: Deck): () => Card;
}	        

let deck:Deck = {
	suits: ["hearts", "spades", "clubs", "diamonds"],
	createCardPicker: function(this: Deck) {
		return () => {
			let pickedCard = Math.floor(Math.random() * 52);
			let pickedSuit = Math.floor(pickedCard / 13);

			return {suit: this.suits[pickedSuit], card: pickedCard % 13};
		}
	}
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);


//// Basics
function myAdd1(x, y) {
    return x + y;
}
var myAdd2 = function (x, y) {
    return x + y;
};
var myAdd3 = function (x, y) {
    return x + y;
};
//// Optional Parameter
function buildName1(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
console.log(buildName1("Bob"));
// console.log(buildName1("Bob", "Adams", "error")); // error
console.log(buildName1("Bob", "Adams"));
//// Default Parameter
function buildName2(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
console.log(buildName2("Bob"));
console.log(buildName2("Bob", undefined));
// console.log(buildName2("Bob", "Adams", "error")); // error
console.log(buildName2("Bob", "Adams"));
function buildName3(firstName, lastName) {
    if (firstName === void 0) { firstName = "Will"; }
    return firstName + " " + lastName;
}
// console.log(buildName3("Bob")); // error
// console.log(buildName3("Bob", "Adams", "error")); // error
console.log(buildName3("Bob", "Adams"));
console.log(buildName3(undefined, "Adams"));
//// Rest Parameters
function buildName4(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
console.log(buildName4("John", "Paul", "George", "Ringo"));
var buildName5 = buildName4;
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
// Override
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard_1 = Math.floor(Math.random() * x.length);
        return pickedCard_1;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);

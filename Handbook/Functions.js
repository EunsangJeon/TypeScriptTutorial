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

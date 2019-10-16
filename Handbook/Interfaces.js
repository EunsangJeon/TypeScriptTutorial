// First Interface
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = { size: 10, label: "size 10 object" };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "Blue" });
console.log(mySquare);
var p1 = { x: 10, y: 20 };
// p1.x = 5; // error!
var array1 = [1, 2, 3, 4];
var ro1 = array1;
// ro1[0] = 12; //error
// ro1.push(4); //error
// ro1.length = 100 //error
// array1 = ro1//error
array1 = ro1; //NOT RECOMMENDED!!
function createSquareEx1(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
// let mySquaredEx1 = createSquareEx1({ colour: "red", width: 100});
// error: Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'. Did you mean to write 'color'?
var mySquareEx1 = createSquareEx1({ colour: "red", width: 100 });
// above works but is not recommended
console.log(mySquareEx1);
function createSquareEx2(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquareEx2 = createSquareEx2({ colour: "red", width: 20 });
console.log(mySquareEx2);
var parameterEx1 = {
    colour: 'grey',
    width: 33
};
var mySquareEx3 = createSquareEx1(parameterEx1);
console.log(mySquareEx3);
var mySearch1;
mySearch1 = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var mySearch2;
mySearch2 = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var mySearch3;
mySearch3 = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var myArray1;
myArray1 = ["Jessie", "Heisenberg"];
var myStr1 = myArray1[1];
console.log(myStr1);
var NumDict = { length: 1, name: "numbers" };
NumDict["One"] = 1;
console.log(NumDict);
NumDict["Two"] = 2;
console.log(NumDict);
console.log(NumDict["One"]);
var myArray2 = ["Alice", "Bob"];
var Clock = /** @class */ (function () {
    function Clock(h, m) {
        this.currentTime = new Date();
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var square = {};
square.color = "blue";
square.sideLength = 10;

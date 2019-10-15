// Array destructing
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a;
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first); // 1
console.log(second); // 2
_a = [second, first], first = _a[0], second = _a[1];
console.log(first); // 2
console.log(second); // 1
function f(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
f([3, 4]);
var _b = [1, 3, 5, 7], one = _b[0], rest = _b.slice(1);
console.log(one);
console.log(rest);
var en = [1, 2, 3, 4][0];
console.log(en);
var _c = [1, 2, 3, 4], zwei = _c[1], vier = _c[3];
console.log(zwei);
console.log(vier);
// Tuple destructing
var tupleSample = [7, "hello", true];
console.log(tupleSample);
var a = tupleSample[0], b = tupleSample[1], c = tupleSample[2];
// let [a, b, c, d] = tupleSample; // Error, no element at index 3 
// let [a, ...bc] = tupleSample; // bc: [string, boolean]
// Object desctructing
var objectSample = {
    alpha: "foo",
    beta: 12,
    gamma: "hoo"
};
// let {al, be} = objectSample; // error because name is different.
//let { alpha, b } = objectSample; // OK
var alpha = objectSample.alpha, restObject = __rest(objectSample, ["alpha"]);
console.log(alpha);
console.log(restObject);
console.log(restObject.beta);
// Property renaming(Object)
var newAlpha = objectSample.alpha, newBeta = objectSample.beta;
console.log(newAlpha);
// Confusingly, the colon here does not indicate the type.
// The type, if you specify it, still needs to be written after the entire destructuring:
// let { a, b }: { a: string, b: number } = o;
// Default values
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
}
// Spread
var firstArray = [1, 2];
var secondArray = [3, 4];
var bothPlusArray = __spreadArrays([0], firstArray, secondArray, [5]);
console.log(bothPlusArray);
var defaultsRestaurantObject = {
    food: "spicy",
    price: "$$",
    ambiance: "noisy"
};
var spreadExampleOne = __assign(__assign({}, defaultsRestaurantObject), { food: "rich" });
console.log(spreadExampleOne);
var spreadExampleTwo = __assign({ food: "rich" }, defaultsRestaurantObject);
console.log(spreadExampleTwo);

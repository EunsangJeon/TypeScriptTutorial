// Array destructing
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
    a: "foo",
    b: 12,
    c: "hoo"
};
// let {alpha, beta} = objectSample; // error because name is different.
//let { a, b } = objectSample; // OK
var a = objectSample.a, restObject = __rest(objectSample, ["a"]);
console.log(a);
console.log(restObject.b);

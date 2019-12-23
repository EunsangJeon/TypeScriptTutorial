// Generic basic form
function genericBasicFunction(arg) {
    return arg;
}
console.log(genericBasicFunction(33));
console.log(genericBasicFunction("Basic Function"));
// Generic should be "common"
// function loggingIdentity<T>(arg: T): T {
// 	    console.log(arg.length);  // Error: T doesn't have .length
// 	    return arg;
// }
// 
// function loggingIdentity<T>(arg: T[]): T[] {
// 	    console.log(arg.length);  // Array has a .length, so no more error
// 	    return arg;
// }
// 
// function loggingIdentity<T>(arg: Array<T>): Array<T> {
// 	    console.log(arg.length);  // Array has a .length, so no more error
// 	    return arg;
// }
//
// Generic and interfaces
function identity(arg) {
    return arg;
}
var myIdentity1 = identity;
var myIdentity2 = identity;
var myIdentity3 = identity;
var myIdentity4 = identity;
var myIdentity5 = identity;
console.log(myIdentity5(9));
// In addition to generic interfaces, it is also possible to create generic classes.
// It is not possible to create generic enums and namespaces.
var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    return GenericClass;
}());
var myGenericNumber = new GenericClass();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
console.log(myGenericNumber.add(3, 4));

// Generic basic form

function genericBasicFunction<T>(arg: T): T {
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

function identity<T>(arg: T): T {
	return arg;
}

let myIdentity1: <T>(arg: T) => T = identity;
let myIdentity2: <U>(arg: U) => U = identity;
let myIdentity3: {<T>(arg: T): T} = identity;

interface GenericIdentityFn1 {
	<T>(arg: T): T;
}

let myIdentity4: GenericIdentityFn1 = identity;

interface GenericIdentityFn2<T> {
	(arg: T): T;
}

let myIdentity5: GenericIdentityFn2<number> = identity;

console.log(myIdentity5(9));

// In addition to generic interfaces, it is also possible to create generic classes.
// It is not possible to create generic enums and namespaces.

class GenericClass<T> {
	zeroValue: T;
	add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericClass<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y){ return x + y };

console.log(myGenericNumber.add(3,4));

// Well actually, you can instance a class with string as generic 'cause it doesn't conflict to any.

 


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


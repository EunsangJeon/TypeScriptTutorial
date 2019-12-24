const symbol1 = Symbol();
const symbol2 = Symbol("key");
console.log(symbol2);
let obj = {
	[symbol1]: "value"
};
console.log(obj[symbol1]);

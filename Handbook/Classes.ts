//// Classes

class Greeter {
	greeting: string;
	constructor(message: string) {
		this.greeting = message;
	}
	greet() {
		return "Hello, " + this.greeting;
	}
}

let greeting1 = new Greeter("world");
console.log(greeting1.greet());

//// Inheritance

class Animal {
	move(distanceInMeters: number = 0) {
		console.log(`Animal moved ${distanceInMeters}m.`);
	}
}

class Dog extends Animal {
	bark() {
		console.log('Woof! Woof!');
	}
}

const dog1 = new Dog();
dog1.bark();
dog1.move(10);

class AnimalComplex {
	name: string;
	constructor(theName: string) {
		this.name = theName;
	}
	move(distanceInMeters: number = 0){
		console.log(`${this.name} moved ${distanceInMeters}m.`);
	}
}

class Snake extends AnimalComplex {
	constructor(name: string) {
		super(name);
	}
	move(distanceInMeters = 5) {
		console.log("Slithering...");
		super.move(distanceInMeters);
	}
}

class Horse extends AnimalComplex {
	constructor(name: string) {
		super(name);
	}
	move(distanceInMeters = 45) {
		console.log("Galloping...");
		super.move(distanceInMeters);
	}
}

let sam = new Snake("Sammy the Python");
let tom: AnimalComplex = new Horse("Tommy the Palomino");

sam.move();
tom.move(33);

//// Private and Protected

class Animal2 {
	private name: string;
	constructor(theName: string) {
		this.name = theName;
	}
}

let cat1 = new Animal2("Cat");
// cat1.name = "CAT"; // of course it occurs error

class Animal3 {
	    private name: string;
	    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal3 {
	    constructor() { super("Rhino"); }
}

class Employee {
	    private name: string;
	    constructor(theName: string) { this.name = theName; }
}

let animal3 = new Animal3("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal3 = rhino;
// animal3 = employee; // Error: 'Animal' and 'Employee' are not compatible

class Person1{
	protected name: string;
	constructor(name: string) {
		this.name = name;
	}
}

class Employee1 extends Person1 {
	private department: string;

	constructor(name: string, department: string) {
		super(name);
		this.department = department;
	}

	public getElevatorPitch() {
		return `Hello, my name is ${this.name} and I work in ${this.department}`;
	}
}

let howard1 = new Employee1("Howard", "Sales");
console.log(howard1.getElevatorPitch());
// console.log(howard1.name); //error 

class Person2 {
	    protected name: string;
	    protected constructor(theName: string) { this.name = theName; }
}

class Employee2 extends Person2 {
	private department: string;

	constructor(name: string, department: string) {
		            super(name);
		            this.department = department;
	}

	public getElevatorPitch() {
		return `Hello, my name is ${this.name} and I work in ${this.department}.`;
	}
}

let howard2 = new Employee2("Howard", "Sales");
// let john2 = new Person2("John"); // Error: The 'Person' constructor is protected

//// Readonly modifier

class Octopus {
	    readonly name: string;
	    readonly numberOfLegs: number = 8;
	    constructor (theName: string) {
		            this.name = theName;
		        }
}
let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // error! name is readonly.

//// Getter and Setter

//const fullNameMaxLength = 10;
//
//class Employee3 {
//	private  _fullName: string;
//
//	get fullName(): string {
//		return this._fullName;
//	}
//
//	set fullName(newName: string) {	
//		if (newName && newName.length > fullNameMaxLength) {
//			throw new Error("excess of max length for a name")
//		}
//		this._fullName = newName;
//	}
//}
//
//let employee3 = new Employee3();
//employee3.fullName = "Bob Odenkirk";
//if (employee3.fullName) {
//	console.log(employee3.fullName);
//}

//// Static Properties

class Grid {
	static origin = {x: 0, y: 0};
	calculateDistanceFromOrigin(point: {x: number; y: number;}) {
		let xDist = (point.x - Grid.origin.x);
		let yDist = (point.y - Grid.origin.y);
		return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
	}
	constructor (public scale: number) {}
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

//// Abstract Classes

abstract class Department {
	constructor(public name: string) {}

	printName(): void {
		console.log("Department name: " + this.name);
	}

	abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {
	constructor() {
		super("Accounting and Auditing"); // you know we must use super
	}

	printMeeting(): void {
		console.log("Every Monday at 10am");
	}

	generateReport(): void {
		console.log("Generating Report...");
	}
}

let department: Department;
department = new AccountingDepartment();
department.printName();
department.printMeeting();
// department.generateReports(); // error cause it's not in abstract type



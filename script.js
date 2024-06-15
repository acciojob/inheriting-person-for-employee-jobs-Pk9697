// complete this js code
// function Person(name, age) {}

// function Employee(name, age, jobTitle) {}

class Person{
	constructor(name,age){
		this._name=name;
		this._age=age;
	}

	greet(){
		console.log(`Hello, my name is ${this._name} and I am ${this._age} years old.`)
	}
}

class Employee extends Person{
	constructor(name,age,jobTitle){
		super(name,age);
		this._jobTitle=jobTitle;
	}

	jobGreet(){
		console.log(`Hello, my name is ${this._name}, I am ${this._age} years old, and my job title is ${this._jobTitle}.`)
	}
}

// const person=new Person("Alice",25)
// person.greet()
// const employee=new Employee("Bob",30,"Manager")
// employee.jobGreet()
// employee.greet()

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

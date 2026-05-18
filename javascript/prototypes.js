/*
An object-oriented programming language (OOP language) is a
programming language built around the concept of objects.

An object is a bundle of:
Data (called attributes or properties)
Behaviour (called methods or functions)

Object-oriented programming organises and structures source code
differently than procedural programming.
*/

// Procedural programming:

// The numbered comments below are indicators that this is a
// procedural program.

// 1. The data is stored as a standalone variable.
let balance = 1_000;

// 2. Functions (procedures) operate on external state ('balance'
//    variable).
const deposit = (amount) => {
    balance += amount;
}

// One-line arrow function.
const withdraw = amount => balance -= amount;

// 3. Execution happens step-by-step.
//    The program follows a linear sequence of actions.
//    In this context, "linear" simply means that the program
//    executes in a straightforward top-to-bottom sequence.
deposit(500);
withdraw(200);

console.log(`balanace: ${balance}`);

// 4. This program has no encapsulation.
//    Any line of code anywhere can do the following:
balance -= 1_000_000;

// This is not encapsulated because the data ('balance') and
// the behaviour (deposit, withdraw) are not bundled together
// in one object.

// 5. This program doesn't contain any objects.
//    E.g. BankAccount object.


// Object-oriented Programming:

class BankAccount {
    constructor(balance) {
        // 'this.balance' refers to the attribute.
        this.balance = balance;
    }

    // Mutator/Setter methods.

    // The 'amount' that appears after 'deposit = ' is the
    // parameter that the deposit() function accepts.
    deposit = amount => this.balance += amount;

    // Arrow function.
    // deposit = amount => {
    //     this.balance += amount;
    // }

    // Traditional function.
    // deposit(amount) {
    //     this.balance += amount;
    // }

    withdraw = amount => this.balance -= amount;

    // Selector/Getter method.
    getBalance = () => this.balance;
}

// Instantiate the BankAccount class.
const account = new BankAccount(1_000);

account.deposit(500);

console.log(`\naccount.getBalance(): ${account.getBalance()}`)

/*
Unlike most classical OOP languages, JavaScript doesn't use classes
as the primary inheritance mechanism.

Instead, JavaScript inherits directly from other objects.

Every JavaScript object has an internal hidden link to another
object called its prototype.

That hidden link forms a chain:
object -> prototype -> prototype -> prototype -> null

This is called a prototype chain.
*/

const person = {
    // greet() is a method defined on the person object.
    greet: () => console.log('Hello'),

    // Longer versions:
    // greet() {
    //     console.log('Hello');
    // }

    // Having two methods with the same exact name, will cause
    // JavaScript to use the one that was declared further down
    // in the program.
    greet: function() {
        console.log('Hi');
    }
};

// Object.create() establishes a prototype inheritance relationship
// between person and student.
const student = Object.create(person);

student.study = () => console.log('Studying')

console.log();

student.study();
student.greet();

// Prototype chain:
// student -> person -> Object.prototype -> null

// When you access student.greet, JavaScript performs:
// 1. Check if student has greet.
// 2. If not, check student's prototype.
// 3. Continue upward.
// 4. Stop once null is reached.

// prototype is a property on constructor functions.

const Person = (name) => {
    this.name = name;
}

// .prototype allows every object to get its own separate greet() function.
Person.prototype.greet = () => console.log(`Hello, my name is ${this.name}`);

// user -> Person.prototype -> Object.prototype -> null
const user = new Person('Alice');

console.log(`\nstudent.prototype: ${student.prototype}`);

// __proto__ is an object's internal prototype reference.
console.log(`student.__proto__: ${student.__proto__}`);
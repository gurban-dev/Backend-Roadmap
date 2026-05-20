/*
An object-oriented programming language (OOP language) is a
programming language built around the concept of objects.

An object is a bundle of:
Data (called attributes or properties)
Behaviour (called methods)

Object-oriented programming organises code around objects,
which bundle data and behaviour together.
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

console.log(`balance: ${balance}`);

// 4. This program has weak data protection.
//    Any line of code can directly modify 'balance'.
balance -= 1_000_000;

// This is not encapsulated because the data ('balance') and
// the behaviour (deposit, withdraw) are not bundled together
// in one object.

// 5. The bank account data and behaviour are not
//    grouped together inside a single object.


// Object-oriented Programming:

class BankAccount {
    // The '#' symbol indicates that 'balance' is a private
    // field that can only be accessed from inside the class.

    // This supports encapsulation because the internal data
    // cannot be directly accessed or modified from outside
    // the class. Instead, outside code must interact with
    // the data through the class's public methods.
    #balance;

    constructor(balance) {
        // 'this.balance' refers to the attribute.
        this.#balance = balance;
    }

    // Mutator/Setter methods.

    // 'amount' is the parameter accepted by the method.
    deposit = amount => this.#balance += amount;

    // Arrow function.
    // deposit = amount => {
    //     this.balance += amount;
    // }

    // Traditional function.
    // deposit(amount) {
    //     this.balance += amount;
    // }

    withdraw = amount => this.#balance -= amount;

    // Selector/Getter method.
    getBalance = () => this.#balance;
}

// Instantiate the BankAccount class.
const account = new BankAccount(1_000);

account.deposit(500);

console.log(`\naccount.getBalance(): ${account.getBalance()}`);
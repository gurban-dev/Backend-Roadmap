// Exercise 1
// The function returns 50 because var is function-scoped
// and the inner declaration overwrites the outer one.
const calculateScore = () => {
    var score = 100;

    if (true) {
        var score = 50;
    }

    return score;
};

// Outputs 50.
console.log(`calculateScore(): ${calculateScore()}`);


// Fixed version using let to preserve block scope.
const calculateScoreFixed = () => {
    let score = 100;

    if (true) {
        let score = 50;
    }

    return score;
};

// Outputs 100.
console.log(`\ncalculateScoreFixed(): ${calculateScoreFixed()}`);


// Exercise 2
// This throws a ReferenceError because message is block-scoped
// and does not exist outside the loop.
for (var i = 0; i < 3; i++) {
    let message = `Index: ${i}`;
}

// ReferenceError
// console.log(message);


// Fixed version by logging inside the loop.

// With let a new binding is established on each iteration.

// This binding is a connection between the variable 'i' and the
// value being assigned to it.
for (let i = 0; i < 3; i++) {
    let message = `Index: ${i}`;

    console.log(`\nmessage: ${message}`);
}


// Exercise 3
// This prints 2 because var allows redeclaration
// and silently overwrites the previous value.
var count = 1;
var count = 2;

// Outputs 2.
console.log(`\ncount: ${count}`);


// This is dangerous because it allows accidental overwrites
// without throwing an error.


// Fixed version using let which prevents redeclaration.
let countSafe = 1;

// SyntaxError
// let countSafe = 2;

// A variable declared with 'let' allows reassignment, but
// not redeclaration (declaring a new variable with the same
// name).
countSafe = 2;

// Outputs 2.
console.log(`countSafe: ${countSafe}`);


// Exercise 4
// This prints undefined three times because 'i' becomes 3
// after the loop finishes and users[3] is undefined.
const users = ["Alice", "Bob", "Charlie"];

console.log('\nFor loop with var:');

// The execution of the 97 was delayed by 100 milliseconds to
// show why using 'var' can be unpredictable.
for (var i = 0; i < users.length; i++) {
    setTimeout(() => {
        console.log(`users[${i}] (var): ${users[i]}`);
    }, 100);
}

setTimeout(() => {
    console.log('\nFor loop with let:');
}, 100)

// Fixed version using let to create a new binding per iteration.
for (let i = 0; i < users.length; i++) {
    // The exetuion of line 109 was delayed by 100 ms because it
    // should not appear in the terminal before line 97.
    setTimeout(() => {
        console.log(`users[${i}] (let): ${users[i]}`);
    }, 100);
}


// Exercise 5
// This prints 10 and then throws a ReferenceError for b.
// a is function-scoped, but b is block-scoped.
const testScope = () => {
    if (true) {
        var a = 10;
        let b = 20;
    }

    setTimeout(() => {
        // Outputs 10.
        console.log(`\na: ${a}`);

        // ReferenceError
        console.log(`b: ${b}`);
    }, 100);
};

testScope();
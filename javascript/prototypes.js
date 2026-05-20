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
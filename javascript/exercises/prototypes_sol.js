// Create a parent object named animal.
const animal = {

    // Create a method that prints a generic sound.
    makeSound() {
        console.log('Some generic animal sound');
    }
};

// Create a new object named dog.

// The dog object inherits from animal through
// the prototype chain.
const dog = Object.create(animal);

// Add a method directly to the dog object.
dog.bark = () => {
    console.log('Woof!');
};

// Also valid:
// dog.bark = function bark() {
//     console.log('Woof!');
// };

// Call the bark method stored directly on dog.
dog.bark();

// Call the inherited makeSound method.

// JavaScript first searches dog for makeSound().

// Since the method does not exist directly on dog,
// JavaScript follows the prototype chain to animal.
dog.makeSound();

// When JavaScript cannot find a property directly on an
// object, it automatically searches the prototype chain.

/*
Question 1 Answer:

dog can access makeSound() because JavaScript searches
the prototype chain when a property or method is not
found directly on the object itself.
*/

// Question 2 Answer:
// This prints the prototype object that dog inherits from.
console.log(
    Object.getPrototypeOf(dog)
);

// Question 3 Answer:
// Check whether animal is the prototype of dog.
console.log(
    Object.getPrototypeOf(dog) === animal
);

// Check whether bark is an own property of dog.
console.log(
    dog.hasOwnProperty('bark')
);

// Check whether makeSound is an own property of dog.

// This returns false because makeSound is inherited
// from animal rather than stored directly on dog.
console.log(
    dog.hasOwnProperty('makeSound')
);

// Question 4 Answer:
// Each object inherits from the object to its right
// through the prototype chain.
// dog -> animal -> Object.prototype -> null

/*
Expected Output:

Woof!
Some generic animal sound
The animal object is printed.
true
true
false
*/
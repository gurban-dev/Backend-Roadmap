/*
A function is a reusable block of code designed to perform a
specific task.

Functions allow programmers to organize logic into named units
that can be reused multiple times throughout a program.

Similar to a recipe, you define the instructions once, give the
recipe a name, then reuse it whenever needed.
*/


/*
.toUpperCase() is called a method because it belongs to a string
object.

Methods are functions that are associated with objects rather
than existing as standalone functions.
*/
console.log("Canada".toUpperCase());


/*
'greet' is the function name.

This is known as a function declaration.
*/
function greet() {
    console.log('\nHello.');
}


/*
This is an arrow function expression assigned to the variable
'greet'.

The variable name becomes the reference used to invoke the
function.
*/
const greetArrow = () => {
    console.log('\nHello.');
};


/*
This is a shorter arrow function expression.

Curly braces can be omitted when the function contains only a
single statement.
*/
const greetShort = () => console.log('\nHello.');


/*
greet() is invoked as a standalone function because it is called
directly rather than through an object.
*/
greet();


/*
Arrow functions do not define a function name directly inside the
function syntax.

Instead, they are commonly stored inside variables or constants.
*/


/*
Arrow functions were introduced in JavaScript to provide a more
concise syntax for writing functions.
*/


/*
Pass an anonymous arrow function as an argument to setTimeout().

The function executes after approximately 1,000 milliseconds
(1 second).
*/
setTimeout(() => {
    console.log('\nHello.');
}, 1_000);


/*
This version uses a traditional anonymous function expression
instead of an arrow function.

Both approaches achieve the same result.
*/
setTimeout(function () {
    console.log('\nHello.');
}, 1_000);
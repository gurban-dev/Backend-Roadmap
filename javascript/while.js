// A while loop in JavaScript repeatedly runs code as long as a
// condition remains true.

// This is useful when the number of times the loop should run
// is not known ahead of time.

// while (condition) {
//     Code block to run repeatedly.
// }

// A while loop operates the following way:
// 1. The condition is evaluated.
// 2. If the condition is true, run the code block.
// 3. Repeat steps 1 and 2 until the condition becomes false.

// The readline module displays a question.
// Waits for the user's keyboard input.
// Returns the user's response.
import readline from 'node:readline/promises';

// stdin is the standard input stream and is how the program receives
// input from the keyboard.

// stdout is the standard output stream and is how the program displays
// text in the terminal.
import { stdin as input, stdout as output } from 'node:process';

let count = 1;

while (count <= 5) {
    console.log(count);

    // Can I change what 'count' has a copy of so that it is
    // no longer less than or equal to 5?
    count += 1;
}

// Enforce the rule:
// A password must have eight characters.
let password = '';

// The readline interface needs both stdin and stdout.

// Think of a readline interface as a communication channel to the
// terminal.

// If the interface were to be recreated in the while loop on
// every iteration, it means that on the second iteration there
// are now two listeners receiving the keyboard input.

// This is why when 'a' is typed, the two listeners receive:
// aa

const readline_interface = readline.createInterface({
    input,
    output
})

while (password.length < 8) {
    password = await readline_interface.question('\nEnter your new password: ');

    console.log(`\npassword: ${password}`);

    // Invalid password:
    // Returns true if the length of the password is less than 8 characters.

    // Valid password:
    // Returns false if the length of the password is more than 8 characters.

    // If the expression password.length < 8 returns false the while loop
    // block of code will not run again.

    // This makes sense because if the password is valid, the program should
    // not prompt the user to type in their password another time.
    console.log(`password.length < 8: ${password.length < 8}`);
}

console.log('\nYour password has been set.')
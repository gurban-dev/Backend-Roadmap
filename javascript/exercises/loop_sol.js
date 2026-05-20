import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

// The input stream receives data entered through the keyboard.
// The output stream sends data to the terminal console.

// In Node.js, input and output are handled through streams.

// A stream represents data flowing over time.

// Node.js provides the following stream objects:
// process.stdin  -> standard input stream.
// process.stdout -> standard output stream.

// process.stdin receives keyboard input for this program.
// process.stdout displays text output in the terminal.

// 'rl' references a readline.Interface object that allows the
// program to read user input line by line.
const rl = readline.createInterface({
    input,
    output
});

// Store the secret number that the user must guess.
const secretNumber = 7;

// Track the total number of guesses entered by the user.
let noOfGuesses = 0;

// This loop continues running indefinitely until a break statement
// explicitly terminates it.
//
// The expression inside the parentheses is evaluated before each
// iteration of the loop. Since the expression is always true, the
// loop will continue executing until it is manually stopped.
//
// This is considered a non-entry controlled loop because the loop
// termination depends on a break statement inside the loop body
// rather than the loop condition itself.
while (true) {

    // Prompt the user to enter a guess and store the input as a
    // string because all keyboard input is initially received as
    // text data.
    const usrGuessStr = await rl.question(
        'Enter a secret number between 1 and 10: '
    );

    // Convert the user's string input into a Number data type so
    // numerical comparison can be performed.
    const usrGuessNum = Number(usrGuessStr);

    // Increase the number of guesses by 1 after each attempt.
    noOfGuesses++;

    // Check whether the user guessed the correct number on the
    // first attempt.
    if (usrGuessNum === secretNumber && noOfGuesses === 1) {

        // Display a success message using the singular form
        // "attempt" because only one guess was made.
        console.log(
            `\nCorrect! You guessed the secret number in ${noOfGuesses} attempt.`
        );

        // Exit the loop because the correct number was guessed.
        break;
    }

    // Check whether the user guessed the correct number after
    // more than one attempt.
    else if (usrGuessNum === secretNumber && noOfGuesses > 1) {

        // Display a success message using the plural form
        // "attempts" because multiple guesses were made.
        console.log(
            `\nCorrect! You guessed the secret number in ${noOfGuesses} attempts.`
        );

        // Exit the loop because the correct number was guessed.
        break;
    }

    // Execute this block when the user's guess is incorrect.
    else {

        // Inform the user that the guess was incorrect.
        console.log(
            `\nYou did not guess the secret number.`
        );
    }

    // Print a blank line to improve terminal readability between
    // loop iterations.
    console.log();
}

// Close the readline interface to stop accepting user input and
// release associated resources.
rl.close();
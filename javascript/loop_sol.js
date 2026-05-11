import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

// Create the readline interface so the program can
// receive user input from the terminal.
const rl = readline.createInterface({
    input,
    output
});

// Store the secret number the user must guess.
const secretNumber = 7;

// Store the number of guesses the user makes.
let attempts = 0;

// Display a countdown before the game starts.
console.log('Starting in...');

// Count backwards from 3 to 1.
for(let i = 3; i >= 1; i--) {
    console.log(i);
}

// Display a start message.
console.log('Go!');

// Continuously ask the user for guesses until they
// guess the correct number.
while(true) {

    // Ask the user for a number.
    const answer = await rl.question(
        'Guess a number between 1 and 10: '
    );

    // Convert the user's input from a string to a number.
    const guess = Number(answer);

    // Increase the attempt counter by 1.
    attempts++;

    // Check whether the guess is correct.
    if(guess === secretNumber) {

        console.log('Correct!');
        console.log(
            `You guessed the number in ${attempts} attempts.`
        );

        // Exit the loop.
        break;
    }

    // Tell the user the guess was incorrect.
    console.log('Incorrect. Try again.');
}

// Close the readline interface.
rl.close();
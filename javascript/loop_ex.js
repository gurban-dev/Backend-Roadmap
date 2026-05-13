import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

/*
Description:

Create a terminal program where the user must guess a secret number.

The program should:
repeatedly ask the user for input,
stop only when the correct number is guessed,
count the number of attempts,
and display a countdown using a for loop before the game starts.


Requirements

Part 1: Countdown using a for loop

Before the game starts, print:

Starting in...
3
2
1
Go!

Use a for loop.
*/

/*
Part 2: User input

Ask the user to guess a number between 1 and 10.

Use:
readline
rl.question()

Part 3: while loop

Keep asking the user for guesses until they enter the correct
number.

Use a while loop.
*/

/*
Part 4: Infinite loop

Start with:
while (true)

Then manually stop the loop using:
break;

when the user guesses correctly.
*/


/*
Part 5: Attempt counter

Track how many guesses the user makes.

Example output:

Correct!
You guessed the secret number in 4 attempts.
*/

// 'rl' references a readline.Interface object that allows the
// program to read user input line by line.
const rl = readline.createInterface({
    input,
    output
});

// Store the secret number that the user must guess.
const secretNumber = 7;
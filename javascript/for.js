// A for-loop is used when we know ahead of time how many
// times we want the loop to repeat.

// This loop has 3 parts:

// 1. let i = 0
//    Creates a variable named 'i' and starts it at 0.

// 2. i < 5
//    The loop will continue running as long as 'i'
//    is less than 5.

// 3. i++
//    After each loop iteration, increase 'i' by 1.

// The loop will therefore run with these values of i:
// 0, 1, 2, 3, and 4.

// Once 'i' becomes 5, the condition i < 5
// becomes false, and the loop stops.

for(let i = 0; i < 5; i++) {

    // Print the current value of 'i' to the console.
    console.log('i:', i);
}
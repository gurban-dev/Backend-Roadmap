// Arrow function.
const calculateScore = () => {
	var score = 100;

	if (true) {
		var score = 50;
	}

	return score;
};

// What does the calculateScore() function return now?

// Rewrite it so it returns 100.

console.log("calculateScore():", calculateScore());


for (var i = 0; i < 3; i++) {
	let message = `Index: ${i}`;
}

// console.log("\nmessage:", message);

// What error occurs and why?

// Modify the code so you can safely log each message inside the loop.


var count = 1;
var count = 2;

console.log(count);

// Why is this dangerous?

// Rewrite using let and explain what changes.

const users = ["Alice", "Bob", "Charlie"];

for (var i = 0; i < users.length; i++) {
	setTimeout(() => {
		console.log(`User: ${users[i]}`);
	}, 100);
}

// What does this print out?

// Why is it broken?

// Fix it properly.


const testScope = () => {
	if (true) {
		var a = 10;
		let b = 20;
	}

	setTimeout(() => {
		console.log(a);
		// console.log(b);
	}, 100);
}

testScope();

// What happens and why?
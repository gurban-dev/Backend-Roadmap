/*
Exercise:
Refactor the code so that each function has one responsibility.

Goals:
1. Practice traditional function declarations.
2. Practice arrow functions.
3. Understand single-responsibility principle.
4. Compare styles and improve readability.

Instructions:
- Run the code first.
- Notice that displayCityInfo() does too many things.
- Refactor the program into smaller functions.
- Use BOTH traditional function declarations and arrow functions.

Suggested breakdown:
- formatCityName()
- calculateCityAge()
- printCityCard()

Questions:
1. Which functions should be arrow functions?
2. Which functions are clearer as traditional declarations?
3. Why is the refactored version easier to maintain?
*/

// Starter code.

const currentYear = 2026;

function displayCityInfo(cityName, foundingYear, region) {
    const formattedName = cityName.trim();

    const cityAge = currentYear - foundingYear;

    console.log('----- CITY INFO -----');
    console.log(`City: ${formattedName}`);
    console.log(`Region: ${region}`);
    console.log(`Founded: ${foundingYear}`);
    console.log(`Approximate age: ${cityAge} years`);
    console.log('---------------------');
}

displayCityInfo(' Jericho ', -9000, 'Middle East');


/*
YOUR TASK:

Refactor the code below this line.

Example idea only:

function formatCityName(...) {
}

const calculateCityAge = (...) => {
};

function printCityCard(...) {
}

Then call them together.
*/
/*
Exercise:
Refactor the code so that each function has one
responsibility.

Goals:
1. Practice traditional function declarations.
2. Practice arrow functions.
3. Understand single-responsibility principle.
4. Compare styles and improve readability.
*/

/*
Store the current year in a constant so that it can be
reused throughout the program without repeating the value.
*/
const currentYear = 2026;

/*
This function is responsible only for formatting the city
name. It removes unnecessary whitespace from the beginning
and end of the string and returns the cleaned result.
*/
function formatCityName(cityName) {
    return cityName.trim();
}

/*
This arrow function calculates the approximate age of the
city by subtracting the founding year from the current year.
The returned value represents how old the city is.
*/
const calculateCityAge = (foundingYear) => currentYear - foundingYear;

/*
This function is responsible only for displaying the city
information in a clean and organized format in the console.
It does not calculate or modify any data.
*/
function printCityCard(cityName, region, foundingYear, cityAge) {
    console.log('----- CITY INFO -----');
    console.log(`City: ${cityName}`);
    console.log(`Region: ${region}`);
    console.log(`Founded: ${foundingYear}`);
    console.log(`Approximate age: ${cityAge} years`);
    console.log('---------------------');
}

/*
This function coordinates the overall workflow of the
program. It calls smaller helper functions to:
1. Format the city name.
2. Calculate the city age.
3. Display the final formatted information.

Because each helper function has a single responsibility,
the program becomes easier to understand, test, and modify.
*/
function displayCityReport(cityName, foundingYear, region) {
    // Clean the city name before displaying it.
    const formattedName = formatCityName(cityName);

    // Calculate the approximate age of the city.
    const cityAge = calculateCityAge(foundingYear);

    // Pass the processed data into the display function.
    printCityCard(
        formattedName,
        region,
        foundingYear,
        cityAge
    );
}

// 'nameOfCity' is the argument.
// 'cityName' is the parameter.

// Their names do not need to match.
const nameOfCity = ' Jericho ';

/*
Execute the main function with sample data for Jericho,
which is considered one of the oldest continuously
inhabited cities in the world.
*/
displayCityReport(
    nameOfCity,
    -9000,
    'Middle East'
);
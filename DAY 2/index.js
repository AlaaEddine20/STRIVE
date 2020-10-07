/*
// DATA TYPES 

console.log(3);
console.log(6.45);

console.log(4 + 6);
console.log(5 * 7);

console.log((5 + 3) * 4);

console.log(45 % 6); // The reminder of 45:6

// SPECIAL NUMBERS
console.log(Infinity);
console.log(-infinity);
console.log(NaN); // Not a number
//EXAMPLE
console.log(0 / 0); // Not a number
*/
/*
// STRINGS
console.log('Hello world'); // Prints text
console.log('2'); // String not a number
console.log(2); // 2 as a number
console.log("Hello worls"); // String with double quotes
console.log(`Hello world`); // String with backticks

console.log("Hello world".toUpperCase()); // It says to uppercase the whole string
*/
/*
console.log("1" + 2); // Prints 12
console.log("five" * 2); // NaN
console.log('Hello ' + 'world'); // String concatination
console.log("5" * 2); // Prints 10
*/
/*
// BOOLEANS
console.log(true);
console.log(false);

// EXAMPLE OF BOOLEAN
console.log(2 === 2); //Prints true
console.log(2 < 3);
console.log(2 != 3); // Is 2 different from 3? True
*/
/*
// null and undefined
console.log(null);
console.log(undefined);
// EXAMPLE
let b;
console.log(b);
*/

// LOGICAL OPERATORS  ---> AND, OR, NOT
//TRUE AND TRUE --> TRUE
//TRUE AND FALSE ---> FALSE
//FALSE AND TRUE ---> FALSE
//FALSE AND FALSE ---> FALSE
/*
console.log(2 < 3 && 4 < 209); // Both true

//TRUE OR TRUE --> TRUE
//TRUE OR FALSE ---> TRUE
//FALSE OR TRUE ---> TRUE
//FALSE OR FALSE ---> TRUE
console.log(2 > 3 || 4 < 209); // One of the two is TRUE so it logs TRUE
console.log(2 > 3 || 4 > 209); // It logs TRUE because both are FALSE

//NOT TRUE ---> FALSE
//NOT FALSE --> TRUE
console.log(!(2 > 3));
*/
//VARIABLES
let ten = 10;
console.log(ten);
console.log(10); // Prints the number i gave it
console.log(ten - 2); // Prints the operation
ten = 12345;
console.log(ten); // I can reassign the variable

//CONDITIONAL EXECUTION

if(2 < 3){
    // if condition is true these lines will be executed
    console.log("condition was true");
} else {
    // if condition is false these lines will be executed
    console.log("condition was false");
}
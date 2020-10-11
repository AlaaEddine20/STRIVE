/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Write the code to execute a SUM between the number 12 and 20
*/
////////////////////////////////////
/* WRITE YOUR CODE HERE */
console.log(12 + 20);
/* EXERCISE 2
Create a variable named x containing the number 12
*/
/**************************DONE ***************************/
/* WRITE YOUR CODE HERE */
let X = 12;
/* EXERCISE 3
Create a variable named name containing the string John Doe
*/
/**************************DONE ***************************/
/* WRITE YOUR CODE HERE */
let name = 'John Doe';
/* EXERCISE 4
Execute a DIFFERENCE between the number 12 and the variable x, which stores the value 12
*/
/**************************DONE ***************************/
/* WRITE YOUR CODE HERE */
console.log(12 - X);
/* EXERCISE 5
Create two variables: name1 and name 2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2)
*/
/**************************DONE ***************************/
/* WRITE YOUR CODE HERE */
let name1 = 'john';
let name2 = 'John';
console.log(name1 !== name2);
function find(a, b) {
    if (a.toLowerCase() === b.toLowerCase()){
    return "Strings are equals";    
} else {
    return "Strings are not equals";
}
}
console.log(find(name1,name2))
/* EXERCISE 6
Create the variable x (value less than 10). Write the code to print the literal value of the given number (ex.: 1 => one, 5 => five)
*/
/**************************DONE ***************************/
/* WRITE YOUR CODE HERE */
let x = 9;
if (x === 0) {
    console.log("zero");
} else if (x === 1) {
    console.log("one");
} else if (x === 2) {
    console.log("two");
} else if (x === 3) {
    console.log("three");
} else if (x === 4) {
    console.log("four")
} else if (x === 6) {
    console.log("five")
} else if (x === 6) {
    console.log("six")
} else if (x === 7) {
    console.log("seven");
} else if (x === 8) {
    console.log("eight")
}else if (x === 9) {
    console.log("nine");
} else {
    console.log("insert the right numer");
}

/* EXERCISE 7 (EXTRA)
Insert a value in a variable based on the result of a ternary if
*/

/* WRITE YOUR CODE HERE */


/* WHEN YOU ARE FINISHED
Send the code via Slack to the tutor! In the next days we'll also learn how to use GIT 
*/

/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/
/**************************DONE**************************/
/*
const area = function(l1, l2){
    return l1 * l2;
}
console.log(area(6, 10))
*/

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/
/**************************DONE**************************/
/*
function crazySum (x, y) {
    if (x === y) {
       return  (x + y) * 3;
    } else {
       return  "Incorrect"
    }
    
}
console.log(crazySum(3, 3))

*/
/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/
/**************************DONE**************************/
/*
function crazyDiff (givenNumber, nineTeen) {
    if (givenNumber < nineTeen){
        return "Not greater";
    } else if (givenNumber > nineTeen){
        return (givenNumber - nineTeen) * 3;
    }
};
console.log(crazyDiff(20, 19));
*/
/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/
/**************************DONE**************************/
/* WRITE YOUR CODE HERE */
/*
function boundary (N) {
    if (N > 20 && N < 100 || N === 400) {
        return true;
    } else {
        return false;
    }
}
console.log(boundary(30))
*/
/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

/* WRITE YOUR CODE HERE */    // ASK TUTOR WHAT THIS TASK ASKS
/*
function strivify(S){
    return S = "S" + "Strive";
}
console.log(strivify("c"))
*/

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
/**************************DONE**************************/
/*
function check3and7(X) {
    if (X % 3 === 0){
        return "3 is a multiple of X";
    } else if (X % 7 === 0){
        return "7 is a multiple of X";
    } else {
        return "No multiple of X Found";
    }
}
console.log(check3and7(14))
*/
/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/
/**************************DONE**************************/
/*
function reverseString(myString){
      return myString.split("").reverse().join("");
}
console.log(reverseString("strive"))
*/
/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/
/**************************DONE**************************/    // NOT CLEAR
/*
const firstLetter = "Sono stupido davvero"
function upperFirst(firstLetter){
    return firstLetter.split(' ').map(function (s) { return s.charAt(0); }).join('');
};
console.log(upperFirst(firstLetter))
*/
/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
/**************************DONE**************************/
/*
const myString = "n It Works n"
function cutString(myString){
    return myString.substring(1, myString.length-1);
}
console.log(cutString(myString))
*/
/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/
/**************************DONE**************************/
/*
function giveMeRandom(randomNarray){
    for (let i = 0; i<10; i++){
        return randomNarray = [Math.floor(Math.random() * 10)]
    }
};
console.log(giveMeRandom())
*/
/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/

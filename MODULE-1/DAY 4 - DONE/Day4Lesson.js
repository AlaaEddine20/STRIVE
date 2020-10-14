/*TOPICS OF THE DAY
1)Javascript live coding: string methods and functions
2)Git

*Functions gives us a way to structure larger programs, 
to reduce repetitions, associate names with subprograms and to
isolate these subprograms from the others

*Git is one of the most fundamental tools for developers,
 especially about teamwork


working directore ----git add-->staging area----git commit-->local repository----git push--> remote repository */


//SWITCH CASE
let x;
if (x === "value1") {
    //do something
} else if (x === "value2") {
    //do somthing else
} else {
    //something else different from the previous conditions
}


/*switch case is a valid alternative to this previous lines of code(if else structure)*/
/*we're defining different cases that could match the value of our variable i ,
in this case the one that will be executed is "case 6" */
const i = 6;
/*it could be whatever value injected by a user 
           -in this case we wouldn't know the value and we can handle 
           the various cases and scenarios using switch-, here we're just 
           assigning a random value to make an example*/
switch (i) {
    case 0:
        console.log("i is zero");
        break;
    case 1:
        console.log("i is one");
        break;
    case 2:
        console.log("i is two");
        break;
    case 3:
        console.log("i is three");
        break;
    case 4:
        console.log("i is four");
        break;
    case 3:
        console.log("i is three");
        break;
    case 6:
        console.log("i is six");
        break;
    default:
        break;
}

/************************************************************/
//different way of declaring strings

const doubleQuotes = "hello world"
const singleQuotes = 'hello world'

const example = 7;
const templateLiterals = `My favourite number is ${example}`; //the template literals used with the ` gives me the possibility to inject variables in my string thank to the syntax ${myvariable}
console.log(templateLiterals);


console.log(templateLiterals.toUpperCase()); //majes all my sentence in capital letters

console.log(templateLiterals.slice(4, 10)); //will cut my sentence from the 4th to 10th letters  
console.log(templateLiterals.indexOf("n")); //will return the position of the first "n" found
console.log(templateLiterals.indexOf("is")); //will return the position of the first "is" found

const arrayOfWords = templateLiterals.split(" "); //will divide the sentence in an array of words by splitting where he finds a space so it will return ["my", "favourite", "number", "is"] etc
console.log(arrayOfWords);

const joinedWithDots = arrayOfWords.join("........."); //The join() method returns the array as a string.
//The elements will be separated by a specified separator. 
console.log(joinedWithDots);

console.log("hi".repeat(3)); //will repeat what the value passed for the number of time wanted



/*******************FUNCTION********************/

//declaring a function
const square = function (x){ //we're passing a PARAMETER that in this case is "x"
    /*start of body function */
    const result = x*x;  //the variable that i declare in my function cannot be used outside the scope of the function (if i declare them using "var" keyword, they will be used even outside the scope and it can cause problems)
    return result;
    /*end of body function */
};

console.log(square(4)); //i'm passing my own parameter when i'm calling the square function -so it returns 16 and 9- 
console.log(square(3)); 
const mySquareNumber = square(5); //i'm storing the result of my function in a variable


let myFunction = function(){    //i'm declaring another function that only prints me somthing without aany parameter or return
    console.log("hii");
};

myFunction = function(){
    console.log("hello world"); //since i declared myFunction with let i can overwrite it
};
myFunction();


/**********************ARROW FUNCTION*********************** */

const sum = function (a, b){
    return a + b;
}
const sum1 =(a, b)=>{   //normal arrow function
    return a+b;
}
const sum2 =(a,b) => a+b; //shorter syntax arrow function


// LET VS CONST
/*
let myVar = 0; // Can be reassigned
const myVar2 = 0; // Can't be reassigned
*/
// TERNARY OPERATOR
/*
const age = 16;

const price = age > 18 ? "20$" : "15$" // If the price is higher than 18 then the price is 20$, otherwise is 15$
console.log(price);

// TRUTHY AND FALSY

const truthyOrFalsy = 2 - 2 ? "truthy" : "falsy";
console.log(truthyOrFalsy);

//undefined, null, 0, "", NaN ---> FALSY VALUES

// DOUBLE EQUALITY VS TRIPLE EQUALITY

console.log(2 == "2"), // 
console.log(2 === "2");
*/

/*********objects *********/
/*
const user = {
    name: "John",
    surname: "Rambo",
    age: 18,
    isStudent: true, // Use "" if you need space between words
};
*/
/*
console.log(user);
console.log(user.age);
console.log(user.surname);
console.log(user.isStudent); 
*/
/*
if (user.birthDate) {
    console.log(user.birthDate);
} else {
    console.log("Birthdate doesn't exists!");
}
*/

// CLONING OBJECTS

//const user2 = user{}; // DO NOT DO THIS TO CLONE OBJECTS
//Object.assign(user2, user); // DO THIS

// DELETE PROPRETIES

//delete user.name; 

/***********ARRAYS**********/
/*
const myArray = [1,2,3,4,5,6,7,8] // Every element(something that has a value) has its own INDEX(position) first position(position of an element) = 0, etc..

console.log(myArray[0]) // to access an element i need to use ---> nameOftheArray[index]
console.log([8]); // index 8 is out of the bounds ---> undefined!

//EXAMPLE
const arrayOfStrings = ["Hello", "Strivers", "!"];
console.log(arrayOfStrings[1]); 

console.log(arrayOfStrings.lenght); // The number of how many elements we have.
*/

// ARRAY OF OBJECTS

const users = [
   {
    name: "John",
    surname: "Rambo",
   },
   {
    name: "Arnold",
    surname: "Schwarzenegger",
   },
   {
    name: "Jean Claude",
    surname: "VanDamme",
   },
];

console.log(users[1].surname);


// ARRAYS USEFUL METHODS

//const myArray = [1, 2, 3, 2, 1];
/*
myArray.push(4);
myArray.push(5); // ADDING NEW ELEMENTS

console.log(myArray);

myArray.pop();
console.log(myArray); // EXTRAXTS LAST ELEMENT FROM ARRAY

const lastElement = myArray.pop();
console.log(myArray);
console.log(lastElement);
*/

//console.log(myArray.indexOf(2)); // Takes the position of the number we want, so the number 2 is in position 1
//console.log(myArray.lastIndexOf(2)); // Takes the last index of the number we want, so 2 in this case is in the last position of nr 3.

//console.log(myArray.slice(1, 4));
//console.log(myArray.slice(3));

//const myArray2 = [7, 34, 89];
//console.log(myArray.concat(myArray2));
/*
const index = 3;
const myArray = ["a", "b", "c", "d"];

console.log(myArray.slice(0, index)); // Takes elements from nr 0 to value of the index
console.log(myArray.concat(index + 5)); // Concatenate myArray with the sum of index value + a number.
*/

/***********LOOPS**********/

// FOR LOOP

/*for(let i = 0; i <= 10; i++) { // declaring and inizializing a variable; condition; increment by one the variable.
  console.log(i); // first iteration ---> 0, second iteration ---> 1
}
/*
for (i = 0; i < 100; i = i + 20) { // It goes ahead by 20 till reach 100
    console.log(i);
}
*/

/*
const myArray = [6, 450, 690, 240, 180, 4];

for (let index = 1; index < myArray.length; index++) {
    console.log("I'm printing element with index: ", index);
    console.log("Here is the element --> ", myArray[index]);

if (myArray[index] === 690) {
    break; // This says when you reach 690 STOP the loop
}
}
*/
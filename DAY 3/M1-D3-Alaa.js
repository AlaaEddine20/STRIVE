/* //////////////////////// FINISHED //////////////////////////
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can ask for tutor's help
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/


/* EXERCISE 1
Create and array with the first 5 positive numbers
*/
/**************************DONE**************************/
/* WRITE YOUR CODE HERE */
/*
let myArray = [1, 2, 3, 4, 5];
console.log(myArray[2]);


/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/
/**************************DONE**************************/
/* WRITE YOUR CODE HERE */

const myInfo = {
    name: "Alaa Eddine",
    surname: "El Moudden",
    email: "keni91cell@gmail.com",
    age: 29,
};


/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/
/**************************DONE**************************/
/* WRITE YOUR CODE HERE */
/*
function drLs(){
if (myInfo.drivingLicense === true) {
    return myInfo.drivingLicense;
} else {
    return "No driving license";
}
}
*/

/* EXERCISE 4
Remove from the previously created object the age
*/
/**************************DONE**************************/
/* WRITE YOUR CODE HERE */
/*
delete myInfo.age;
console.log(myInfo);
*/

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/
/**************************DONE**************************/

/* WRITE YOUR CODE HERE */
/*
const someInfo = {
    name: "Pinco",
    surname: "Pallino",
    email: "robabuona@gmail.com",
};
console.log(someInfo.email)
*/

/* EXERCISE 6
You are working for an eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/
/**************************DONE**************************/
/* WRITE YOUR CODE HERE */
/*
let totalShoppingCart = 60;
let shippingPrice = 10;

function cart(){
    if(totalShoppingCart < 50){
      return totalShoppingCart + shippingPrice;
    } else {
        return totalShoppingCart - shippingPrice; // <--- How to log a phrase?
    } 
};

console.log(cart());
*/
/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/
/**************************DONE**************************/
/* WRITE YOUR CODE HERE */
/*
let totalShoppingCart = 60;
let discount = totalShoppingCart * 20 / 100;
let afterDiscount = totalShoppingCart - discount;

console.log(afterDiscount + " Your discount has been applied!");
*/

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/
/**************************DONE**************************/
/* WRITE YOUR CODE HERE */
// CAR 1
/*
const car1 = {
    brand: "Ford",
    model: "Mustang",
    licensePlate: "560PG",
};


// CAR 2
const Car2 = Object.assign({}, car1, {licensePlate: "680GP"});


// CAR 3
const Car3 = Object.assign({}, car1, {licensePlate: "320KK"});


// CAR 4
const Car4 = Object.assign({}, car1, {licensePlate: "999OW"});


// CAR5
const Car5 = Object.assign({}, car1, {licensePlate: "885LG"});
*/
/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/
/**************************DONE**************************/
/* WRITE YOUR CODE HERE */

//let carsForRent = [car1, Car2, Car3, Car4, Car5];


/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/
/**************************DONE**************************/
/* WRITE YOUR CODE HERE */

//carsForRent.pop();
//carsForRent.shift();

/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
/**************************DONE**************************/
/* WRITE YOUR CODE HERE */
/*
console.log(Car3.brand);
console.log(Car3.licensePlate);
*/

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/
/**************************DONE**************************/
/* WRITE YOUR CODE HERE */
/*
let carsForSale = [car1, Car3, Car5];
let totalCars = carsForSale.length + carsForRent.length;
*/
/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/
/**************************DONE**************************/
/* WRITE YOUR CODE HERE */
/*
for (i = 0; i < carsForSale.length; i++) {
     console.log("Car#", i + 1);
     console.log("Brand: ", carsForSale[i].brand);
     console.log("License plate: ", carsForSale[i].licensePlate);
     console.log("Model: ", carsForSale[i].model);
}
*/

/* WHEN YOU ARE FINISHED
Send the code on Discord via a message to your tutor! In the next days we'll also learn how to use GIT 
*/

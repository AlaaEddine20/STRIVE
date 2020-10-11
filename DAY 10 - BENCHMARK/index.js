
//Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
let x = "John ";
let y = "Doe";
//console.log(x + y)
//Create an object with properties such name, surname, email
const person = {
    name: "John",
    surname: "Doe",
    email: "JD@mail.com",
}
//Delete Email from the previously created object
delete person.email

//console.log(person)

//Create an array with 10 strings in it
//const arr = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]
//Print in the console every string in the previous array
//console.log(arr)

//Create an array with 100 random numbers in it
/*
const randomArr = [...Array(100)].map(() => Math.floor(Math.random() * 100))
innerText = randomArr;
//console.log(randomArr)
*/
//Wrote a function to get the MAX and the MIN from the previously created array
/*
function maxMin() {
    let min = Math.min.apply(null, randomArr)
    let max = Math.max.apply(null, randomArr)
    if (randomArr<10){
        return min;
    } else (randomArr>90) ;{
        return max;
    }
};
console.log(maxMin());
*/
//Create an array of arrays, in which every array has 10 random numbers
/*
const arrOfArr = [];
let currentArr = [];
for (let y=0; y<10; y++){
    currentArr.push(Math.floor(Math.random() * 10));
    arrOfArr.push(currentArr);
};
console.log(arrOfArr)
*/
//Create a function that gets 2 arrays and returns the longest one
/*
function longestArr() {
   const arrOne = ['i', 'am', 'first', 'array'];
   const arrTwo = ['i', 'am', 'second', 'array'];
   if (arrOne > arrTwo){
       return arrOne;
   } else {
       return arrTwo;
   }
};
console.log(longestArr())
*/
/*
function higherValue() {
    const arrSum1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    const arrSum2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'l'];
      for (z=0; z<arrSum1.length; z++) {
          if (arrSum1.length > arrSum2.length){
              return arrSum1;
          } else {
              return arrSum2 ;
          }
      }
}
console.log(higherValue());
*/

/******************************DOM******************************/
//Get element with ID "container" from the page
document.getElementById('container');
//Get every "td" from the page
document.getElementsByTagName('td');
//Create a cycle that prints the text inside every td of the page
/*
function tds(){
for (i=0; i<th.length; i++) {
    let td = document.createElement('td');
    document.getElementsByTagName("td");
    td.innerText = "ciao";
    th.appenChild(td);
}
};
*/

//Write a function to change the heading of the page
/*
function changeHeader() {
    document.getElementsByTagName('h1').innerText = "New Header";
}
*/
//Write a function to add an extra row to the table
/*
function addRow() {
    let table = document.createElement('table');
    table.getElementsByTagName('table');
    let extraTr = document.createElement('tr');
    extraTr.getElementsByTagName('tr');
    table.appendChild.tr
}
*/


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
   if (arrOne.length > arrTwo.length){
       return arrOne;
   } else {
       return arrTwo;
   }
}
console.log(longestArr())
*/
/*
function higherValue(arr1, arr2) {
    let sum1 = 0;
    let sum2 = 0;
    for (let z = 0; z <arr1.length; z++){
        sum1 += sum1 + arr1[z]
    }

    for (let y = 0; y < arr2.length; y++){
        sum2 += sum2 + arr2[y]
    }
    return sum1 > sum2  ? arr1 : arr2// Same as if(sum1 > sum2){return sum1} else {return sum2}
}
console.log(higherValue([1,2], [1,3]))
*/

/******************************DOM******************************/
//Get element with ID "container" from the page
//document.getElementById('container');
//Get every "td" from the page
//document.getElementsByTagName('td');// faster
//document.querySelectorAll('td); //Newer syntax
//Create a cycle that prints the text inside every td of the page
/*
function newTds(){
let tds = document,getElementsByTagName('td')
for (i=0; i<tds.length; i++) {
    tds.innerText[i] = "ciao";
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
const addRow = function () {
    let newRow = document.createElement('tr');
    for (let x = 0; x<5; x++){
        let newCell = document.createElement('td')
        newCell.innerText = x + 1; // <td>1</td> ---> <td>2</td> e così via..
        newRow.appendChild(newCell) // <tr><td>1</td></tr> ---> <tr><td>2</td></tr>
    }
    let table = document.querySelector('table') // finds the first table
    table.appendChild(newRow)
}
console.log(addRow())
*/
/*
const assTestClass = function(){
    let allRows = document.getElementsByTagName('tr')
    for (let i = 0; i < allRows.length; i++){
        allRows[i].classList.add('test')
    }
}
*/
/*
function changeLinkBackground(){
    let links = document.querySelectorAll('a'); // DO IT WITH LOOPS
    links.style.background = 'red';
}
*/
/*
window.onload = function (){
    console.log("Page")
}
*/
/*
function newItems(){
    let ul = document.getElementsByTagName('ul');
    let li = document.createElement("li");

    ul.appendChild(li)
}
console.log(newItems())
*/
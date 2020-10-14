/*
    ASSIGNMENT RULES
    - All the answers must be in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for tutor's help
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account before 17.00 (Berlin Time)
*/

//JS Basics

/* Ex.A
   Create a variable test that contains a string
*///////////////////////////////////////////////////DONE////////////////////////////////////////////////////////
/*
const test = "First friday challenge";
/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20 
*////////////////////////////////////////////////////DONE////////////////////////////////////////////////////////
/*
let sum = 10 + 20;
console.log(sum)
*////////////////////////////////////////////////////DONE////////////////////////////////////////////////////////
/* Ex.C 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution)
*/
/*
let random = Math.floor(Math.random() * 20);
console.log(random)
*////////////////////////////////////////////////////DONE////////////////////////////////////////////////////////
/* Ex.D
    Create a variable Me containing and object with the current information: Name = Your Name, Surname = Your Surname, Age = Your Age
*////////////////////////////////////////////////////DONE////////////////////////////////////////////////////////
/*
const Me = [
{
  name: "Alaa Eddine",
  surname: "El moudden",
  age: 29,
},
];
*/
/* Ex.E 
    Programmatically remove the Age from the previously create object Me
*////////////////////////////////////////////////////DONE////////////////////////////////////////////////////////

//delete Me.age;
//console.log(Me)

/* Ex.F 
   Programmatically add to the object Me an array "skills" that contains the programming languages that you know
*////////////////////////////////////////////////////DONE////////////////////////////////////////////////////////
//Me["Skills"] = "Javascript";
//Object.assign(Me, {Skills: "JS"});
//console.log(Me)
/* Ex.G 
   Programmatically remove the last skill from the array "skills" inside of the "me" object
*////////////////////////////////////////////////////DONE////////////////////////////////////////////////////////
/*
delete Me.Skills;
console.log(Me)
*/
// JS Functions
/* Ex.1
    Write the function Dice that randomize an integer number between 1 and 6
*////////////////////////////////////////////////////DONE////////////////////////////////////////////////////////
/*
function Dice(n){
  return Math.floor(Math.random() * 6) + 1
}
console.log(Dice())
*////////////////////////////////////////////////////DONE////////////////////////////////////////////////////////
/* Ex.2 
    Write the function WhoIsBigger that receives 2 numbers and returns the bigger of the 2
*////////////////////////////////////////////////////DONE////////////////////////////////////////////////////////
/*
function WhoIsBigger(x, y){
  return Math.max(x, y)
}

console.log(WhoIsBigger(5, 4))
*/
/* Ex.3
    Write the function SplitMe that receives a String and returns an array with every word in that string
    Ex. SplitMe("I love coding") => returns [ "I","Love","Coding"]
*////////////////////////////////////////////////////DONE////////////////////////////////////////////////////////
/*
function SplitMe (string){
      return string.trim().split(" ");
};
console.log(SplitMe("Let see if it works"))
*/
/* Ex.4
    Write the function DeleteOne that receives a string and a boolean. If the boolean is true, should return the string without the first letter, otherwise should remove the last one
*////////////////////////////////////////////////////DONE////////////////////////////////////////////////////////
/*
let string = "abcdefg";
let boolean = 10;
function DeleteOne(string, boolean){
  if (boolean > 5){
    return string.slice(1); // IF I WANT THE FIRST CONDITION TO BE FALSE?
  } else {
    return string.slice(0, -1); // AND THE SECOND ONE TO BE TRUE?
  }
}
console.log(DeleteOne(string, 1));
*/
/* Ex.5
   Write the function OnlyLetters that receives a string, removes all the numbers and returns it.
   Ex.: OnlyLetters("I love 123 whatever")  => returns "I love whatever"
*////////////////////////////////////////////////////DONE////////////////////////////////////////////////////////
/*
function OnlyLetters(string){                      /////// IS IT CORRECT?! 
  if (string.match(1, 2, 3, 4, 5, 6, 7, 8, 9)){
    return "Numbers not allowed";
  } else {
    return string;
  }
}

console.log(OnlyLetters("i love 132 whatever"))
*/
/* Ex.6 
   Write the function IsThisAnEmail that receives a string and returns true if the string is a valid email.
*////////////////////////////////////////////////////DONE////////////////////////////////////////////////////////
/*
function IsThisAnEmail(string){
  if (string.match("@")){
    return "Email submitted";
  } else {
    return "Insert a valid email";
  }
};
console.log(IsThisAnEmail("merdaemail.it"))
*/
/* Ex.7
   Write the function WhatDayIsIt that should return the day of the week
*////////////////////////////////////////////////////DONE////////////////////////////////////////////////////////
/*
let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday"];
let today = new Date().getDay();
function WhatDayIsIt(today){
   {
    return days[today];
  }
}

console.log(WhatDayIsIt(today));
*/
/* Ex.8
    Write the function RollTheDices that receives a numeric input and returns an object that contains both the sum of the value of the dices and the dices itself
    This function should use the Dice function defined in Ex1
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
*/
/*
function RollTheDices(num){
   
};
*/
/* Ex.9
   Write the function HowManyDays that receives a Date and return the number of days that has passed since that day.
*////////////////////////////////////////////////////DONE////////////////////////////////////////////////////////
/*
function howManyDays() {
  let today = new Date();
  let otherDay = new Date(2020, 8, 14);
  let oneDay = 1000 * 60 * 60 * 24;
  return Math.round((today - otherDay)/ oneDay)
}
console.log(howManyDays())
*/
/* Ex.10
   Write the function IsTodayMyBDay that returns true if it's your birthday, false otherwise
*////////////////////////////////////////////////////DONE////////////////////////////////////////////////////////
/*
function IsTodayMyBDay(Day){
  if (Day.match("22/02/1991")){
    return true;
  } else {
    return false;
  }
}
console.log(IsTodayMyBDay("22/02/1991"))
*/
// JS Arrays // Objs
// NOTE: movies array is defined at the end of the file

/* Ex.11
   Write the function DeleteProp that receives an object and a string, and returns the object after deleting the property with that given name
*/
/*
let myStr = "myStr";

const obj = {
  name: "Alan",
};

function DeleteProp(obj, myStr) {
    return delete obj.name;
};

console.log(DeleteProp(myStr))
*/
/* Ex.12 
    Write the function OlderMovie that finds the older movie in the array
*/
/*
function olderMovie(){
  for (i = 0; i < movies.year.length; i++) {
    return movies
  }
}
console.log(movies[i])
*/
/* Ex.13
    Write the function CountMovies that returns the number of movies into the array
*/
/*
function countMovies(movies) {
  let length = 0;
  for( let num in movies ) {
      if( movies.hasOwnProperty(num) ) {
          ++length;
      }
  }
  return length;
};

console.log(countMovies(movies))
*/

/* Ex.14
    Write the function OnlyTitles that creates an array with only the titles of the movies
*/
/*
// FIRST METHOD
function OnlyLetters(){
  for (let i=0; i<movies.length; i++){
    console.log(movies[i].Title);
  }
}
console.log(OnlyLetters())
// SECOND METHOD
/*
for (let obj of movies) {
console.log(obj.Title)
}
*/

/* Ex.15
   Write the function OnlyThisMillennium that returns only the movies produced in this millennium
*/
/*
function onlyThisMillenium(){
  for (let i=0; i < movies.length; i++){    
    if (parseInt(movies.Year)>2000);{
      console.log(movies[i].Year);
    }
  }
}
console.log(onlyThisMillenium())
*/
/* Ex.16 
    Write the function GetMovieById that receives an ID and returns the movie with the given ID
*/

/* Ex.17
    Write the function SumYears that returns the sum of the years the movie has been produced
*/

/* Ex.18
    Write the function SearchMovie that receives a string and returns all the movies with that string in the title
*/

/* Ex.19
    Write the function SearchAndDivide that receives a string and returns an object with an array "match" with all the movies that contains the title and another array "nonMatch" with the other movies
*/

/* Ex.20
   Write the function DeleteX that receives a number and returns an array without the element in that position
*/
/*
function deleteX() {
  let arr = [0, 1, 2, 3]
  return [arr.slice([3])]
}
console.log(deleteX())
*/
// JS Advanced

/* Ex.21
  Create a function HalfTree that recives the height creates an "*" half tree with that height
  Example:
  HalfTree(3)
  *
  **
  ***
*/

/* Ex.22 
  Create a function Tree that receives the height and creates an "*" tree with that height
  Example: 
  Tree(3)
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function IsItPrime that receives a number and return true if the number is a prime number
*/
/*
function isItPrime(num) {

  if (num === 2) {
    return true;
  }
  else if(num > 1){
    for (var i = 2;  i < num; i++) {

      if (num % i !== 0 ) {
        return false;
      }

      else if (num === i * i) {
        return true
      }

      else {
        return true;
      }
    }
  }
  else {
    return false;
  }

}
&/
console.log(isItPrime(33));
/* Movies array is an example array, used for the exs. Don't change it :)  */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
]


// EX 16
/*
let iD = "tt4154796";
function getMovieById(iD){
for (i = 0; i < movies.length; i++) {
   console.log("Movie#", i + 1);
   console.log(movies[i].imdbID === iD) 
}
}
console.log(getMovieById(iD))
*/
/*
// EX 18
function searchMovie(){
  for (let obj of movies){
    if (obj.Title.includes("lord of"))
    console.log(obj.Title);
  }
}
console.log(searchMovie())
*/
/*
let string = "Lord of";
function searchMovie(string) { 
  for (i=0; i<movies.length; i++){
  console.log(string === movies[i].Title);
  }
}
console.log(searchMovie(string));
*/
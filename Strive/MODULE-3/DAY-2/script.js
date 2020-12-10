
// EXERCISE 1
/*
const calculateSumOfInteg = function(n1, n2) {
    let sum = n2 + n2
    if (n1 === n2) {
        return 3*(sum)
    } else {
        return "not the same"
    }
}
*/

// EXERCISE 2

/* const checkInteg = function(n1, n2) {
    let sum = n1 + n2
    if ((n1 === 50 || n2 === 50) || (sum === 50)) {
        return true
    } else {
        return false
    }
} */


// EXERCISE 3
/*
const removeAndReturnString = function() {
    let string = "remove a character and return new string"
    let newStr = string.substr(7, 9);
    console.log(newStr)
}
removeAndReturnString()
*/

// EXERCISE 4

/* const biggestInteg = function(n1, n2, n3) {
    let array = []
    array.push(n1, n2, n3)
    console.log(array)
    return Math.max(...array)
} */

// EXERCISE 5
/*
const range = function(a, b) {
    for (let i = 1; i <=100; i++) {
        if (((a > 40 && a < 60) || (a > 70 && b <= 100)) || ((b > 40 && b < 60) || (b > 70 && b <= 100))) {
            return "a or b in range"
        } else {
            return "a & b not in range"
        }
    } 
}

*/

// EXERCISE 6

/* const copiesOfStr = function(str, times) {
    let arr = []
    let newArray = new Array (times + 1).join(str + ", ")
    arr.push(newArray)
    console.log(arr)
}

console.log(copiesOfStr('Alan', 3)) */


// EXERCISE 7

/* const isLosOrNew = function(cities) {
    for (let i = 0; i < cities.length; i++) {
        if ((cities[i].includes("Los")) || (cities[i].includes("New"))) {
            let cityName = cities[i]
            console.log(cityName)
    } 
}
}
isLosOrNew(["New york", "Los Angeles", "New jersey"]) */


// EXERCISE 8
/* 
const sumElementsOfArray = function(array) {
    let sum = array[0] + array[1] + array[2]
    return sum
}

sumElementsOfArray([1, 2, 3])
 */

// EXERCISE 9
/* 
const containsOneOrThree = function() {
    let arrayOfInteg = [4, 3]
    if ((arrayOfInteg.includes(1)) || (arrayOfInteg.includes(3))) {
        return true
    } else {
        return false
    }
}

console.log(containsOneOrThree())
 */

// EXERCISE 10 
/*
const doesNotContainOneOrThree = function(){
    let arrayOfInteg = [1, 3]
    if ((!arrayOfInteg.includes(1)) ||  !arrayOfInteg.includes(3)) {
        return true
    } else {
        return "contains 1 or 3"
    }
}

console.log(doesNotContainOneOrThree())
*/

// EXERCISE 11 
/* 
const longestString = function(arrayOfStr) {
    let longestStr = arrayOfStr[0]
    for (let i = 0; i < arrayOfStr.length; i++) {
        if (arrayOfStr[i].length > longestStr.length) {
            longestStr = arrayOfStr[i]
        }
    } return longestStr
}
 */


// EXERCISE 12
/*
const typesOfAngles = function(angle) {
    if (angle > 0 && angle < 90) {
        return "is an acute angle"
    } else if (angle === 90) {
        return "is a right angle"
    } else if (angle > 90 && angle < 180) {
        return "is a btuse angle"
    } else if (angle === 180) {
        return "is a straight angle"
    } else {
        return "no type of angle found"
    }
}

console.log(typesOfAngles(90))
*/

// EXERCISE 13
/* 
const greatestElementOfArray = function(array) {
    let indexOfGreatest = array.indexOf(Math.max(...array))
    console.log(indexOfGreatest)
}
 */


// EXERCISE 14
/* 
const largestEvenNum = function() {
    let numbers = [23, 5, 76, 180, 7, 44]
    let evenNumbers = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 != 1) {
            evenNumbers.push(numbers[i])
        }
    } let greatestEvenNum = Math.max(...evenNumbers)
    console.log(greatestEvenNum)
}

largestEvenNum()
 */

 // EXERCISE 15
/* 
 const is50OrsumIs50 = function(n1, n2) {
     if ((n1 === 50 || n2 === 50) || (n1 + n2 === 50)) {
         return true
     } else {
         return false
     }
 }
 */

 // EXERCISE 16 
/* 
 const isPositiveOrNegative = function(n1, n2) {
     if (n1 > 0 && n2 < 0) {
         return "n1 is positive, n2 is negative"
     } else if (n1 < 0 && n2 > 0) {
         return "n1 is negative, n2 is positive"
     } else if (n1 > 0 && n2 > 0) {
         return "Both numbers are positive"
     } else if (n1 < 0 && n2 < 0) {
         return "Both numbers are negative"
     } else {
         return "Unknown"
     }
 }
  */

  // EXERCISE 17 
/* 
  const upOrLow = function(newStr) {
      let firstThreeChars = newStr.substring(0, 3)
      let restOfChars = newStr.substring(3, newStr.length)
      if ((firstThreeChars.toLowerCase()) && (restOfChars.toUpperCase())) {
          return firstThreeChars + restOfChars
      } else if (newStr.length < 3) {
          return newStr.toUpperCase()
      } else {
          return false 
      }
  }
*/

// EXERCISE 18 
/* 
const isTheSumInRange = function(n1, n2) {
    let sum = n1 + n2
    if (sum > 50 && sum < 80) {
        return 65
    } else {
        return 80
    }
}
 */
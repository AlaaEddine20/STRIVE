
// EXERCISE 1
/*
const calculateSumOfInteg = function() {
    let integOne = 4
    let integTwo = 4
    let sum = integOne + integTwo
    if (integOne === integTwo) {
        return 3*(sum)
    } else {
        return "not the same"
    }
}

*/

// EXERCISE 2
/*
const checkInteg = function() {
    let integOne = 25
    let integTwo = 25
    let sum = integOne + integTwo
    if ((integOne === 50 || integTwo === 50) || (sum === 50)) {
        return true
    } else {
        return false
    }
}
*/

// EXERCISE 3
/*
const removeAndReturnString = function() {
    let string = "remove a character and return new string"
    let newStr = string.replace('a', '');
    console.log(newStr)
}
removeAndReturnString()
*/

// EXERCISE 4
/*
const biggestInteg = function() {
    let arrayOfInteg = [1, 2, 3]
    return Math.max(...arrayOfInteg)
}

console.log(biggestInteg())
*/

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

console.log(range(39, 71))
*/

// EXERCISE 6



// EXERCISE 7
/*
const isLosOrNew = function() {
    let cities = ["New Jersey", "Boston", "Los Angeles", "Miami", "New York", "Los Gatos"]
    
    for (let i = 0; i < cities.length; i++) {
        if ((cities[i].includes("Los")) || (cities[i].includes("New"))) {
            console.log(cities[i]) 
        } 
    }
}

isLosOrNew()
*/

// EXERCISE 8
/*
const sumElementsOfArray = function() {
    let arrayOfInteg = [7, 12, 22]
    let sum = arrayOfInteg[0] + arrayOfInteg[1] + arrayOfInteg[2]
    
    console.log(sum)
}

sumElementsOfArray()
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

const longestString = function() {
    let arrayOfStr = ["i am the longest", "no, i am the longest", "you mortals, I AM the longest and BIGGEST"]
    let longestStr = arrayOfStr[0]
    for (let i = 0; i < arrayOfStr.length; i++) {
        if (arrayOfStr[i].length > longestStr.length) {
            longestStr = arrayOfStr[i]
        }
    } return longestStr
}

console.log(longestString())
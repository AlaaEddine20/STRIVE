
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
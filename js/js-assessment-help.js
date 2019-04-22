
<!--INSTRUCTOR SOLUTIONS-->







// 1. Write a function named `isNegative` that accepts a number and returns `true` or `false` based on whether the input is negative.
//
// isNegative(-1) // true
// isNegative(-5) // true
// isNegative(0) // false
// isNegative(6) // false

function isNegative(number) {
    return number < 0;
}

//
//
//
//
// 2. Write a function named `average` that accepts an array of numbers and returns
// the average of those numbers.
//
// average([1, 2, 3]) // 2
// average([4, 6, 8, 10, 12]) // 8
// average([1, 2]) // 1.5

function average(arr) {
    var output = 0;
    for (var i = 0; i < arr.length; i +=1) {
        output += arr[i]
    }
    return output / arr.length;
}

//
// 3. Write a function named `countOdds` that accepts an array of numbers and
// returns the number of odd numbers in the array.
//
// countOdds([1, 2, 3]) // 2
// countOdds([4, 6, 8, 10]) // 0
// countOdds([1, 2, 1, 1]) // 3

function countOdds(arr) {
    var output = 0;

    arr.forEach(function(number){
        if (number % 2 !== 0){
            output += 1;
        }
    });
    return output
}

//
// 4. Write a function named `convertNameToObject` that accepts a string that
// contains a first name and last name separated by a space character, and returns an
// object with properties `firstName` and `lastName`.
//
// convertNameToObject('Harry Potter') // {firstName: 'Harry', lastName: 'Potter'}
// convertNameToObject('Ron Weasley') // {firstName: 'Ron', lastName: 'Weasley'}
//

function convertNameToObject(str){
    var output = {};

    var arr = str.split(" ");

    output.firstName = arr [0];
    output.lastName = arr [1];

    return output;
}

// 5. Write a function named `fiveTo` that accepts a number and returns an array of
// the integers from 5 up to and including the passed number.
//
// fiveTo(5)   // [5]
// fiveTo(10)  // [5, 6, 7, 8, 9, 10]
// fiveTo(-2)  // [5, 4, 3, 2, 1, 0, -1, -2]
// fiveTo(6)   // [5, 6]
//

function fiveTo(number) {
    var output = [];
    if (number === 5){
        return [5];
    } else if (number > 5){
        for (var i = 5; i <= number; i += 1){
            output.push(i);
        }
    } else {
        for (var i = 5; i >= number; i -= 1){
            output.push(i);
        }
    }
    return output;
}

// 6. Write a function named `upperCaseLastNames` that accepts an array of objects
// where each object has properties `firstName` and `lastName` and returns the
// same array of objects with each last name capitalized
//
// var names = [
//     {firstName: 'Harry', lastName: 'Potter'},
//     {firstName: 'Ron', lastName: 'weasley'},
//     {firstName: 'Hermione', lastName: 'granger'}
// ];
//
// upperCaseLastNames(names);
/*
[
{firstName: 'Harry', lastName: 'Potter'},
{firstName: 'Ron', lastName: 'Weasley'},
{firstName: 'Hermione', lastName: 'Granger'}
]
*/

function capitalize(str) {
    return str[0].toUpperCase() + str.substring(1);
}

function upperCaseLastNames(names) {
    names.forEach(function (name) {
        name.lastName = capitalize(name.lastName);
    });

    upperCaseLasteNames(names);

    return names;
}
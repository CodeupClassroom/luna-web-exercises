"use strict";

var userNum;

function isValid(input) {
    input = parseFloat(input);
    var isNumeric = !isNaN(input);
    var isOdd = input % 2 !== 0;
    var isInCorrectRange = input >= 1 && input <= 50;
    return isNumeric && isOdd && isInCorrectRange;
}

function getUserNumber() {
    var userNum;
    while(true) {
        userNum = prompt('Please enter an odd number between 1 and 50');
        if (isValid(userNum)) {
            break;
        }
        alert('INVALID NUMBER!');
    }
    return userNum;
}

function createOddNumberMessages(userNum) {
    console.log('Number to skip is: ' + userNum);
    console.log('');
    for (var i = 1; i <= 50; i += 1) {
        if (i === parseFloat(userNum)) {
            console.log('Yikes! Skipping number: ' + userNum);
            continue;
        }
        if (i % 2 === 0) {
            continue;
        }
        console.log('Here is an odd number: ' + i);
    }
}

userNum = getUserNumber();
createOddNumberMessages(userNum);

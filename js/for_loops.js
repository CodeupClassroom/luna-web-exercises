"use strict";

function showMultiplicationTable(num) {
    // create a loop that runs 10x
    for (var i = 1; i < 11; i += 1) {
       console.log(num + ' x ' + i + ' = ' + num * i);
    }
}

// showMultiplicationTable(7);

// taken from - https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function createTenRandomEvenOddMessages() {
    var random, evenOddString;
    for (var i = 0; i < 10; i += 1) {
        random = randomIntFromInterval(20, 200);
        evenOddString = (random % 2 === 0) ? 'even' : 'odd';
        console.log(random + ' is ' + evenOddString);
    }
}

// createTenRandomEvenOddMessages();

// for (var i = 1; i <= 9; i += 1) {
//     console.log(String(i).repeat(i));
// }

// for (var i = 100; i > 0; i -= 5) {
//     console.log(i);
// }



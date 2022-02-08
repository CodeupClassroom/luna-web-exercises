// //***************WHILE LOOPS*************************
// /!*
//     While loop syntax:
//
//         while (conditionIsTrue) {
//             do something...
//         }
//
//     Used to repeat a block of code until a condition changes to break the loop
//     Likely used when the number of iterations is unknown
//
//     Diagram ***Curriculum***
//
// *!/
//
// //!**********BASIC EXAMPLE***************************
//
// // var x = 1;
// //
// // while(x < 10){
// //     console.log(x);
// //     x += 1;
// // }
//
// //!*****************POSSIBLE USE CASES************************
//
// // while(gameRunning) {
// //     drawCanvas(); // see snake game
// // }
//
// // while(timerOn) { // elsewhere: a button when clicked, sets timer to off
// //     countUp;
// // }
// //
// // while(guess !== password) {
// //     guess = generateGuess();
// // }
// //
// var password = "Open Sesame";
// var guess = "";
// while(guess !== password) {
//     guess = prompt("Please enter the password.");
// }
//
// // condition never executes
//
// //!******************USE THIS***********************
// var x = 10;
// while (x > 5) {
//     console.log(x);
//     x--;
// }

// // infinitely executes
//
// var x = 5;
// while (x !== 4) {
//     x++;
//     console.log(x);
//
//     if (x === 10){
//         break;
//     }
// }
//
// //!*****GO TO INFINITE LOOP HTML*******
//
//
// //!***********WHILE LOOP PRACTICE EXERCISES**************************************
//
// //!**********WHILE PRACTICE 1****************
// // !! make a loop to go from 20 to 50 with increments of ten !!
//
// //!**********WHILE PRACTICE 2****************
// // !! write a program that will keep running until the user clicks ok !!
//
// //!**********WHILE PRACTICE 3****************
// //create a function which puts on a coat if it's cold outside
// //use a while loop
//
// function putOnCoat(){
//
//     let isCold = true;
//
//     let counter = 0;
//
//     while (isCold){
//
//         console.log("I need a coat!");
//
//         counter++;
//
//         if(counter === 10)
//         {
//             isCold = false;
//             takeOffCoat();
//         }
//     }
// //When should I tell the loop it's no longer cold outside?
//
// }
//
// function takeOffCoat(){
//      console.log("Taking this coat off.");
// }
//putOnCoat();
//
//
// //!******DO WHILE**********
//
// //Create a function that makes your $100k Tesla speed until the police are looking
//
// function rickyBobbyGoFast(areCopsLooking){
//
//     let copsAreLooking = areCopsLooking;
//
//     do{
//         alert('I GO REAL FAST!');
//
//         let response = prompt('Is that a cop?! Yes or No');
//
//         if(response.toUpperCase() === 'YES'){
//             copsAreLooking = true;
//         }
//
//     }while (!copsAreLooking)
//
//     alert('WEEE WOOOO WEEE WOOOOOOOOO!!!!');
// }
//
// rickyBobbyGoFast(false);
//
//
// //!************FOR LOOPS********************
//
//
// /!*
//     For loop diagram ***Curriculum***
//
//     For loop syntax:
//
//         for (initialization; test; iteration) {
//             do something a set number of times
//         }
//
//     Used to perform an action a certain number of times
//
// *!/
//
// // with incrementer (display the numbers 0 through 10 in 1's)
//
// /!*for (var i = 0; i <= 10; i += 1) {
//     console.log(i);
// }*!/
//
// //$$$ NOTE: YOUR INCREMENTER CAN GO UP OR DOWN!
//
// // with decremented (display numbers 20 down to 10 in 1's)
//
// for (var i = 20; i >= 10; i -= 1) {
//     console.log(i);
// }
// web example
// /!*
//     Display a list of weather info by year up to 1983
//     in which a region experienced drought.
//         - Skip any years (continue) that do not meet the drought criteria.
//         - Once 1984 weather data is reached, break the loop
//  */
//
// buildHTMLWeatherYear(data);
//
// var outputHTML = "";
// for (var i = 0; i <= weatherCollection; i++) {
//     if (weatherCollection[i].year > 1984) {
//         break;
//     }
//     if (weatherCollection[i].droughtConditions === false) {
//         continue;
//     }
//     outputHTML += buildHTMLWeatherYear(weatherCollection[i]);
// }
//
// displayInBrowser(outputHTML);

//Create a function which will:
//console log 'fizz' on every multiple of 3
//console log 'buzz' on every multiple of 5
//console log 'fizzbuzz' on every shared multiple of 3 and 5
//end the loop at.... well.. you decide!

// function getFizzBuzz(){
//
//     for (let i = 0; i < 100; i++){
//
//         if ((i % 3 === 0) && (i % 5 !== 0)){
//             console.log(`${i}: fizz`);
//         }else if ((i % 5 === 0) && (i % 3 !== 0)){
//             console.log(`${i}: buzz`);
//         }else if (i % 3 === 0 && i % 5 === 0){
//             console.log(`${i}: fizzbuzz`);
//         }
//     }
// }


// nested for loops

// for (var i = 0; i <= 10; ++i) {
//     console.log("Badgers, badgers, badgers, badgers");
//     // console.log("i is: " + i);
//     for (var j = 0; j <= 1; ++j) {
//         console.log("Mushroom");
//         // console.log("j is: " + j);
//     }
//     // console.log("after inner loop")
// }
// console.log("after output loop");

// ================================ BREAK / CONTINUE

// break - keyword to end the execution of a loop

// var y = 0;
//
// while (true) {
//     if (y === 10) {
//         console.log("End of loop!");
//         break;
//     }
//     ++y;
//     console.log(y);
// }

// web example

// var password;
//
// while (true) {
//     password = prompt("Please enter the password: ");
//     if (password === "123") {
//         break;
//     }
// }
//
// console.log("Access granted.");

// game example

// var gameRunning = true;
//
// var lives = 3;
//
// while (gameRunning) {
//     // play game
//     if (lives === 0) {
//         console.log("Game over");
//         break;
//     }
// }

// continue

// for (var i = 1; i <= 10; i += 1) {
//    if (i === 5) {
//        continue;
//    }
//    console.log(i);
// }

// var y = 0;
//
// while (true) {
//     y++;
//     if (y === 100) {
//         console.log("End of loop!");
//         break;
//     }
//     if (y % 5 === 0) {
//         continue;
//     }
//     console.log(y);
// }

//********************EXTRA PRACTICE*******************************
"use strict";
/*********************************************
 *                   WHILE LOOPS
 *********************************************/

// A while loop will run WHILE a certain condition is true
// while (condition) {
//  code runs.
// }


//TODO TOGETHER: Create a while loop that counts up to 10 (non-inclusive) by 1
// (0, 1, 2...9)


//TODO TOGETHER: Create a while loop that counts down from 20 to 0 (inclusive) by 1
// (20, 19, 18...0)


//TODO TOGETHER: Create a while loop that counts up to 20 (inclusive) by 2s (0, 2, 4...)
// (0, 2, 4...20)


//TODO: Create a while loop that counts to 100 (inclusive) in increments of ten:
// (10...20...30...)


//TODO: Create a while loop that counts down from 50 to 1 (inclusive) in increments of 1:
// (50, 49, 48, 47, 46 .... 1)


//TODO TOGETHER: Create a while loop that asks the user to confirm: "Would you like to exit?"


/*********************************************
 *               DO-WHILE LOOPS
 *********************************************/
// A do/while loop will run at least once.

// do {
//  Code to be run.
// } while (condition)


// var i = 10;
//
// while (i < 10) {
// 	console.log('while loop iteration #' + i);
// 	i++;
// }


// TODO TOGETHER: Why doesnt the example above run?
// >> Answer: Because i < 10 is never true

// TODO TOGETHER: Refactor the example above using a do-while loop. What behavior do we notice?


//TODO TOGETHER: Create a do-while loop that asks the user to confirm: "Would you like to exit?" What difference do you notice?


//TODO TOGETHER: Create a do-while loop that counts up to 20 (inclusive) by 2s (0, 2, 4...)
// (0, 2, 4...20)


//TODO: Create a do-while loop that prompts the user for a color and continues to prompt until the string passed is "blue"


/*********************************************
 *               FOR LOOPS
 *********************************************/
// For loops: Loops that are designed to run a given number of times.

// for (/*initialization*/; /*condition*/; /*increment*/) {
// 	// body
// }

//TODO TOGETHER: Explore basic for loop syntax

// TODO TOGETHER: Write a for loop that loops through numbers 0 - 5 (inclusive);

// TODO TOGETHER: Why are loops beneficial?
// To do things over and over again without repeating yourself!


// TODO TOGETHER: Using a for loop, log all even numbers 0 - 100 (inclusive);


// TODO: Using a for loop, log all numbers divisible by 5, from 0 - 100;


// TODO: Using a for loop, complete the FizzBuzz challenge:
//  Your program should count up to 100.
//  For numbers divisible by 3, log "Fizz"
//  For numbers divisible by 5, log "Buzz"
//  If divisible by 3 and 5, log "FizzBuzz"
//  All other cases, just log the number.


/*********************************************
 *              BREAKS & CONTINUES
 *********************************************/
// We can get a loop to stop using break;

// var numberToStopAt = 5;
//
// for (var i = 1; i < 100; i++) {
//
//     console.log('Loop counter is: ' + i);
//
//     if (i === numberToStopAt) {
//         console.log('We have reached the stopping point: break!');
//         // use the break keyword to exit from the while loop
//         break;
//         // nothing after the break will get processed
//         console.log('You will never see this line.');
//     }
// }


// We can get an iteration to skip using continue;
// for (var i = 1; i < 100; i++) {
//
//     if (i % 2 !== 0) {
//         // skipping all odd numbers;
//         console.log("Skipping an odd number!");
//         continue;
//         console.log("test");
//     }
//     // console.log("You won't see this if the number is odd");
//     console.log('Here is a lovely even number: ' + i);
//
// }









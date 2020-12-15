"use strict";

// Conditionals: Code that runs when we meet certain requirements.

// Today we'll be covering if, if/else, if/else if/else statements, ternary operators and switch statements.

// IF STATEMENTS - Code that runs when a condition is met.

// if (condition) {
//     this code will run if our condition is true;
// }

/** Consider the sentence: "When I run out of milk, I go to the store to get more." */
// Condition: Running out of milk
// Action: Get more

var outOfMilk = false;

if (outOfMilk) {
    console.log("Headed to HEB for milk.");
}

if (outOfMilk === false) {
    console.log("Time to enjoy some cereal!");
}


/** TO-DO: I want to make a block of code that logs a message to the console when a variable is set to the number 5. */

// var mightBeFive = 5;
//
// if (mightBeFive === 5) {
//     console.log("Yep, mightBeFive was set to the value of 5.");
// }
//
// console.log("You'll always see me.");

// We can also use our conditional logic in functions.

/** TO-DO: I want to build a function that returns a string when I pass a number as an argument.*/

// function isItANumber(parameter) {
//     if (typeof parameter == "number") {
//         return "Yep, "+ parameter +" is a number."
//     }
// }

function isItAString(parameter) {
    if (typeof parameter == "string") {
        return "Yep, "+ parameter +" is a string."
    }
}

console.log(isItANumber(74));
console.log(isItANumber(3.14));
console.log(isItANumber("17"));
console.log(isItANumber("Jim"));

console.log(isItAString(74));
console.log(isItAString(3.14));
console.log(isItAString("17"));
console.log(isItAString("Jim"));


// IF/ELSE Statements: Code that runs when a condition is met, but will also run with a default state.

// if (condition) {
//     i run when the condition evaluates to true;
// } else {
//     otherwise i run;
// }

/** Consider the following sentence: "If I owned one, I'd get milk from my cow when I ran out. But since
 * I don't, I'll go to the store instead." */

// How would we write this as a if/else code block?

var hasACow = false;

if (hasACow) {
    console.log("Milking Bessie!");
} else {
    console.log("Going to Randall's.")
}

if (outOfMilk) /* outOfMilk === true */ {
    console.log("Headed to HEB for milk.");
} else {
    console.log("Time to enjoy some cereal!");
}

/** TO-DO: Let's refactor our previous isItANumber function. Now I want to also return string when we aren't passed a number. How do I refactor our function? */

function isItANumber(parameter) {
    if (typeof parameter == "number") {
        return "Yep, "+ parameter +" is a number."
    } else {
        return "Nope, "+ parameter +" ain't a number."
    }
}


// IF/ELSE IF/ELSE = A chain of if/else statements to give different results for different conditions.

// if (condition1) {
//     run this code;
// } else if (condition2) {
//     since the first condition wasn't met, and the second was, I run;
// } else {
//     since neither the first or second conditions were met, I run by default.
// }

/** Consider the following sentence: "If I owned a cow, I'd get milk from it when I ran out. But since I
 * don't, I could go to the store, but luckily, I own a goat, so I can get milk from it instead." */

// How would we write this as a if/else if/else code block?

var hasAGoat = true;
hasACow = true;

if (hasACow) {
    console.log("Milking Betty.");
} else if (hasAGoat) {
    console.log("Milking Billie.");
} else {
    console.log("Going to Albertson's.");
}

// ==== How to get the conditions to run independent of each other:

if (hasACow) {
    console.log("Milking Betty.");
}

if (hasAGoat) {
    console.log("Milking Billie.");
}

if (!hasACow && !hasAGoat){
    console.log("Going to Albertson's.");
}


/** TO-DO: Let's make a function that takes in a number and will return three different strings for an
 * argument lesser than, greater than, equal to 35, or isn't a number at all. */

function isThisThirtyFive(parameter) {
    var isParameterANumber = typeof parameter === "number";
    if (parameter === 35) {
        return "Yep, that's 35 alright.";
    } else if (isParameterANumber && parameter < 35) {
        return parameter + " is less than 35.";
    } else if (isParameterANumber && parameter > 35) {
        return parameter + " is greater than 35.";
    } else {
        return "Argument passed is not a number.";
    }
}

console.log(isThisThirtyFive(34));
console.log(isThisThirtyFive(36));
console.log(isThisThirtyFive(35));
console.log(isThisThirtyFive("35"));
console.log(isThisThirtyFive("88"));
console.log(isThisThirtyFive("Jim"));

// NESTED CONDITIONALS - Insert your Pimp My Ride reference here.
// A conditional inside of a conditional
// if (condition) {
//      if (nestedCondition) {
//          This code will only run if BOTH conditions are true.
//      }
// }

/** Consider the following: "If I lived on a farm, I'd want my milk from my animals. If I had a cow or a goat, I'd
 * get my milk from them. Unfortunately, I live downtown, so I suppose I'll head to the bodega instead." */

var liveOnFarm = true;
hasAGoat = true;
hasACow = false;

if (liveOnFarm) {
    if (hasACow) {
        console.log("Getting milk from Matilda");
    } else if (hasAGoat) {
        console.log("Getting milk from Gruff");
    } else {
        console.log("Guess I'll starve....");
    }
} else {
    console.log("Going to Royal Blue for milk.");
}

function isThisThirtyFiveNested(parameter) {
    if (typeof parameter === "number") {
        if (parameter < 35) {
            return parameter + " is less than 35.";
        } else if (parameter > 35) {
            return parameter + " is greater than 35.";
        } else {
            return "Yep, that's 35 alright.";
        }
    } else {
        return "Argument passed is not a number.";
    }
}

console.log(isThisThirtyFiveNested(34));
console.log(isThisThirtyFiveNested(36));
console.log(isThisThirtyFiveNested(35));
console.log(isThisThirtyFiveNested("35"));
console.log(isThisThirtyFiveNested("88"));
console.log(isThisThirtyFiveNested("Jim"));

// TERNARY OPERATOR: A operation to set a value based on boolean evaluation.

// var message = (booleanValue) ? "Operation was true." : "Operation was false.";

/** Consider the following statement: "Are we out of milk? If we are: I'll head to the store, but if we
 * do have milk: I want to make a bowl of cereal." */

// How would we write this as a ternary operator?

var doWeHaveMilk = true;

var action = (doWeHaveMilk) ? "Let's have some Trix." : "Heading to Giant Eagle for milk.";

console.log(action);

/** TO-DO: Let's look back at the if/else version of our isItANumber function. Let's refactor our if/else as a ternary expression. */

// function isItANumber(parameter) {
//     if (typeof parameter == "number") {
//         return "Yep, "+ parameter +" is a number."
//     } else {
//         return "Nope, "+ parameter +" ain't a number."
//     }
// }

var num = 17;
var message = (typeof num == "number") ? "Yep, that's a number." : "Nope, that's not a number";

console.log(message);

num = parseFloat(prompt("give number"));
message = (!isNaN(num)) ? "Yep, that's a number." : "Nope, that's not a number";

console.log(message);

// SWITCH STATEMENT: A statement with multiple conditions that will trigger based on the value of a variable.

var color = prompt("What is your favorite color?").toLowerCase();

switch(color) {
    case "green":
        alert("What a coincidence, that's my favorite!");
        break;
    case "orange":
        alert("That's my brother's favorite color!");
        break;
    default:
        alert(color + " is a weird color, my dude.");
        break;
}

/** Consider the following sentence: "I don't have a cow, goat, or camel. I guess I'll have to go to the
 * store for milk." */

// How would we write this as a switch statement?

var animal = "cow";
switch (animal) {
    case "cow":
        console.log("Milking the cow.");
        break;
    case "goat":
        console.log("Milking the goat.");
        break;
    case "camel":
        console.log("Milking the camel.");
        break;
    default:
        console.log("Headed over to Aldi for milk.");
        break;
}

/** TO-DO: Let's make a switch statement with a prompt for the user to input their favorite sandwich meat. If they like 'olive loaf' we should return an alert to congratulate them on their bold choice, and if they choose 'brisket' we should return a different alert: this one for congratulating them on the 'right' answer. All other responses should trigger an alert stating apathy. */

var lunchMeat = prompt("What kinda meat do you like on your sandwich?").toLowerCase();

switch(lunchMeat) {
    case "olive loaf":
        alert("You are a braver man than I.");
        break;
    case "brisket":
        alert("Congratulations, you are correct.");
        break;
    default:
        alert("Not my favorite, but doesn't sound bad.");
        break;
}

// Let's work on the exercise!
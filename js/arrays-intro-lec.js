"use strict";
(function () {

    /**
     * Audience participation: "Hey David, what's an array?"
     */

    // An array is a collection of data. Data held within an array is held in an order.

    /**
     * Audience participation: "But David, how do I make an array?"
     */

        // Easy: we use square brackets!

    var testArray = [];

    // Our testArray variable has now been declared, but it is an empty array. To declare an array with information inside of it, we would do the following.

    var instructors = ["David", "Justin", "Casey E.", "Casey F.", "Vivian", "Sophie", "Kenneth", "Ryan", "Maggie", "Ravinder", "Zach", "Faith", "Fernando", "Douglas", "Daniel", "Cody The Duck"];

    // Our instructors variable has been assigned to an array with 4 elements inside of it. All 4 of our elements are strings, but not all elements have to be of the same type.

    var falsyValues = [false, null, "", 0, undefined, NaN];

    // Our falsyValues array has been declared with many different types of values.

    /**
     * Audience participation: "But David, what can I do with an array?"
     */

        // We can count the length of our arrays.

        // console.log(instructors.length);
        // console.log([].length);
        // console.log([1,1,1,1,1,1,1,1,9,9,9,9,0,0,0,10000000,11,22,23,24,34,45].length);

        // Here we're console logging the length of some arrays. Note that we can use this variable with a value of an array, or an array literal.

        // We can also access the individual values held in an array. It's important to note: the elements of an array are zero indexed, meaning
        // the first element is at index point 0, the second at index point 1, etc.

        // console.log(instructors[2]);
        // console.log([1,2,3][0]);
        // console.log(testArray[9]);

        // Once again, we can access the element of an array held in a variable, or of an array literal. Notice that if we try to access an
        // element of an array at an index larger than what the array has, we get a return of undefined.

        // We can use the elements of an array in many ways such as...

    var randomIndex = Math.floor(Math.random() * instructors.length);

    // alert("One of your instructors is named: " + instructors[randomIndex]);

    // Something I've neglected mentioning is what happens when we console log an array (mostly for a reason);

    // console.log(instructors);
    //
    // console.log("Howdy, " + instructors);

    // Notice how in the console it is noted as an array, and displays the information as an array itself.

    /**
     * Audience participation: "But David, how can I access all the elements of an array?"
     */

    // Iteration is the repeating of a process to achieve a desired outcome. When iterating through an array, we access each index of an
    // array to work with the elements held.

    // Let's start by listing out our instructors in the console. We can do this by using a for loop to cycle through every index of the
    // array.

    // for (var i = 0; i < instructors.length; i++) {
    //     console.log("One of your instructors is named: " + instructors[i]);
    // }

    // Note that we wanted i to increment only with it was less than the length of our instructor array, but not until it was equal to it.
    // Remember that an array is zero indexed, meaning our arrays start at the index of zero, and continue until an index point one number
    // lower than the length of the array. This saves us from accessing an undefined index, and performing an undesired behavior, as seen
    // below.

    // for (var k = 0; k <= instructors.length; k++) {
    //     console.log("One of your instructors is named: " + instructors[k]);
    // }

    // We can also use a for loop to create something a bit more complicated...

    function testAllForFalsy(array) {
        for (var j = 0; j < array.length; j++) {
            if (array[j]) {
                alert("Truthy value detected at index: " + j);
                return j
            }
        }
        alert("All values of array are falsy.");
        return -1;
    }

    // testAllForFalsy(falsyValues);

    // The above function iterates through an array to determine if all the values in it are false. When it detects a truthy value, it will
    // return the index of the first instance of a truthy value, and send an alert stating the index, If no truthy values are found, it will
    // return -1, indicating all the values are falsy, and send an alert confirming this conclusion.

    // We can also access every value of an array by using a forEach loop. These can be done like so:

    // arrayOfSorts.forEach(function(element, index, array){
    //      ... We do things here ...
    // })

    // Notice we pass an unnamed function into the forEach. It's worth noting that the names of the parameters for this 'callback function'
    // are ones that we can define ourselves, but what each parameter is meant to represent will not. The first parameter is meant to
    // represent an element from an array, specifically the one that we are accessing at the time of iteration. The second parameter is
    // optional, meaning it doesn't have to be included in order to construct a forEach loop, but will be for the index at the time of
    // iteration. The third and final parameter, is also optional, but will require the second to be present in order to be accessed, is for
    // the array itself.

    // Below are the examples of iteration with for loops rewritten with a forEach loop.

    // instructors.forEach(function(instructor) {
    //     console.log("One of your instructor's name is: " + instructor);
    // });

    // instructors.forEach(function(instructor, index, array) {
    //     if (index % 2 === 0) {
    //         console.log("Instructor #" + (index + 1) + " of " + array.length + " is named: " + instructor);
    //     }
    // });

    var numbers = [17, 22, 34, 52, 6];

    numbers.forEach(function (number, index) {
        if (index % 2 === 0) {
            console.log(number * 2);
        }
    });

    for (var y = 0; y < numbers.length; y += 2) {
        console.log(numbers[y] * 2);
    }

    var coolArray = ["Snowboarding", "Playing Chess", "Telling The People You Care About That They Matter To You", "Dancing"];

    var coolerArray = ["Pizza", "Sunlight", "Chris Evans"];

    coolArray.forEach(function (coolThing) {
        console.log("You know what's cool? " + coolThing + ".");
    })

    // Let's say that we wanted to use a defined function for this forEach loop!

    function youKnowCool(coolThing) {
        console.log("You know what's cool? " + coolThing + ".");
    }

    coolArray.forEach(youKnowCool);

    coolerArray.forEach(youKnowCool);


    // Any Questions???

})();
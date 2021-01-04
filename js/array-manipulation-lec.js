"use strict";

(function () {
    // So far we have talked about arrays as if they are static, and unchanging. This isn't the case. Today we'll be talking about how we can change our arrays without just reassigning the values.

    /**
     * Audience: "But David, why would I need to know about that?"
     */

    // In the future, we maybe interacting with our data in a way where we won't be able to see it directly, so it's important to keep these methods and functions in mind when we start to create bigger and bigger applications.

    /**
     * Audience: "So David, how can I add an element to an array?"
     */

        // Consider the following array:

    var cheeses = ["Brie", "Muenster", "Kraft American Singles", "Pepper Jack", "String", "Bleu de Gex"];

    // Quite the collection, if a bit incomplete. Where's cheddar?! Let add cheddar to the end of our array.

    cheeses.push("Cheddar");

    function logTheCheeses() {
        cheeses.forEach(function (cheese) {
            console.log(cheese);
        })
    }

    // POP QUIZ: What the return of the function above?!

    // logTheCheeses();

    // By using the push method I can add to the end of my array.

    // Well that's good and all, but let's also add Gouda to the front of the array.

    cheeses.unshift("Gouda");

    // logTheCheeses();

    // The unshift method will allow me to add to the front of my array.

    /**
     * Audience: "But David, surely we are able to add more than one element at a time."
     */

    // Yes, you're right. I can pass more than one argument through these two methods.

    cheeses.push("Colby Jack", "White Cheddar", "Havarti");
    cheeses.unshift("Red Windsor", "Ragstone", "Nut Rebel");

    // logTheCheeses();

    /**
     * Audience: "But David, just as you have showed us that we can create, can we not also
     * destroy? How can we remove an element from an array without reassigning the value."
     */

    // We have access to two methods that will allow us to remove elements as well.

    // You know, I haven't even tried Red Windsor. Let's remove it.

    cheeses.shift();

    // logTheCheeses();

    // Unlike unshift, shift will remove the first element of an array.

    // I never really like Havarti, let's axe that too.

    cheeses.pop();

    // logTheCheeses();

    // Pop will lop off the last element of an array.

    // Here's a trick, let's shift Ragstone from the array, again.

    var removedCheese = cheeses.shift();

    // console.log(removedCheese + " has been removed from cheeses array.");

    // It's important to note that the return from the pop and shift methods is the item being removed from the array.

    // Let's add Ragstone back to the end of the array.

    cheeses.push(removedCheese);

    // logTheCheeses();

    /**
     * Audience: "Golly David, there must be a way for me to locate an index of an element in an
     * array."
     */

    // Remember how with strings we were able to find the index of a pattern of characters?

    // console.log(removedCheese.indexOf("o"));

    // We can also use indexOf on arrays!

    // console.log(cheeses.indexOf("Kraft American Singles"));
    // console.log(cheeses.indexOf("Hot Dog"));

    // Now I can locate the index of an element even if I'm not looking at it!

    // We also have access to the lastIndexOf method.

    var myFavNumbers = [17,34,22,17,19,17];

    // console.log(myFavNumbers.indexOf(17));
    // console.log(myFavNumbers.lastIndexOf(17));

    // We can now see where the last occurrence of a piece of data occurs.

    /**
     * Audience: "Hey David, what might that method be useful for?"
     */

        // We can use this method in conjunction with the slice method.

        // The slice method will work a lot like the substring method, in that it can return a value from either one or two arguments

    var myFavCheeses = cheeses.slice(cheeses.indexOf("Muenster"), cheeses.indexOf("Kraft American Singles") + 1);

    // By passing one argument, we start at the specified index and return an array to the end.
    var otherCheeses = cheeses.slice(7);

    // logTheCheeses();
    // //
    // console.log(myFavCheeses);
    // //
    // console.log(otherCheeses);

    // Notice that using the slice method didn't remove the cheeses I liked from the cheeses array. By assigning the return from the slice method to a variable I was able to call on it value.

    function copyOfArray(array) {
        return array.slice();
    }

    var reversedCheeses = copyOfArray(cheeses).reverse();

    // cheeses.reverse();

    logTheCheeses();

    // reversedCheeses.forEach(function(cheese) {
    //     console.log(cheese);
    // });

    /**
     * Audience: "Hey David, that cheese array is a bit of a mess. Is there a way we can feng
     * shui that mess a bit prettier?"
     */

    cheeses.sort();

    // logTheCheeses();

    // console.log(myFavNumbers.sort().reverse());


    /**
     * "Hey David, now that I understand how arrays work a lot better, can we talk about how to change a string into an array."
     */

    var csvNames = 'David,Casey,Justin,Cody The Duck';

    var names = csvNames.split(",");

    console.log(names);

    csvNames = names.reverse().join(",");

    console.log(csvNames);





    // Secret time: Let's talk about joining two arrays together...

    var alphaTeam = ["David", "Sophie", "Daniel", "Maggie", "Cody The Duck", "Ryan"];
    var goldTeam = ["Fer", "Justin", "Zach", "Casey E.", "Akuma from Street Fighter", "Jason"];

    var staff = alphaTeam.concat(goldTeam);

    console.log(alphaTeam);
    console.log(goldTeam);
    console.log(staff);

    function removeAtIndex(array, index) {
        var arr1 = array.slice(0, index);
        var arr2 = array.slice(index + 1);
        return arr1.concat(arr2)
    }

    console.log(removeAtIndex(cheeses, cheeses.indexOf("Kraft American Singles")));

    logTheCheeses();

})();
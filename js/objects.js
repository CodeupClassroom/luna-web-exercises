(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: 'Justin',
        lastName: 'Reich'
    };

    // console.log(person.firstName) // "Justin"
    // console.log(person.lastName) // "Reich"
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function() {
        return 'Hello from ' + this.firstName + ' ' + this.lastName;
    }

    // console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    function calculateDiscount(amount, discountAmountThreshold, discountPercentage) {
        return (amount > discountAmountThreshold) ? amount * discountPercentage : 0;
    }

    function displayCurrency(amount) {
        return "$" + amount.toFixed(2);
    }

    var discountAmountThreshold = 200;
    var discountPercentage = .12

    shoppers.forEach(function(shopper){
        // Your program will have to display a line with the...
        var shopperName = shopper.name; // name of the person
        var amountPriorToDiscount = shopper.amount; // the amount before the discount
        var amountOff = calculateDiscount(amountPriorToDiscount, discountAmountThreshold, discountPercentage);
        var totalCost = amountPriorToDiscount - amountOff; // the amount after the discount
        var message = shopperName +
            ' purchased ' + displayCurrency(amountPriorToDiscount) +
            ' and is getting ' + displayCurrency(amountOff) + ' off the purchase price ' +
            'and is paying ' + displayCurrency(totalCost);
        console.log(message);
    }); // higher order function


    // Why use for loop over forEach and vice versa?????:

    /*

    For Loop Use Case (benefit: more flexible)

        Flexible iteration (forward/backward/skipping)
        Do anything a certain numbers (not just traversing an array data)

    For Each (benefit: more readable)

        Only can be used on arrays of data
        All of the elements in an array need to be accessed

     */


    // // each user's name
    // for (var i = 0; i < shoppers.length; i += 1) {
    //     console.log(shoppers[i].name);
    // }
    //
    // shoppers.forEach(function(shopper) {
    //     console.log(shopper.name);
    // });



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */


    var books = [
        {
            title: 'Title 1',
            author: {
                firstName: 'John1',
                lastName: 'Smith1'
            }
        },
        {
            title: 'Title 2',
            author: {
                firstName: 'John2',
                lastName: 'Smith2'
            }
        },
        {
            title: 'Title 3',
            author: {
                firstName: 'John3',
                lastName: 'Smith3'
            }
        }
    ];


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    // console.log('Book # 1');
    // console.log('Title: ' + books[0].title);
    // console.log('Author: ' + books[0].author.firstName + ' ' + books[0].author.lastName);
    // console.log('---');
    //
    // console.log('Book # 2');
    // console.log('Title: ' + books[1].title);
    // console.log('Author: ' + books[1].author.firstName + ' ' + books[1].author.lastName);
    // console.log('---');
    //
    // console.log('Book # 3');
    // console.log('Title: ' + books[2].title);
    // console.log('Author: ' + books[2].author.firstName + ' ' + books[2].author.lastName);
    // console.log('---');


    // for (var i = 0; i < books.length; i += 1) {
    //     var bookNumber = i + 1;
    //     console.log('Book # ' + bookNumber);
    //     console.log('Title: ' + books[i].title);
    //     console.log('Author: ' + books[i].author.firstName + ' ' + books[i].author.lastName);
    //     console.log('---');
    // }

    // books.forEach(function(book, index) {
    //     var bookNumber = index + 1;
    //     console.log('Book # ' + bookNumber);
    //     console.log('Title: ' + book.title);
    //     console.log('Author: ' + book.author.firstName + ' ' + book.author.lastName);
    //     console.log('---');
    // });

    // books.forEach(function(book, index, booksArr) {
    //     booksArr[index] = index + 1;
    // });
    //
    // console.log(books);



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, author) {
        var nameArr = author.split(' ');
        var firstName = nameArr[0];
        var lastName = nameArr[1];
        return {
            title: title,
            author: {
                firstName: firstName,
                lastName: lastName
            }
        }
    }

    // you could use the createBook function to combine information in multiple arrays together...

    var booksUsingFunction = [];

    var titles = ['Title 1', 'Title 2', 'Title 3'];
    var authors = ['John1 Smith1', 'John2 Smith2', 'John3 Smith3'];

    for (var i = 0; i < titles.length; i += 1) {
        booksUsingFunction.push(createBook(titles[i], authors[i]));
    }

    function showBookInfo(book, bookNumber) {
        console.log('Book # ' + (bookNumber + 1));
        console.log('Title: ' + book.title);
        console.log('Author: ' + book.author.firstName + ' ' + book.author.lastName);
        console.log('---');
    }

    books.forEach(showBookInfo);

})();
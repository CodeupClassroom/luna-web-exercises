"use strict";

// ========== Retrieve elements by id, class, tag name


//EACH CALL TO THE DOM STARTS WITH document.whateverMethodYouNeed()


//****************** getElementById - Returns a SINGLE element which matches the id given
    // (function(){
    //     let mainTitle = document.getElementById('main-title');
    //     console.log(mainTitle);
    //
    // })()


//***************** getElementByClassName - Returns an HTMLCollection of elements sharing the same CSS class name

    // (function(){
    //     let rows = document.getElementsByClassName('row');
    //     console.log(rows);
    // })()



//***************** getElementsByTagName - Returns an HTMLCollection of elements sharing the same TAG (ie: <p>)
//
//     **We pass in a string of the tag name of the elements instead of the actual tag: <main> becomes 'main'
//     var sections = document.getElementsByTagName('section');
//     console.log(sections);



// ************CONVERTING TO AN ARRAY****************
//This allows us access to array methods like push, pop, and foreach loops
//
//CAN BE DONE ON ANY HTMLCOLLECTION (what is returned from getElementsByClassName and getElementsByTagName)

//   (function(){
//
// // use Array.from(yourCollection) to convert to an array
//     let rows = Array.from(document.getElementsByClassName('row'));
//
// // we could use a forEach loop to look at each individual member of the array
//     rows.forEach((row) => {
//         //log each row individually
//         console.log("This is a single item in the array:");
//         console.log(row);
//     })
//
//     //we could also use a for loop!
//     for (var i = 0; i < rows.length; i++){
//         console.log("This is a single item in the array:");
//         console.log(rows[i]);
//     }
// })()
//


// // ========== querySelector() and querySelectorAll()


// Get a SINGLE element which has a CSS class of 'row'
    // var row = document.querySelector('.row');
    // console.log(row);
    //
// NOTE: querySelector() will pick the FIRST element which matches - use wisely!
    //


// Get ALL elements which have the matching CSS class of 'row'
    // var rows= document.querySelectorAll('.row');
    //     console.log(rows);


// We can stack selectors simply by putting a space in between them
//This one will find all elements of CSS class ids of 'first' OR 'last'
//     var inputs = document.querySelectorAll('#first, #last');
//
//     console.log(inputs);


// Get every h2 found inside of any div
//     var hTwos = document.querySelectorAll("div > h2");
//     console.log(hTwos);


// Get every div which has class of 'column' inside of sections with the class of 'row'
//     var columns = document.querySelectorAll("section.row > div.col");
//     console.log(columns);



// // ========== Direct access to form inputs

//*********** The document object allows us to directly access forms in a special way
//*********** Simply call document.forms['name attribute of the form']
// (function (){
//
// // We set a delay here so the page can load and give us a chance to put in a value before the code runs
//     setTimeout(function(){
// // Because on of our name attributes in the form is 'first' we can retrieve it as a property directly
//         let first = document.forms['user'].first;
//         console.log(first.value);
//
//     },3000)
//
// })()



// // ========== Accessing and modifying elements and properties

// get value of innerHTML
//     var title = document.getElementById("main-title");
//     console.log(title);
//
//     console.log(title.innerHTML);
//     console.log(title.innerText);
//
// // set value of innerHTML
//     title.innerHTML = "<em>Hi MOM!</em>";
//
// // append value to innerText (works the same with innerHTML)
//     title.innerHTML += " ...and hi Mom!";



 // ========== Accessing and modifying attributes

// Use hasAttribute('yourAttribute') to make sure before running the next parts
//     var cowboy = document.getElementById('cowboy');
//     console.log(cowboy.hasAttribute('data-1'));
//
// // get an attribute value
//     console.log(cowboy.getAttribute('data-1'));
//
// // create a new attribute or change a value of an existing attribute
//     cowboy.setAttribute('data-1', 'hello');
//     cowboy.setAttribute('data-test', 'testing');
//     console.log(cowboy.getAttribute('data-1'));
//
// // remove attribute
//     cowboy.removeAttribute("data-test");
//     console.log(cowboy);
//


//********** Let's change the 'src' attribute of our card's img tags

// (function(){
//     let cardImages = Array.from(document.getElementsByClassName('card-img-top'));

//     //sanity check to see the original src value
//     // console.log(cards[0].getAttribute('src'));
//
//     cardImages.forEach((card) => {
//         card.setAttribute('src', 'img/jazz-music-rubber-duck.jpg');
//     });

//     // now let's see the new src value
//     // console.log(cards[0].getAttribute('src'));
//
// })();



// ========== Accessing and modifying styles



// // single style
//      var jumbotron = document.querySelector('.jumbotron');
//     jumbotron.style.display = "none";
//     //instead of using style.property, you can access via style.['property-string']
//     jumbotron.style['font-family'] = "times";
//
// // apply multiple style changes
//     Object.assign(jumbotron.style, {
//         border: "10px solid black",
//         //if the property has a dash or special character, use quotes
//         "font-family": "times",
//         "text-decoration": "underline"
//     });
//
// // styling node list
//     var tableRows = document.getElementsByTagName("tr");
//     for (var i = 0; i < tableRows.length; i += 1) {
//         tableRows[i].style.background = "red";
//     }
//

//********* Let's have a little fun *************
// Here, we combine
// -BOM events (timeouts, intervals) &
// -DOM manipulation (retrieving elements, changing text, style, and attributes)

// setTimeout(function(){
//     // after 2 seconds, we change the main-title text
//     let mainTitle = document.getElementById('main-title');
//     mainTitle.innerText = "Incoming Transmission....";
//
//     // second timeout... building... suspense
//     setTimeout(function(){
//
//         // start swapping texts, font colors, and backgrounds
//         mainTitle.style.fontSize = '72pt';
//         mainTitle.style.fontFamily = 'Metal Mania';
//         mainTitle.textContent = 'COME AND KNEEL BEFORE ZOD! ZOD!';
//         mainTitle.style.color = 'red';
//
//         let jumbotron = document.querySelector(".jumbotron");
//         jumbotron.style.backgroundColor = 'black';
//
//         // using a boolean and setInterval(), we are able to swap the background and font color at a 500ms interval
//         let isRedText = true;
//         setInterval(function(){
//
//             //check the value of our boolean 'flag'
//             if(isRedText){
//                 mainTitle.style.color = 'black';
//                 jumbotron.style.backgroundColor = 'red';
//             }else{
//                 mainTitle.style.color = 'red';
//                 jumbotron.style.backgroundColor = 'black';
//             }
//
//             //notice that we flip isRed to be whatever boolean value it is currently not (using !)
//             //this is how we are able to continually swap the styles
//             isRedText = !isRed;
//
//         }, 500)
//
//         // now make it interesting! let's swap out the card images for something a little more.... appropriate
//         let cardImgs = Array.from(document.querySelectorAll('.card-img-top'));
//
//         // use a loop to iterate through the array, setting the 'src' attribute value for our new one
//         for (let i = 0; i < cardImgs.length; i++){
//             cardImgs[i].setAttribute('src',  'img/General_Zod_(circa_2018).png');
//         }
//     }, 2000);
// }, 2000);






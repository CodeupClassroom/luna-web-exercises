"use strict";

// https://developer.mozilla.org/en-US/docs/Web/Events

// ==========================  addEventListener()

// (function(){
//
//     //get the target
//     let jumbotron = document.querySelector("div.jumbotron");
//
//     //define the listener
//     let listener = function(){
//         jumbotron.style.backgroundColor = 'blue';
//         jumbotron.querySelector("#main-title").innerText = "DOM DOM DOM DOMMMMMMMM";
//     }
//
//     //bind the event, target, listener together
//     jumbotron.addEventListener("click", listener);
//
// })()


// ============================ Remove Event Listener
//
// (function(){
//         //get the target
//         let submitBtn = document.querySelector('#submitBtn');
//         console.log(submitBtn);
//
//
//         let logger = function(){
//             console.log("BAD NO BOOOOOO");
//         }
//
//         let alertTheUser = function(){
//             alert("You Did a Thing!");
//             submitBtn.removeEventListener("click", logger);
//         }
//
//         submitBtn.addEventListener("click", alertTheUser);
//
// })()


// ==========================  Register Additional Events

// when a cursor hovers over a paragraph, change the text color, font-family, and make larger

// target the node
// add event listener for mouseover event to target
// in listener change styling for paragraph
// var paragraph = document.getElementsByTagName('p')[0];
// paragraph.addEventListener('mouseover', function() {
//     paragraph.style.color = "red";
//     paragraph.style.fontFamily = "arial";
//     paragraph.style.fontSize = "2em";
// });
//
//
// // when double clicking the restore text button, make the paragraph font size 1em
// var shrinkBtn = document.getElementById("shrink-btn");
// shrinkBtn.addEventListener("dblclick", function() {
//    paragraph.style.fontSize = '1em';
//
// });
//

// ==========================  Event Object

// document.addEventListener("click", function(e) {
//    console.log(e);
// });
//
//
// document.addEventListener("click", function(e) {
//
//    var red = e.screenX % 256;
//    var green = e.screenY % 256;
//    var blue = "ff";
//
//    console.log(e.screenX);
//    console.log(e.screenY);
//
//    red = red.toString(16);
//    green = green.toString(16);
//    blue = blue.toString(16);
//    document.body.style['background-color'] = "#" + red + green + blue;
//
// });

// ==========================  Keyboard Events and Prevent Default

// document.addEventListener("keypress", function(e) {
//    console.log(e.code);
//    if (e.code === "Space") {
//       e.preventDefault();
//    }
// });


//******************** FUN TIME! - Make sure above code is uncommented before runnning this! *************************

//******************** Uncomment both IFFE's below to get full functionality

// (function(){
//     //make sure the DOM is loaded first
//     document.addEventListener("DOMContentLoaded", function() {
//         addListeners();
//     });
//
//     //parent method for adding all listeners
//     function addListeners(){
//         //get the elements to add listener and change image
//         let cardContainers = Array.from(document.querySelectorAll(".col-md-3"));
//         addEvents(cardContainers, 'img/jazz-music-rubber-duck.jpg', 'mouseover');
//         addEvents(cardContainers, 'img/300x300.png', 'mouseout');
//     }
//
//     //add mouseover/mouseout events to all selected elements
//     function addEvents(cardContainers, imgPath, listenerType){
//         cardContainers.forEach((cc) => {
//             let card = cc;
//             //create listener which will call function change the image
//             let listener = function (event) {
//                 let cardImg = card.querySelector(".card .card-img-top");
//                 changeImage(cardImg, imgPath);
//             };
//             cc.addEventListener(listenerType, listener);
//         });
//     };
//
//     //actual function to swap images
//     function changeImage(card, imgPath){
//         card.setAttribute('src', imgPath);
//     };
//
// })();
//
// (function() {
//
//     //Get the target element/node
//     let submitBtn = document.getElementById('submitBtn');
//
//     //Bind the target, event, listener
//     submitBtn.addEventListener("click", () => {
//
//      //AFTER the event fires, we can grab data from the form inputs
//         let userForm = document.forms['user'];
//         let firstName = userForm.first;
//         let lastName = userForm.last;
//         let handle = userForm.handleField;
//
//      //Now, take that data and create a new table row from it
//         addNewRow(firstName.value, lastName.value, handle.value);
//
//      //Finally, reset the form inputs to their original values
//         firstName.value = '';
//         lastName.value = '';
//         handle.value = '';
//     });
//
//     This code is called above in order to create a new table row
//     function addNewRow(firstName, lastName, handle) {

//         //Get the table
//         let tableBodies = document.getElementsByTagName('tbody');

//         //Get the table body
//         let tableBody = Array.from(tableBodies)[0];

//         //Need to assign an ID to our new user based on the # of existing users (rows)
//         let rowCount = tableBody.rows.length;

//         //How many cells are in a row? Helps us put the data in the right place
//         let tableRowCellCount = Array.from(tableBody.rows)[0].cells.length;

//         //Create a new table row!
//         let newTableRow = document.createElement("tr");

//         //Group together the data from the new ID (rowcount + 1) with our form input data
//         let dataArray = [rowCount + 1, firstName, lastName, handle];

//         //For every cell in our row, add the corresponding data to it in order of front to back of the array
//         for (let i = 0; i < tableRowCellCount; i++){

//             //Create a new cell
//             let newCell = newTableRow.insertCell();

//             //Append (add) a new text node to the cell - data drawn from the form input vis-a-vie the data array
//             newCell.appendChild(document.createTextNode(dataArray[i]));

//             //Append the new cell to our new table row
//             newTableRow.appendChild(newCell);
//         };

//         //Finally, add the completed row to the table body. DONE!
//         tableBody.appendChild(newTableRow);
//     }
// })()


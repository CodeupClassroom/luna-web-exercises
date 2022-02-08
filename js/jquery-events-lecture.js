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


// ========================= Mouse events ===============================
//

// document.addEventListener('click', function(e){
//     console.log(e.target);
// });


// $(document).click(function(e){
//     console.log(e.target);
// })

// ************** Get an element and change style on click ****************

// (function(){
//
//     let jumbotron = $('div.jumbotron');
//     let handler = function(event){
//         $(this).css('background-color', 'blue');
//         console.log('event fired');
//     }
//     jumbotron.click(handler);
//
// })()

// ************** Get elements and change style on click *************

// (function(){
//
//     let tableRows = $('tbody > tr');
//
//     let handlerBlueBGnd = function(){
//         tableRows.css('background-color', '');
//         $(this).css('background-color', 'lightblue');
//     }
//
//     tableRows.click(handlerBlueBGnd);
//
// })()


// ************* Change Table Row background colors on hover *********************
// (function(){
//
//     let jqClassObjs = $('.jqClass');
//
//     let handlerBlueBGnd = function(e){
//         $(this).css({
//             backgroundColor: 'lightblue',
//             transition: 'background .5s'
//         })
//     };
//
//     let handlerNormalBGnd = function(e){
//         $(this).css({
//             backgroundColor: '',
//             transition: 'background .5s'
//         })
//     }
//
//     jqClassObjs.hover(handlerBlueBGnd, handlerNormalBGnd);
//
// })()

// ************ More dynamic background changes on click or hover *****************
(function () {
    let jqElements = $('.jqClass');
    let backgroundBlue = 'lightblue';
    let backgroundReset = '';

    function addClickEvents(elementsToBind) {
        let handlerBlueBckGnd = function () {
            elementsToBind.css('background-color', backgroundReset);
            $(this).css('background-color', backgroundBlue);
        }
        elementsToBind.click(handlerBlueBckGnd);
    }

    addClickEvents(jqElements);

})()


// ========================= Keyboard events


// ************************* keyup *************************
// (function(){
//
//
//     Array.from(document.getElementsByTagName('input'))
//         .forEach((i) => {
//             i.addEventListener('keyup', function(e){
//                 console.log(this.value);
//                 if (this.value === 'casey'){
//                     alert("GOT IT!");
//                 }
//         });
//     })
//
//
//    $('input').keyup(function(e){
//        console.log(this.value);
//        if (this.value === 'casey'){
//            alert("That's my name, don't wear it out!");
//        }
//    });
//
// })()

// // ************************* keypress *************************
//
// (function(){
//
//
//     Array.from(document.getElementsByTagName('input'))
//         .forEach((i) => {
//             i.addEventListener('keypress', function(e){
//                 console.log(this.value);
//                 if (this.value === 'casey'){
//                     alert("GOT IT!");
//                 }
//         });
//     })
//
//
//    $('input').keypress(function(e){
//        console.log(this.value);
//        if (this.value === 'casey'){
//            alert("That's my name, don't wear it out!");
//        }
//    });
//
// })()

// // ************************* keydown *************************

// (function(){
//
//
//     Array.from(document.getElementsByTagName('input'))
//         .forEach((i) => {
//             i.addEventListener('keydown', function(e){
//                 console.log(this.value);
//                 if (this.value === 'casey'){
//                     alert("GOT IT!");
//                 }
//             });
//         })
//
//
//     $('input').keydown(function(e){
//         console.log(this.value);
//         if (this.value === 'casey'){
//             alert("That's my name, don't wear it out!");
//         }
//     });
//
// })()countOdds([1, 2, 3]) // 2
// countOdds([4, 6, 8, 10]) // 0
// countOdds([1, 2, 1, 1]) // 3


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


// ******************** FUN TIME! ******************************
// When I click on a card, the image should change to Zod or Superman
// Only one card should be superman and he should only show up once
// (function(){
//
//     //set the stage
//     let cards = $('.card');
//     let randomNumber = Math.floor(Math.random() * cards.length);
//     let decremented = cards.length - 1;
//
//     //sanity check #1
//     console.log("Random: " + randomNumber);
//
//     //do a thing to each card
//     cards.each(function(){
//
//         //sanity check #2
//         console.log("Decremented: " + decremented);
//
//         //make a new image path variable for each loop item
//         let imgPath;
//
//         if (randomNumber === decremented){
//             imgPath = 'img/superman.jpg';
//         }else{
//             imgPath = 'img/General_Zod_(circa_2018).png';
//         }
//
//         let card = $(this);
//         card.click(function(e){
//             console.log("key pressed");
//             card
//                 .find('.card-img-top')
//                 .attr('src', imgPath);
//         });
//
//         decremented--;
//     })
//
//
// })()
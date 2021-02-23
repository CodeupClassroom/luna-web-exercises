// ====================== .map() =======================


// >>>>>>>>>>>>>>>>>>>>> Numbers <<<<<<<<<<<<<<<<<<<<<<<

// (function(){
//
//     let numArr = [1, 2, 3, 4, 5, 6];
//
//     let mappedNumArr = numArr.map(function(num){
//         return num + num;
//     })
//
//     mappedNumArr.forEach((num) => {console.log(num)});
//
// })();


// >>>>>>>>>>>>>>>>>>>>> Strings <<<<<<<<<<<<<<<<<<<<<<<<

// (function(){
//
//     let names = [
//         'James Hetfield',
//         'Dave Mustaine',
//         'Corey Taylor',
//         'Chino Moreno',
//         'Jonathan Davis',
//         'Maynard James Keenan'];
//
//     let firstNames = names.map(function(name){
//         return name.split(' ')[0];
//     });
//
//     console.log(firstNames);
//
// })();


// *********** String[] -> Object[] -> String[] ***********
//
// (function(){
//
//     let names = [
//         'James Hetfield',
//         'Dave Mustaine',
//         'Corey Taylor',
//         'Chino Moreno',
//         'Jonathan Davis'];
//
//     // map the string[] to an Object[]
//     let nameObjs = names.map(function(name){
//
//         let nameArr = name.split(' ');
//
//         // not scalable, but just making an example
//         return {firstName: nameArr[0], lastName: nameArr[1]};
//     });
//
//     // AAAND we mapped that object array BACK to a string array,
//     // this time just having the first names!
//     let firstNames = nameObjs.map(function(name){
//         return name.firstName;
//     })
//
//     console.log(nameObjs);
//
//     console.log(firstNames);
// })();


// **************** With array of objects *****************

//{
//     let pets = [
//         {
//             name: 'Coda',
//             species: 'Dog',
//             breed: 'GSD',
//             age: "Never ask a lady..",
//             nickname: 'Horsie'
//         },
//         {
//             name: 'Murphy',
//             species: 'Dog',
//             breed: 'Great Pyrenees / Lab',
//             age: '9 mo',
//             nickname: 'Murf'
//         }
//     ];
//
//     //Here, we are simply mapping objects to NEW objects types to a NEW array
//     let dogs = pets.map(function(pet){
//
//         return {
//             name: pet.name,
//             breed: pet.breed,
//             age: pet.age,
//             nickname: pet.nickname,
//             isAGoodDog: true
//         }
//     });
//
//     let dogNames = dogs.map(function(dog){
//         return dog.name;
//     })
//
//     console.log(dogNames);
//
// }

// ********** Manipulating style/attributes ***********

// (function(){
//
//     let names = [
//         'James Hetfield',
//         'Dave Mustaine',
//         'Corey Taylor',
//         'Chino Moreno',
//         'Jonathan Davis',
//         'Maynard James Keenan'];
//
//     // our callback passed to .map() will take each string and add it to a new div element,
//     // then append that element to the DOM
//     let divs = names.map(function(name){
//
//         let div = $("<div></div>").text(name);
//         div.css({
//             width: 'fit-content',
//             padding: 4,
//             marginBottom: 2,
//             backgroundColor: 'grey',
//             color: 'lightblue'
//         });
//         // Here is a helpful reminder about void vs returning functions
//         // if I don't place 'return' in front of the line below, this function will assign
//         // a bunch of undefined objects to the 'divNames' array.
//         // You may or may not want that functionality,
//         // but it is important to be INTENTIONAL in creating a void or returning function.
//         return div;
//     });
//
//     $("body").prepend(divs);
// })();


// *************** With a SINGLE object *****************

// Here, we will take a single object and push its property values to a new array
// (function(){
//
//     let bandDirector = {
//         name: 'Casey',
//         title: 'Band Director',
//         yearsOfService: 5,
//         specialty: 'Brass'
//     };
//
//     console.log(bandDirector);
//
//     let valuesOnly = $.map(bandDirector, function(value, key){
//         return value;
//     })
//
//     console.log(valuesOnly);
//
// })();


// ====================== .filter() =======================


// >>>>>>>>>>>>>>>>>>>>> Numbers <<<<<<<<<<<<<<<<<<<<<<<

// (function(){
//
//     let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
//
//     let evens = numArr.filter(function(num){
//
//         // notice we are NOT returning the num itself, but rather a boolean expression
//         // if the expression is true, the num is implicitly added to the new array 'evens'
//         return num % 2 == 0;
//     });
//
//     evens.forEach((num) => {console.log(num)});
//
// })();


// >>>>>>>>>>>>>>>>>>>>> Strings <<<<<<<<<<<<<<<<<<<<<<<<

// (function(){
//
//     let stringArr = ['Tree', 'House', 'Car', 'Truck', 'Yard', 'Bush'];
//
//     console.log(stringArr);
//
//     stringArr = stringArr.filter(function(str){
//        return  str.length <= 4;
//     });
//
//     console.log(stringArr);
//
// })()


// ********************* Array of Objects ************************

// (function(){
//
//     let pets = [
//         {
//             name: 'Coda',
//             species: 'Dog',
//             breed: 'GSD',
//             age: "Never ask a lady..",
//             nickname: 'Horsie'
//         },
//         {
//             name: 'Murphy',
//             species: 'Dog',
//             breed: 'Great Pyrenees / Lab',
//             age: '9 mo',
//             nickname: 'Murf'
//         },
//         {
//             name: 'Sir Walter',
//             species: 'Succulent',
//             breed: 'Many',
//             age: '7 Months',
//             nickname: 'Chew Toy'
//         }
//     ];
//
//     //Gimme only le doggos
//     let dogs = pets.filter(function(pet){
//         return pet.species.toLowerCase() === 'dog';
//     });
//
//     console.log(dogs);
//
// })();


// **************** Manipulating the DOM with filter() ********************

// (function(){

// remember that most jQuery methods, when called on a collection (ie: class selector)
// apply 'implicit iteration' - they loop over the collection behind the scenes
//     $('.cards-row').filter(function(){
// // if the element's id is 'klingon', it returns true
//         return $(this).attr("id") === "klingon";
//     }).remove(); // remove those elements which returned true
// })();

// (function(){
//     let federationShips = $('h3').filter(function(){
//         return $(this).text().includes("USS");
//     }).text("Good guys!");
//
//     console.log(federationShips);
// })();

// (function(){
//      //when dealing with a collection of jquery objects, you have implicit access to another
//      //parameter: index - as in the current element's 0-indexed key
//     $('.card').filter(function(index){
//         console.log(index);
//         return (index) % 3 === 0;
//     }).children('img').attr('src', 'img/Borg_Cube.jpg');
//
// })();



// ====================== .reduce() =======================

// *** .reduce() allows access to 4 implicit parameters
// *** accumulator, currentValue, index, and initialValue (of the accumulator)

// >>>>>>>>>>>>>>>>>>>>>>> Numbers <<<<<<<<<<<<<<<<<<<<<<<<

// (function(){
//
//     // let numArr = [1, 2, 3, 5, 8, 13, 21];
//
//     let numArr = [1, 2, 3];
//     let sum = numArr.reduce(function(accumulator, currentValue){
//         return accumulator + currentValue;
//     }, 1);
//
//     console.log(sum);
//
// })();

// >>>>>>>>>>>>>>>>>>>>>>> Strings <<<<<<<<<<<<<<<<<<<<<<<<

// (function(){
//
//
//     let stringArr = ['Casey', 'James', 'Edwards'];
//
//
//     let fullName = stringArr.reduce(function(accumulator, currentValue, currentIndex, array){
//         return accumulator + ' ' + currentValue;
//     });
//
//     console.log(fullName);
//
// })();



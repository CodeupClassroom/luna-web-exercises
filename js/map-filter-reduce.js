"use strict"

{
    let numArr = [1, 2, 3, 4, 5, 6];

    let mappedNumArr = numArr.map(function (num){
        return num + num;
    });
    console.log(mappedNumArr);
}

{
    let numArr = [1, 2, 3, 4, 5];

    let mappedNumArr = numArr.map(function (num){
        return num * num
    });
    console.log(mappedNumArr);
}

// {
//     let names = [
//         'James Hetfield',
//         'Dave Mustaine',
//         'Corey Taylor',
//         'Chino Moreno',
//         'Jonathan Davis'];

    // let firstNames = names.map(function (name){
    //     return name.split(' ')[0]
    // });
    // console.log(firstNames);

    //TODO: use map to return an array where the names are ordered last-first

    // let newNames = names.map(function (name){
    //     let nameArr = name.split(' ');
    //     if (nameArr.length === 3) {
    //         return nameArr[2] + ' ' + nameArr[1] + ' ' + nameArr[0];
    //     }
    //     return nameArr[1] + '' + nameArr[0];
    // })
    // console.log(newNames);

    // string[] => object[] => string[]
    // let nameObjs = names.map(function (name){
    //     let nameArr = name.split(' ');
    //     return {firstName: nameArr[0], lastName: nameArr[1]};
    // });
    // console.log(nameObjs);
    //
    // let lastNames = nameObjs.map(function (name){
    //     return name.lastName
    // });
    // console.log(lastNames);

// }

// {
//     let pets = [
//         {
//             name: 'Coda',
//             species: 'Dog',
//             breed: 'GSD',
//             age: 'Never ask a lady..',
//             nickname: 'Horsie'
//         },
//         {
//             name: 'Murphy',
//             species: 'Dog',
//             breed: 'Great Pyrenees / Lab',
//             age: '9 mo',
//             nickname: 'Murf'
//         },
//     ];
//     let dogs = pets.map(function (dog){
//         return{
//             name: dog.name,
//             breed: dog.breed,
//             nickname: dog.nickname,
//             isAGoodDog: true
//         };
//     });
//     console.log(dogs);
// }

// TODO: create an array of names of differing name counts and lengths
// TODO: map to a new array of names, where the names are reversed last-first
// TODO: with that new array, use jQuery to append each of the new elements to the DOM
// TODO: feel free to incorporate styling
// TODO: it may be helpful to prepend the names rather than append


{
    let newNames = [
        'James Hetfield',
        'Dave Mustaine',
        'Corey Taylor',
        'Chino Moreno',
        'Jonathan Davis',
        'Sam James Lansford'
    ];

    let nameArr = newNames.map(function (name){
        return name.split(' ').reverse()
    })
}


// {
//     let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
//
//     let evens = numArr.filter(function (index,n){
//         return (index +1) % 3 === 0;
//     });
//     console.log(evens);
// }

// {
//     let stringArr = ['Tree', 'House', 'Car', 'Truck', 'Yard', 'Bush'];
//
//     stringArr = stringArr.filter(function (str){
//         return str.length < 5
//     });
//     console.log(stringArr);
// }

// {
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
//     let dogs = pets.filter(function (pet){
//         return pet.species.toLowerCase() === "Dog";
//     });
//     console.log(dogs);
// }


// This returns the sum of all the number.
// {
//     let numArr = [1, 2, 3, 5, 8, 13, 21];
//     let sum = numArr.reduce(function (accumulator,currentValue){
//         return currentValue + accumulator;
//     },10); //10 means it starts from 10, the sum will be 63 instead of 53
//     console.log(sum);
// }

{
    let nameStrings = [
        'James Hetfield',
        'Dave Mustaine',
        'Corey Taylor',
        'Chino Moreno',
        'Jonathan Davis'];

    let namesArr = nameStrings.map(function (name){
        return name.split(' ');
    });

    console.log(namesArr);

    // let stringArr = ['Sam', 'James', 'Lansford'];

    let fullNames = namesArr

    let fullName = namesArr.reduce(function (a,c){
        return a + ' ' + c;
    });
    console.log(fullName);
}
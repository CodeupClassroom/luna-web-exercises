"use strict";

// var num = 2;
// while (num <= 65536) {
//     console.log(num);
//     num *= 2;
// }


// ========== Ice Cream Exercise

function pluralOrSingularCones(numOfCones) {
    return (numOfCones > 1) ? 'cones' : 'cone';
}

function createRandomIceCreamOrder(allCones) {
    var conesToSell;
    // create conesToSell number of cones to sell
    conesToSell = Math.floor(Math.random() * 5) + 1;

    // if conesToSell is less than or equal to cones left decrease allCones by conesToSell
    if (conesToSell <= allCones) {
        console.log(conesToSell + ' ' + pluralOrSingularCones(conesToSell) + ' sold...'); // log conesToSell cones sold
        allCones -= conesToSell; // subtract conesToSell from allCones
    } else { // otherwise
        console.log('Cannot sell you ' + conesToSell +  ' ' + pluralOrSingularCones(conesToSell) + ' I only have ' + allCones + '...');// log cannot sell message
    }
    console.log(allCones + ' are left...');
    return allCones;
}

function runIceCreamStore() {

    var allCones = Math.floor(Math.random() * 50) + 50;
    console.log('We have ' + allCones + ' to sell.');

    do {
        allCones = createRandomIceCreamOrder(allCones);
    } while(allCones > 0);

    console.log('Yay! I sold them all!');

}

runIceCreamStore();



/*
* if..else if..if
*/

let sale = false;

// is true
if (sale) {
    console.log('Time to buy!');
} else { // is false
    console.log('Time to wait for a sale.');
}

let hungerLevel = 7;

// is greater than 7
if (hungerLevel > 7) {
    console.log('Time to eat!');
} else {
    console.log('We can eat later!');
}

let mood = 'sleepy';
let tirednessLevel = 6;

// is mood sleepy and tirednessLevel isgreater than 8
if (mood === 'sleepy' && tirednessLevel > 8) {
    console.log('Time to sleep!');
} else {
    console.log('Not bed time yet.');
}

// else..if
let season = 'summer';

if (season === 'spring') {
    console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
    console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
    console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
    console.log('It\'s sunny and warm because it\'s summer!');
} else {
    console.log('Invalid season.');
}

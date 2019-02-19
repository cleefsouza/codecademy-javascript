/*
* function declarations
*/

getReminder();
greetInSpanish();

function getReminder() {
    console.log('Water the plants');
}

function greetInSpanish() {
    console.log('Buenas Tardes.');
}

/*
* calling a fuction
*/

function sayThanks(name) {
    console.log(`Thank you for your purchase ${name}! We appreciate your business.`);
}

sayThanks('Cleef');

/*
* default parameters
*/

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}

makeShoppingList();

/*
* return
*/
function monitorCount(rows, columns) {
    return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);
console.log(`Number of monitors: ${numOfMonitors}`);

function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);
console.log(`Total cost of monitors: ${totalCost}`);

/*
* function expressions
*/

const plantNeedsWater = function (day) {
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
};

console.log(plantNeedsWater('Tuesday'));

/*
* arrow functions
*/

const rectangleArea = (width, height) => {
    let area = width * height;
    return area
}

const plantNeedsWaterTwo = day => day === 'Wednesday' ? true : false;
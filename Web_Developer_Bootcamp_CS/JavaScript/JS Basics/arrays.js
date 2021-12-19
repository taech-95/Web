let colors =['blue', 'green', 'black', 'white'];
console.log(colors[0]);
console.log(colors.length);
const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix']; //DON'T TOUCH THIS LINE!
// YOUR CODE BELOW HERE:
leaderboard[1] ='Luna';
leaderboard[3] ='Draco';
leaderboard.push('Bellatrix');
leaderboard.push('Rone');
leaderboard.pop();
leaderboard.unshift('Mykola');
leaderboard.shift();
const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!
planets.shift();
planets.push('Saturn');
planets.unshift('Mercury');

let slicesPlanets = planets.slice(1,3);
slicesPlanets.splice(1,0, "Pluton");
let scores = [1, 6, 12, 87, 132, 22412421, -12]
scores.sort();
console.log(scores)
const gameBoard = [['X', 'O', 'X'],['O', null, 'X'],['O', 'O', 'X']]
console.log(gameBoard[1][1]);

const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];
airplaneSeats[3][1] = "Hugo";

//object literals
const person = {
    firstName : "Mykola",
    lastName: "Maksymov",
    age : 26
};

console.log(person.firstName);
const kitchenSink = {
    favNum : 232482318421,
    isFunny: true,
    colors : ['red', 'orange']
};

const product = {
    name : "Gummy Bears",
    inStock : true,
    price : 1.99,
    flavors : ["grape","apple","cherry"]
};

product.flavors[1];
product["name"];
const years = {
    1999: 'Good',
    2020: 'Bad'
}

//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:
let fullAddress = restaurant.address + ', ' + restaurant.city + ', ' + restaurant.state + ' ' + restaurant.zipcode;

const midTerms = {
    daniel : 96,
    thomas : 78
};
midTerms.thomas = 79;
midTerms.ezra = 85;
midTerms["antonio"] = 'A-';



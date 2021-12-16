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

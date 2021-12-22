for (let index = 1; index <= 10; index++) {
    console.log(index);
}

for (let i = 0; i<6;i++){
    console.log("Da ba dee da ba daa");
}

for(let i = 25; i>=0; i-=5){
    console.log(i);
}

let newArray = [2,4,6,8,10,12,14,16,18,20];

let animals = ["cat", "dog", "mouse"];
for (let index = 0; index < animals.length; index++) {
    console.log(i, animals[i]);
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
for(let i = 0; i < people.length; i++){
    console.log(people[i].toUpperCase());
}

for (let i = 0; i < 10; i++) {
    console.log(`i is: ${i}`);
    for (let j = 0; j < 4; j++) {
        console.log(`j is: ${j}`);
    }
}
let num = 0;
while (num < 10){
    console.log(num);
    num++;
}


// let guess = parseInt(prompt("Enter number between 0 & 20"));
// while (!guess) {
//     let guess = parseInt(prompt("Enter a valid number"));
// }
let attempts = 1;
let gameIsOver = false;
let randomNumber = Math.floor(Math.random()*100)+1;
console.log(randomNumber)
let yourNumber = parseInt(prompt("Enter your first Guess"))

while(yourNumber!==guess){
    let attempts = 1;
     yourNumber = (prompt("Enter your Guess"));
    if (yourNumber>guess) {
        yourNumber = (prompt("too high, enter a new guess"));
    }
    else if  (yourNumber<guess) {
        yourNumber = (prompt("too low, enter a new guess"));
    }
    else if (yourNumber === 'quit'){
       yourNumber = prompt("Enter a valid number");
    }

}
if (yourNumber === 'quit') {
    console.log("You quit")
}
else{
    console.log(`You got it. It takes ${attempts} guesses.`)
}

console.log("Hello from our first file");
let total = 1+3;
let  randomNumber = Math.random()

if (randomNumber<=0.5) {
    console.log("Your number is less then 0.5");
    console.log(randomNumber);
}

function isEven(num){
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
   if(num%2===0){
       console.log("even");
   }
}

const dayOfWeek = prompt("Enter a Day").toLowerCase();
if (dayOfWeek === 'monday') {
    console.log("Ughhhhh i hate mondays!!!")
} else if (dayOfWeek ==='saturday') {
    console.log("I love saturdays :)")
} else if (dayOfWeek ==='friday') {
    console.log("I love fridays especialy after work :)") 
} else {
    console.log("Just another day");
}

function getColor(phrase){
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
   if(phrase === 'stop'){
       console.log("red");
   }else if (phrase ==='slow'){
       console.log('yellow');
   } else if(phrase ==='go'){
       console.log('green');
   } else {
       console.log('purple');
   }
   
    //AND THIS LINE ↑↑↑↑↑
}
const mystery = 'Prompt7'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

// LEAVE THIS CODE ALONE! (pretty please)
if(mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1){
    console.log("YOU GOT IT!!!");
}

const age = 26;

if (age < 5) {
    console.log( "you are a child enter is free");
} else if (age<10 || age >= 65) {
    console.log(" price for you is 10$")
} else if (age <65){
    console.log("You are an adult, price for you is 20$")
}

let anotherPassword = prompt("Please enter a new password");
if(anotherPassword.length > 6 && anotherPassword.indexOf(' ') === -1){
    console.log("Your passwords is valid");
} else {
    console.log("Your passwrod invalid");
}

let password = prompt("Please enter a new password");
if(password.length > 6){
    console.log("Long enoudh password");
    if(password.indexOf(' ') === -1){
        console.log("You don't have any space good job :) ")
    } else {
        console.log("You password contains spaces")
    }
} else {
    console.log("Password is to short. Must be 6+ charakters");
}

// Change the value of num, so that "YOU GOT ME!" prints out
const num = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :) 

// DO NOT TOUCH ANYTHING BELOW (please) 
if(num <= 100) {
    if(num >= 50) {
        console.log("HEY!");
    }
} else {
    if (num < 103) {
        if(num % 2 === 0){
            console.log("YOU GOT ME!");
        }
    }
}

let switchDemo = 2;
switch (switchDemo) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Just another day");
        break;
}
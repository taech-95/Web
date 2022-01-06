function sing(){
    console.log("DO");
    console.log("RE");
    console.log("Mi")
}

// Write your function here:
function printHeart(){
    console.log("<3");
}
printHeart();
function sayHello (name){
    console.log("Hello " + name);
}

function rant (message){
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}

function greet(firstName, lastName){
    console.log(`Hey ${firstName} ${lastName[0]}`);
}

function repeat(str, numTimes){
    let result ="";
    for (let index = 0; index < numTimes; index++) {
        result+=str; 
    }
    console.log(result)
}
// define isSnakeEyes below:
function isSnakeEyes(num1,num2){
    if(num1===1&&num2===1){
        console.log("Snake Eyes!");
    }
    else{
        console.log("Not Snake Eyes!");
    }
}
// DEFINE YOUR FUNCTION BELOW:
function multiply(num1,num2){
    return num1*num2;
}

// DEFINE YOUR FUNCTION BELOW:
function isShortsWeather(temperature){
    if(temperature >=75){
        return true;
    }
    else{
        return false;
    }
}

// DEFINE YOUR FUNCTION BELOW:
function lastElement(input){
    if(input.length === 0){
        return null;
    }
    return input[input.length-1];
}

function capitalize(str){
    let capitalizeStr = str[0].toUpperCase();
    let newStr = str.slice(1,str.length);
    return capitalizeStr+newStr
}
// DEFINE YOUR FUNCTION BELOW:
function sumArray(numbers){
    let sum =0;
    for(let i = 0; i < numbers.length; i++){
        sum+=numbers[i];
    }
    return sum;
}

function returnDay(day){
    switch(day){
        case 1:
            return 'Monday';
            break;
        case 2:
            return 'Tuesday';
            break;
        case 3:
            return 'Wednesday';
            break;
        case 4:
            return 'Thursday';
            break;
        case 5:
            return 'Friday';
            break;
        case 6:
            return 'Saturday';
            break;
        case 7:
            return 'Sunday';
            break;
        default:
            return null;
            break;
    }
    }

function add(x,y) {
    return x+y;
}

const power = function(x,y) {
    return x**y;
}

const square = function(num){
    
    return Math.pow(num,2);
}
function callTwice(func) {
    func();
    func();
}

function rollDie() {
    const roll = Math.floor(Math.random()*6)+1;
    console.log(roll)
}

callTwice(rollDie)


function isBetween(num) {
    return num >= 50&& num <=100;
}
function makeBetwwenFunc(min, max) {
    return function (num) {
        return num >= min && num <=max;
    }
}

const math  = {
    PI : 3.14159,
    square : function (num) {
        return num*num;
    },
    cube : function (num){
        return num*num*num;
    },
    multiply(num1,num2){
        return num1*num2;
    }

}

const square2 = {
    area(side){
        return side*side;
    },
    perimeter(side){
        return side*4;
    }
}

const hen = {
    name : 'Helen',
    eggCount : 0,
    layAnEgg(){
        this.eggCount++;
        return 'EGG';
    }
}

try {
    hello.toUpperCase()
} catch (error) {
    console.log('hello is not defined')
}

planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter'];
upperPlanets = planets.map(function (planets) {
    return planets.toUpperCase();
})

console.log(upperPlanets)

const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];
const firstNames = fullNames.map(function(names){
    return names.first;
})
const lastNames = (lastName)=> {
    return lastName.last;
}
//arrow functions
const greet2 = (name) => {
    return `Hey ${name}!`;
}
//implicit return
const add2 = (num1, num2) => num1+num2;

setTimeout(()=>{
    console.log("Hello")
}, 3000);
const id = setInterval(() => {
    console.log((Math.random()*10)+1)
}, 1500);

scores = [1, 6, 12, 87, 132, 22412421, 12]
const number = scores.filter((number)=>{
    return number %2 ===1;
})

function validUserNames (param){
    return param.filter(name=>name.length<10);
}

function allEvens(numbers){
    return numbers.every(number => number%2===0);
}

const sum = scores.reduce((sum,numbers)=>sum +numbers);
console.log(sum);

const person2 = {
    firstName: 'Mykola',
    lastName: 'Maksymov',
    fullName() {return `${this.firstName} ${this.lastName}`}
}

function roll (params=6){
    return Math.floor(Math.random()*params)+1
}

function sumRest (...nums){
    console.log(nums);
}
function sumRest2 (...nums){
    return nums.reduce((total,element) => total + element);
}
const newScores = [213421,2312321,21421412,214123123,323131,313131]
const [first, second, third, ...rest] = newScores;  
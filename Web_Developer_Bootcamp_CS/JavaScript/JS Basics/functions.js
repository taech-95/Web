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
Switc

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
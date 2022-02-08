const btn = document.querySelector('#v2');
btn.onclick = function () {
    console.log("You clicked me!");
    console.log('I hope its works :)');
}

function scream(params) {
    console.log('AAAAAAH');
    console.log('Stop touching me!');
}
btn.onmouseenter = scream;
const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert('Clicked');
});
const btnHello = document.querySelector('#hello');
const btnGoodBye = document.querySelector('#goodbye');
btnHello.addEventListener('click',()=>{
    console.log('Hello');
});
btnGoodBye.addEventListener('click', ()=>{
    console.log('Goodbye');
})
const h1 = document.querySelector('#h1');

const randomColor = () =>{
    let red = Math.floor(Math.random() * 255 + 1);
    let green = Math.floor(Math.random() * 255 + 1);
    let blue = Math.floor(Math.random() * 255 + 1);
    return `rgb(${red},${green},${blue})`;
    
}

const btnChange = document.querySelector('#btnColor');
btnChange.addEventListener('click', ()=>{
    const newColor = randomColor()
    document.body.style.background= newColor;
    h1.innerText = newColor;
})

const buttons = document.querySelectorAll('button');

for (const button of buttons) {
    button.addEventListener('click', ()=>{
        console.log('Clicked!');
        button.style.backgroundColor = randomColor();
    });
    
}
const form = document.querySelector('form');
const item = document.querySelector('#product');
const number = document.querySelector('#qty')
const list = document.querySelector('#list');

form.addEventListener('submit', (evt)=>{
    evt.preventDefault();
    const text = number.value +" "+ item.value;
    const newLi = document.createElement("LI");
    newLi.innerText = text;
    list.append(newLi);
    number.value = "";
    item.value ="";
})

item.addEventListener('change', () =>{
    console.log('Changed');
})
item.addEventListener('input', ()=>{
    h1.innerText = item.value;
    console.log('input event');
})

const userName = document.querySelector('#username');

userName.addEventListener('input', ()=>{
    if (userName.value === ""){
        h1.innerText = "Enter Your Username";
    } 
    else{
        h1.innerText = `Welcome, ${userName.value}` ;
    }
 });
 
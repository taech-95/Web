const element = document.getElementById('paragraph');
console.dir(element);
const image = document.getElementById('unicorn');
const heading = document.getElementById('mainheading');

const images = document.getElementsByTagName('img');
for (const img of images) {
    console.log(img.src);
}
const h2 = document.getElementsByTagName('h2');
const helloClass = document.getElementsByClassName('hello');

const querySelector = document.querySelector('#unicorn')
const doneTodos = document.querySelectorAll('.done');
const checkbox = document.querySelector('input[type=checkbox]');
const h1 = document.querySelector('h1');
h1.textContent = 'Hello world!!!';
h1.innerHTML = '<h2>Hello world!!!</h2>';
const disgusting = document.querySelector('span');
disgusting.innerText = 'Disgusting';
const changeId = document.querySelector('#mainheading').id = 'whoops';
changeId.getAttribute('id');
// The url you need: 'https://devsprouthosting.com/images/chicken.jpg'
const image = document.querySelector('img');
image.setAttribute('src', 'https://devsprouthosting.com/images/chicken.jpg');
image.setAttribute('alt','chicken');
const div = document.querySelector('#container');
div.style.textAlign = 'center'
const image = document.querySelector('img');
image.style.width='150px';
image.style.borderRadius= '50%';
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const spans = document.querySelectorAll('span');
let color = 0;
for (let span of spans){
    span.style.color = `${colors[color]}`;
    color++;
}

spans.setAttribute('class','purple');
spans.classList.add('purple');
const lists = document.querySelectorAll('li');
for (let li of lists){
    li.classList.toggle('highlight');
}
const container = document.querySelector('#container');

for (let i = 0; i< 100; i++){
const button = document.createElement('button');
button.innerText = 'HEY HEY HEY';
container.appendChild(button);
}
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
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
const p1 = {
    score : 0,
    button : document.querySelector('#p1Button'),
    display : document.querySelector('#p1.display')
}

const p2 = {
    score : 0,
    button : document.querySelector('#p2Button'),
    display : document.querySelector('#p2.display')
}

// const player1Btn = document.querySelector('#p1Button');
// const player2Btn = document.querySelector('#p2Button');
// const p1Display = document.querySelector('#p1.display');
// const p2Display = document.querySelector('#p2.display');
const resetBtn = document.querySelector('#reset');
const playTo = document.querySelector('#playto');

function updateScore (player,opponent) {
    if(!isGameOver){
        player.score ++;
        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('has-text-succes');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.diasbled = true;
        }
        player.display.textContent = player.score;
    }
}


let isGameOver = false;
let p1Score = 0;
let p2Score = 0;
let winningScore =0;

playTo.addEventListener('change', ()=>{
    winningScore = parseInt(this.value)
    reset();
});

playp1.button.addEventListener('clciked', ()=>{
    
    updateScore(p1,p2);
    // if(!isGameOver){
    //     p1Score ++;
    //     if(p1Score === winningScore){
    //         isGameOver = true;
    //         p1.display.classList.add('has-text-succes');
    //         p2.display.classList.add('has-text-danger');
    //         player1Btn.disabled = true;
    //         player2Btn.diasbled = true;
    //     }
    //     p1.display.textContent = p1Score;
    // }
})

p2.button.addEventListener('clicked', () => {
    updateScore(p1,p2);
    // if(!isGameOver){
    //     p2Score ++;
    //     if(p2Score === winningScore){
    //         isGameOver = true;
    //         p1.display.classList.add('has-text-danger');
    //         player1Btn.disabled = true;
    //         player2Btn.diasbled = true;
    //         p2.display.classList.add('has-text-succes')
    //     }
    //     p2.display.textContent = p2Score;
    // }
});





resetBtn.addEventListener('click', reset)


function reset() {
    isGameOver = false;
    // p1.score = 0;
    // p2.score = 0;
    // p1.display.textContent = 0;
    // p2.display.textContent = 0;
    // p1.display.classList.remove('has-text-succes', 'has-text-danger');
    // p2.display.classList.remove('has-text-succes','has-text-danger');
    // p1.button.disabled = true;
    // p2.button.diasbled = true;

    for (let p of [p1,p2]){
        p.score =0;
        p.display.textContent =0;
        p.classList.remove('has-text-succes', 'has-text-danger')
        p.button.disabled = false;
    }
}
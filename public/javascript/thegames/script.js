class Player {
    constructor(hand){
        this.hand = hand;
    }
getHand() {
    return this.hand;
}
}

class Human extends Player {
    constructor(hand,name){
    this.name = "name";
}
}

class Computer extends Player {
    constructor() {
        super("hand");
    }
}
function getPilihanComputer() {
    const comp = Math.random();
    const rock = document.querySelector('.rock1');
    const paper = document.querySelector('.paper1');
    const scissors = document.querySelector('.scissors1');

    if( comp < 0.34 ) {
        rock.classList.add('selected');
        return 'rock';
    } 
    if ( comp >= 0.34 && comp < 0.67 ){
        paper.classList.add('selected');
        return 'paper' ;
    }  else {
    scissors.classList.add('selected'); 
    return 'scissors';
}
    }
    function getResult(comp, player1) {

        if( player1 == comp )  return 'DRAW';
        if( player1 == 'scissors' ) return ( comp == 'paper' ) ? 'PLAYER 1 WIN' : 'COMPUTER WIN';
        if( player1 == 'paper' ) return ( comp == 'rock' ) ? 'PLAYER 1 WIN' : 'COMPUTER WIN';
        if( player1 == 'rock' ) return ( comp == 'scissors' ) ?  'COMPUTER WIN':'PLAYER 1 WIN';
    } 

/* Player Picker 1 */

const pRock = document.querySelector('.rock');
    pRock.addEventListener('click', function() {
    pRock.classList.add('selected');
    const playerPicker = pRock.className;
    getMatchResult(playerPicker);
});


const pPaper = document.querySelector('.paper');
    pPaper.addEventListener('click', function() {
    pPaper.classList.add('selected');
    const playerPicker = pPaper.className;
    getMatchResult(playerPicker);
});

const pScissors = document.querySelector('.scissors');
        pScissors.addEventListener('click', function() {
    pScissors.classList.add('selected');
    const playerPicker = pScissors.className;
    getMatchResult(playerPicker);
}); 
/*  The End of Player Picker*/


function getMatchResult(playerPicker) {
const computerPicker = getPilihanComputer();
const result = getResult(playerPicker, computerPicker);
let textResult = document.getElementById("text-result");
textResult.classList.remove("versus");
textResult.innerText = result ;
textResult.classList.add("player-win");

console.log( 'comp : ' + computerPicker );
console.log( 'player : ' + playerPicker );
console.log( 'result : ' + result);
};

/* Reset Button */
const resetbutton= document.querySelector('.reset');
resetbutton.addEventListener('click', function() {
    resetSelector()
})

function resetTextResult() {
    let textResult = document.getElementById("text-result");
    textResult.classList.remove("player-win");
    textResult.innerText = "VS" ;
    textResult.classList.add("versus");
}

resetTheGame(); {
    location.reload();
}
function resetSelector() {
    const Rock= document.querySelector('.rock1');
    const Paper = document.querySelector('.paper1');
    const Scissors = document.querySelector('.scissors1');
    pRock.classList.remove("selected");
    pPaper.classList.remove("selected");
    pScissors.classList.remove("selected");
    Rock.classList.remove("selected");
    Paper.classList.remove("selected");
    Scissors.classList.remove("selected");
    resetTextResult();
    resetTheGame();
}
// Wait to start game after DOM has finished loading
// code 
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

})

const playerChoice = document.getElementByID('player-choice')
const cpuChoice = document.getElementByID('cpu-choice')
const resultDisplay = document.getElementsByClassName('score')


function runGame() {}

// Random number generator used to generate cpu choice

function generateCpuChoice () {
    const randomNumber = Math.floor(Math.random() *4) + 1

    if (randomNumber === 1) {
        cpuChoice = 'archer' 
    }

    if (randomNumber === 2){
        cpuChoice = 'samurai'
    }

    if (randomNumber === 3){
        cpuChoice = 'spearmen'
    }

    if (randomNumber === 4){
        cpuChoice = 'cavalry'
    }
}

// Victory conditions

function decideVictory(){
    if (cpuChoice === playerChoice){
        result = 'Draw'
    }

    if (cpuChoice === 'archer' && playerChoice === 'samurai'){
        result = 'Shameful Defeat'
        console.log (loss);
    }

     if (cpuChoice === 'samurai' && playerChoice === 'spearmen'){
        result = 'Shameful Defeat'
        console.log (loss);
    }

     if (cpuChoice === 'spearmen' && playerChoice === 'cavalry'){
        result = 'Shameful Defeat'
        console.log (loss);
    }

     if (cpuChoice === 'cavalry' && playerChoice === 'archer'){
        result = 'Shameful Defeat'
        console.log (loss);
    }
     if (cpuChoice === 'samurai' && playerChoice === 'archer'){
        result = 'Glorious Victory!'
        console.log (win);
    }
     if (cpuChoice === 'spearmen' && playerChoice === 'samurai'){
        result = 'Glorious Victory!'
        console.log (win);
    }
     if (cpuChoice === 'cavalry' && playerChoice === 'spearmen'){
        result = 'Glorious Victory!'
        console.log (win);
    }
     if (cpuChoice === 'archer' && playerChoice === 'cavalry'){
        result = 'Glorious Victory!'
        console.log (win);
    }

    resultDisplay.innerHTML = result
}

// Display Outcome function - best out of 3 or 5 vs cpu

function displayOutcome(){

    if win > loss Congratulations, you have defended your Kingdom!
    if win < loss You have lost control of your Kingdom

    let outcome = decideVictory();
    

}
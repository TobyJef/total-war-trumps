// Wait to start game after DOM has finished loading

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

})


function runGame() {}

function checkResult(){}

function displayVictory(){}

// Random number generator to assign to cpu choice

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

function decideVictory(){
    if (cpuChoice === playerChoice){
        result = 'Draw'
    }

    if (cpuChoice === 'archer' && playerChoice === 'samurai'){
        result = 'Shameful Defeat'
    }

     if (cpuChoice === 'samurai' && playerChoice === 'spearmen'){
        result = 'Shameful Defeat'
    }

     if (cpuChoice === 'spearmen' && playerChoice === 'cavalry'){
        result = 'Shameful Defeat'
    }

     if (cpuChoice === 'cavalry' && playerChoice === 'archer'){
        result = 'Shameful Defeat'
    }
     if (cpuChoice === 'samurai' && playerChoice === 'archer'){
        result = 'Glorious Victory!'
    }
     if (cpuChoice === 'spearmen' && playerChoice === 'samurai'){
        result = 'Glorious Victory!'
    }
     if (cpuChoice === 'cavalry' && playerChoice === 'spearmen'){
        result = 'Glorious Victory!'
    }
     if (cpuChoice === 'archer' && playerChoice === 'cavalry'){
        result = 'Glorious Victory!'
    }
}
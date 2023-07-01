// Wait to start game after DOM has finished loading
// code 
// document.addEventListener("DOMContentLoaded", function () {
//     let buttons = document.getElementsByTagName("button");

// });

// Player and Computer scores
const playerScoreCounter = 0;
const playerScore = document.getElementById("player_score");
const cpuScoreCounter = 0;
const cpuScore = document.getElementById("cpu_score");
const scoreBox = document.getElementById("score-box");

// Result message
const result = document.getElementsByClassName("result");

// Game cards
const archer = document.getElementById("archer-button");
const samurai = document.getElementById("samurai-button");
const spearmen = document.getElementById("spearmen-button");
const cavalry = document.getElementById("cavalry-button");

// Player choice function
function game(playerChoice) {
    const cpuChoice = cpuCardPick();
    console.log("playerChoice => " + playerChoice);
    console.log("cpuChoice => " + cpuChoice);
}

// Game card event listeners
function battle() {
    archer.addEventListener('click', function () {
        game("archer");
    });
    samurai.addEventListener('click', function () {
        game("samurai");
    });
    spearmen.addEventListener('click', function () {
        game("spearmen");
    });
    cavalry.addEventListener('click', function () {
        game("cavalry");
    });
}

battle();


// CPU choice function
function cpuCardPick() {
    const cpuChoices = ['archer', 'samurai', 'spearmen', 'cavalry'];
    const randomNumber = Math.floor(Math.random() * 4);
    return cpuChoices[randomNumber];
}
console.log(cpuCardPick());
// Random number generator used to generate cpu choice


function generateCpuChoice() {


    if (randomNumber === 1) {
        cpuChoice = 'archer';
    }

    if (randomNumber === 2) {
        cpuChoice = 'samurai';
    }

    if (randomNumber === 3) {
        cpuChoice = 'spearmen';
    }

    if (randomNumber === 4) {
        cpuChoice = 'cavalry';
    }

    cpuChoiceDisplay.innerHTML = cpuChoice;
}










// function makeSelection(selection) {
//     console.log(selection);
// }




// let playGame = confirm("Are you ready to defend your Kingdom?");
// if (playGame) {}




    // function getFormDetails(event) {

    //     event.preventDefault();

    //     let name = document.getElementById('name');
    //     console.log('name');

    //     document.getElementById('name-result').textContent = name.value;
    // }

    // function playerChoice(event) {
    //     if (playerChoice = archerButton)
    //         console.log('You have chosen Archer');
    //     if (playerChoice = samuraiButton)
    //         console.log('You have chosen Samurai');
    //     else if (playerChoice = spearmenButton)
    //         console.log('You have chosen Yari Spearmen');
    //     else if (playerChoice = cavalryButton)
    //         console.log('You have chosen Cavalry');

    // }




 // Player and CPU choice selection

// const playerChoiceDisplay = document.getElementById('player-choice');
// const cpuChoiceDisplay = document.getElementById('cpu-choice');
// const resultDisplay = document.getElementsByClassName('score');
// const playerSelection = document.getElementsByClassName('selection');

// let playerChoice;

// playerSelection.forEach(playerSelection => playerSelection.addEventListener('click', (e) => {
//     playerChoice = e.target.id;
//     playerChoiceDisplay.innerHTML = playerChoice;
// }));

// const playerChoiceDisplay;
// const cpuChoiceDisplay;
// getResult;

// const winResult = 'Glorious Victory!';
// const lossResult = 'Shameful Defeat';



// // Victory conditions

// function decideVictory(playerChoice, cpuChoice) {
//     if (cpuChoice === playerChoice) {
//         result = 'Draw';

//     }

//     if (cpuChoice === 'archer' && playerChoice === 'samurai') {
//         result = 'Shameful Defeat';
//         console.log(loss);
//     }

//     if (cpuChoice === 'samurai' && playerChoice === 'spearmen') {
//         result = 'Shameful Defeat';
//         console.log(loss);
//     }

//     if (cpuChoice === 'spearmen' && playerChoice === 'cavalry') {
//         result = 'Shameful Defeat';
//         console.log(loss);
//     }

//     if (cpuChoice === 'cavalry' && playerChoice === 'archer') {
//         result = 'Shameful Defeat';
//         console.log(loss);
//     }
//     if (cpuChoice === 'samurai' && playerChoice === 'archer') {
//         result = 'Glorious Victory!';
//         console.log(win);
//     }
//     if (cpuChoice === 'spearmen' && playerChoice === 'samurai') {
//         result = 'Glorious Victory!';
//         console.log(win);
//     }
//     if (cpuChoice === 'cavalry' && playerChoice === 'spearmen') {
//         result = 'Glorious Victory!';
//         console.log(win);
//     }
//     if (cpuChoice === 'archer' && playerChoice === 'cavalry') {
//         result = 'Glorious Victory!';
//         console.log(win);
//     }

//     resultDisplay.innerHTML = result;
// }

// Display Outcome function - best out of 5 vs cpu

// function displayOutcome() {

//     let win = 3;
//     let result;

//     if (win >= 3) {
//         result = "Congratulations, you have defended your Kingdom!";
//     } else if (win < 3) {
//         result = "You have lost control of your Kingdom";
//     }


//     if win > loss Congratulations, you have defended your Kingdom!;
//     if win < loss You have lost control of your Kingdom;

//     let outcome = decideVictory();


// }

// 
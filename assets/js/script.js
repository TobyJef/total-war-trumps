// Wait to start game after DOM has finished loading
// code 
// document.addEventListener("DOMContentLoaded", function () {
//     let buttons = document.getElementsByTagName("button");

// });


let playGame = confirm("Are you ready to defend your Kingdom?");
if (playGame) {

} else {}


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

    // let archerButton = document.getElementById('archer-button');
    // archerButton.addEventListener('click', playerChoice);
    // let samuraiButton = document.getElementById('samurai-button');
    // samuraiButton.addEventListener('click', playerChoice);
    // let spearmenButton = document.getElementById('spearmen-button');
    // spearmenButton.addEventListener('click', playerChoice);
    // let cavalryButton = document.getElementById('cavalry-button');
    // cavalryButton.addEventListener('click', playerChoice);


    // function makeSelection(selection) {
    //     console.log(selection);
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

// function runGame() { }

// Random number generator used to generate cpu choice


// function generateCpuChoice() {
//     const randomNumber = Math.floor(Math.random() * 4) + 1;

//     if (randomNumber === 1) {
//         cpuChoice = 'archer';
//     }

//     if (randomNumber === 2) {
//         cpuChoice = 'samurai';
//     }

//     if (randomNumber === 3) {
//         cpuChoice = 'spearmen';
//     }

//     if (randomNumber === 4) {
//         cpuChoice = 'cavalry';
//     }

//     cpuChoiceDisplay.innerHTML = cpuChoice;
// }

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
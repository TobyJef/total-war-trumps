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

// Random number generator used to generate cpu choice from array of game cards
// CPU choice function
function cpuCardPick() {
    const cpuChoices = ['archer', 'samurai', 'spearmen', 'cavalry'];
    const randomNumber = Math.floor(Math.random() * 4);
    return cpuChoices[randomNumber];
}

// Player choice function
function game(playerChoice) {
    const cpuChoice = cpuCardPick();
    if (cpuChoice === playerChoice) {
        console.log("draw");
    }

    if (cpuChoice === 'archer' && playerChoice === 'spearmen') {
        console.log("draw");
    }

    if (playerChoice === 'archer' && cpuChoice === 'spearmen') {
        console.log("draw");
    }

    console.log("playerChoice => " + playerChoice);
    console.log("cpuChoice => " + cpuChoice);
}


// Victory conditions



// if (cpuCardPick === 'archer' && playerChoice === 'spearmen') {
//     result = 'Draw';
// }

// if (cpuCardPick === 'samurai' && playerChoice === 'cavalry') {
//     result = 'Draw';
// }

// if (cpuCardPick === 'archer' && playerChoice === 'samurai') {
//     result = 'Shameful Defeat';
//     console.log("player loss");
// }

// if (cpuChoice === 'samurai' && playerChoice === 'spearmen') {
//     result = 'Shameful Defeat';
//     console.log("player loss");
// }

// if (cpuChoice === 'spearmen' && playerChoice === 'cavalry') {
//     result = 'Shameful Defeat';
//     console.log("player loss");
// }

// if (cpuChoice === 'cavalry' && playerChoice === 'archer') {
//     result = 'Shameful Defeat';
//     console.log("player loss");
// }
// if (cpuChoice === 'samurai' && playerChoice === 'archer') {
//     result = 'Glorious Victory!';
//     console.log("player win");
// }
// if (cpuChoice === 'spearmen' && playerChoice === 'samurai') {
//     result = 'Glorious Victory!';
//     console.log("player win");
// }
// if (cpuChoice === 'cavalry' && playerChoice === 'spearmen') {
//     result = 'Glorious Victory!';
//     console.log("player win");
// }
// if (cpuChoice === 'archer' && playerChoice === 'cavalry') {
//     result = 'Glorious Victory!';
//     console.log("player win");
// }

// resultDisplay.innerHTML = result;









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

// const winResult = 'Glorious Victory!';
// const lossResult = 'Shameful Defeat';

// 
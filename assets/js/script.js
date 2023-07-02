// Wait to start game after DOM has finished loading
// code 
// document.addEventListener("DOMContentLoaded", function () {
//     let buttons = document.getElementsByTagName("button");

// });

// Player and Computer scores
var playerScoreCounter = 0;
const playerScore = document.getElementById("player-score");
var cpuScoreCounter = 0;
const cpuScore = document.getElementById("cpu-score");
const scoreBox = document.getElementById("score-box");

// Result message
const result = document.getElementsByClassName("result > p");

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
// If statements
function game(playerChoice) {
    const cpuChoice = cpuCardPick();
    if (cpuChoice === playerChoice) {
        draw();
        console.log("draw");
    }

    if (cpuChoice === 'archer' && playerChoice === 'spearmen') {
        draw();
        console.log("draw");
    }

    if (playerChoice === 'archer' && cpuChoice === 'spearmen') {
        draw();
        console.log("draw");
    }

    if (cpuChoice === 'samurai' && playerChoice === 'cavalry') {
        draw();
        console.log("draw");
    }

    if (playerChoice === 'samurai' && cpuChoice === 'cavalry') {
        draw();
        console.log("draw");
    }

    if (cpuChoice === 'archer' && playerChoice === 'samurai') {
        loss();
        console.log("player loss");
    }

    if (cpuChoice === 'samurai' && playerChoice === 'spearmen') {
        loss();
        console.log("player loss");
    }

    if (cpuChoice === 'spearmen' && playerChoice === 'cavalry') {
        loss();
        console.log("player loss");
    }

    if (cpuChoice === 'cavalry' && playerChoice === 'archer') {
        loss();
        console.log("player loss");
    }
    if (cpuChoice === 'samurai' && playerChoice === 'archer') {
        victory();
        console.log("player win");
    }
    if (cpuChoice === 'spearmen' && playerChoice === 'samurai') {
        victory();
        console.log("player win");
    }
    if (cpuChoice === 'cavalry' && playerChoice === 'spearmen') {
        victory();
        console.log("player win");
    }
    if (cpuChoice === 'archer' && playerChoice === 'cavalry') {
        victory();
        console.log("player win");
    }

    console.log("playerChoice => " + playerChoice);
    console.log("cpuChoice => " + cpuChoice);
}

function win(playerChoice, cpuChoice) {
    playerScoreCounter++;
    playerScore.innerHTML = playerScoreCounter;
    cpuScore.innerHTML = cpuScoreCounter;
    result.innerHTML = `playerChoice + " Defeats " + cpuChoice + ". You win"`;
    console.log("you win");
    console.log(playerScoreCounter);
}


function loss() {
    cpuScoreCounter++;
    cpuScore.innerHTML = cpuScoreCounter;
    console.log("you loose");
    console.log(cpuScoreCounter);
}

function draw() { }


// Victory conditions

// result = 'Glorious Victory!';
// result = 'Shameful Defeat';



// resultDisplay.innerHTML = result;


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




// let playGame = confirm("Are you ready to defend your Kingdom?");
// if (playGame) {}

    // function getFormDetails(event) {

    //     event.preventDefault();

    //     let name = document.getElementById('name');
    //     console.log('name');

    //     document.getElementById('name-result').textContent = name.value;
    // }


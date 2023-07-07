// Wait to start game after DOM has finished loading
// Code used from Code Institute Love Maths project
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
});

// Player and Computer scores
let playerScoreCounter = 0;
const playerScore = document.getElementById("player-score");
let cpuScoreCounter = 0;
const cpuScore = document.getElementById("cpu-score");
const scoreBox = document.getElementById("score-box");

// Final result message
let finalResult = document.getElementById("final-result");

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
// If win/loss/draw statements
function game(playerChoice) {
    const cpuChoice = cpuCardPick();
    if (cpuChoice === playerChoice) {
        battleOutcome("draw", playerChoice, cpuChoice);
        console.log("draw");
    }

    if (cpuChoice === 'archer' && playerChoice === 'spearmen') {
        battleOutcome("draw", playerChoice, cpuChoice);
        console.log("draw");
    }

    if (playerChoice === 'samurai' && cpuChoice === 'cavalry') {
        battleOutcome("draw", playerChoice, cpuChoice);
        console.log("draw");
    }

    if (cpuChoice === 'archer' && playerChoice === 'samurai') {
        battleOutcome("loose", playerChoice, cpuChoice);
        console.log("player loss");
    }

    if (cpuChoice === 'samurai' && playerChoice === 'spearmen') {
        battleOutcome("loose", playerChoice, cpuChoice);
        console.log("player loss");
    }

    if (cpuChoice === 'spearmen' && playerChoice === 'cavalry') {
        battleOutcome("loose", playerChoice, cpuChoice);
        console.log("player loss");
    }

    if (cpuChoice === 'cavalry' && playerChoice === 'archer') {
        battleOutcome("loose", playerChoice, cpuChoice);
        console.log("player loss");
    }
    if (cpuChoice === 'samurai' && playerChoice === 'archer') {
        battleOutcome("win", playerChoice, cpuChoice);
        console.log("player win");
    }
    if (cpuChoice === 'spearmen' && playerChoice === 'samurai') {
        battleOutcome("win", playerChoice, cpuChoice);
        console.log("player win");
    }
    if (cpuChoice === 'cavalry' && playerChoice === 'spearmen') {
        battleOutcome("win", playerChoice, cpuChoice);
        console.log("player win");
    }
    if (cpuChoice === 'archer' && playerChoice === 'cavalry') {
        battleOutcome("win", playerChoice, cpuChoice);
        console.log("player win");
    }

    checkForVictory();

    console.log("playerChoice => " + playerChoice);
    console.log("cpuChoice => " + cpuChoice);
};

function battleOutcome(outcome, playerChoice, cpuChoice) {

    if (outcome == "win") {
        playerScoreCounter++;
        playerScore.innerHTML = playerScoreCounter;
        resultMessage.innerHTML = `Glorious Victory! The Shogun's ${cardNameConverter(playerChoice)} Defeated The Daimyo's ${cardNameConverter(cpuChoice)}.`;
        console.log("you win");
        console.log(playerScoreCounter);
    } else if (outcome == "loose") {
        cpuScoreCounter++;
        cpuScore.innerHTML = cpuScoreCounter;
        resultMessage.innerHTML = `Shameful Defeat! The Daimyo's ${cardNameConverter(cpuChoice)} Defeated The Shogun's ${cardNameConverter(playerChoice)}.`;
        console.log("you loose");
        console.log(cpuScoreCounter);
    } else {
        resultMessage.innerHTML = `Both sides were evenly matched! The Shogun's ${cardNameConverter(playerChoice)} Stalemates The Daimyo's ${cardNameConverter(cpuChoice)}`;
        console.log("no winner");
    }
};

// Acknowledgement of help with construct of the below code from Ed at Tutor Support.
// Credit given to Ed.
// Although now renamed by myself. if (playerScoreCounter === 5) was provided by Ed.
// Advice on where to call the function also provided.
// More info regarding help is located within the README.md.

// Final game total win/loss

function checkForVictory() {
    if (playerScoreCounter === 5) {
        finalResult.innerHTML = `Congratulations, You have defended your Kingdom!`;
        finalResult.style.color = "green";
        document.getElementById('replay-button').style.display = 'block';
        alert('You Win');
        console.log('Campaign Victory');
    } else if (cpuScoreCounter === 5) {
        finalResult.innerHTML = `You have lost control of your Kingdom.`;
        document.getElementById('replay-button').style.display = 'block';
        alert('You Lose');
        console.log('Campaign Defeat');
    }
};

// Round result message
let resultMessage = document.getElementById("result-message");

//Converter to capitalise card names 
function cardNameConverter(cardName) {
    if (cardName === "archer") return "Archer";
    if (cardName === "samurai") return "Samurai";
    if (cardName === "spearmen") return "Spearmen";
    if (cardName === "cavalry") return "Cavalry";
};

// Replay game button

function replayGame() {
    document.getElementById('replay-button').style.display = 'none';
    playerScoreCounter.innerHTML = 0;
    cpuScoreCounter.innerHTML = 0;
};

function hideText() {
    let x = document.getElementById("text-area");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};

function showGame() {
    let y = document.getElementsByClassName("game-area");
    if (y.style.display === "block") {
        y.style.display = "none";
    } else {
        y.style.dispaly = "block";
    }
};

function beginGame() {
    let y = document.getElementsByClassName('game-area');
    let hideButton = document.getElementsById('hide-button');
    if (y.style.display == 'none') {
        y.style.display = 'block';
        hideButton.innerHTML = 'Return to Start';
    } else {
        y.style.display = 'none';
        hideButton.innerHTML = 'Begin Campaign';
    }
};

beginGame();


// let replayGame = confirm("Would you like to play again?");
// if (replayGame) {}

    // function getFormDetails(event) {

    //     event.preventDefault();

    //     let name = document.getElementById('name');
    //     console.log('name');

    //     document.getElementById('name-result').textContent = name.value;
    // }


// Wait to start game after DOM has finished loading
// Code used from Code Institute Love Maths project
document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName('button');
});

// Player and Computer scores
let playerScoreCounter = 0;
const playerScore = document.getElementById('player-score');
let cpuScoreCounter = 0;
const cpuScore = document.getElementById('cpu-score');
const scoreBox = document.getElementById('score-box');

// Final result message
let finalResult = document.getElementById('final-result');

// Game cards
const archer = document.getElementById('archer-button');
const samurai = document.getElementById('samurai-button');
const spearmen = document.getElementById('spearmen-button');
const cavalry = document.getElementById('cavalry-button');

// Hide and Reveal Button press
let hideButton = document.getElementById('hide-button');

function beginGame() {
    if (document.getElementById('text-area')) {
        if (document.getElementById('text-area').style.display == 'none') {
            document.getElementById('text-area').style.display = 'block';
            document.getElementById('game-area').style.display = 'none';
            hideButton.innerHTML = 'Begin Campaign';
        }
        else {
            document.getElementById('text-area').style.display = 'none';
            document.getElementById('game-area').style.display = 'block';
            hideButton.innerHTML = 'Rules';
            document.getElementById('hide-button').style.width = '110px';
        }
    }
};

// Game card event listeners
function battle() {
    archer.addEventListener('click', function () {
        game('archer');
    });
    samurai.addEventListener('click', function () {
        game('samurai');
    });
    spearmen.addEventListener('click', function () {
        game('spearmen');
    });
    cavalry.addEventListener('click', function () {
        game('cavalry');
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
        battleOutcome('draw', playerChoice, cpuChoice);
    }
    if (cpuChoice === 'archer' && playerChoice === 'spearmen') {
        battleOutcome('draw', playerChoice, cpuChoice);
    }
    if (playerChoice === 'samurai' && cpuChoice === 'cavalry') {
        battleOutcome('draw', playerChoice, cpuChoice);
    }
    if (cpuChoice === 'archer' && playerChoice === 'samurai') {
        battleOutcome('loss', playerChoice, cpuChoice);
    }
    if (cpuChoice === 'samurai' && playerChoice === 'spearmen') {
        battleOutcome('loss', playerChoice, cpuChoice);
    }
    if (cpuChoice === 'spearmen' && playerChoice === 'cavalry') {
        battleOutcome('loss', playerChoice, cpuChoice);
    }
    if (cpuChoice === 'cavalry' && playerChoice === 'archer') {
        battleOutcome('loss', playerChoice, cpuChoice);
    }
    if (cpuChoice === 'samurai' && playerChoice === 'archer') {
        battleOutcome("win", playerChoice, cpuChoice);
    }
    if (cpuChoice === 'spearmen' && playerChoice === 'samurai') {
        battleOutcome('win', playerChoice, cpuChoice);
    }
    if (cpuChoice === 'cavalry' && playerChoice === 'spearmen') {
        battleOutcome('win', playerChoice, cpuChoice);
    }
    if (cpuChoice === 'archer' && playerChoice === 'cavalry') {
        battleOutcome('win', playerChoice, cpuChoice);
    }
    checkForVictory();
};

// Acknowledgement of help with construct of the below code provided by my mentor Graeme Taylor.
// Credit of code given to Graeme Taylor.
// More info regarding help is located within the README.md.

// Combination if else function to count scores and call win/loss/draw messages
function battleOutcome(outcome, playerChoice, cpuChoice) {

    if (outcome == 'win') {
        playerScoreCounter++;
        playerScore.innerHTML = playerScoreCounter;
        resultMessage.innerHTML = `Glorious Victory! The Shogun's ${cardNameConverter(playerChoice)} Defeated The Daimyo's ${cardNameConverter(cpuChoice)}.`;
    } else if (outcome == 'loss') {
        cpuScoreCounter++;
        cpuScore.innerHTML = cpuScoreCounter;
        resultMessage.innerHTML = `Shameful Defeat! The Daimyo's ${cardNameConverter(cpuChoice)} Defeated The Shogun's ${cardNameConverter(playerChoice)}.`;
    } else {
        resultMessage.innerHTML = `Both sides were evenly matched! The Shogun's ${cardNameConverter(playerChoice)} Stalemates The Daimyo's ${cardNameConverter(cpuChoice)}`;
    }
};

// Acknowledgement of help with construct of the below code from Ed at Tutor Support.
// Credit given to Ed.
// Although now renamed by myself. original name of "if (playerScoreCounter === 5)" was provided by Ed.
// Advice on where to call the function also provided.
// More info regarding help is located within the README.md.

// Final game total win/loss
function checkForVictory() {
    if (playerScoreCounter === 5) {
        finalResult.innerHTML = `Congratulations, You have defended your Kingdom!`;
        finalResult.style.color = 'green';
        document.getElementById('replay-button').style.display = 'block';
        document.getElementById('archer-button').disabled = true;
        document.getElementById('samurai-button').disabled = true;
        document.getElementById('spearmen-button').disabled = true;
        document.getElementById('cavalry-button').disabled = true;
    } else if (cpuScoreCounter === 5) {
        finalResult.innerHTML = `You have lost control of your Kingdom.`;
        document.getElementById('replay-button').style.display = 'block';
        document.getElementById('archer-button').disabled = true;
        document.getElementById('samurai-button').disabled = true;
        document.getElementById('spearmen-button').disabled = true;
        document.getElementById('cavalry-button').disabled = true;
    }
};

// Round result message
let resultMessage = document.getElementById('result-message');

//Converter to capitalise card names 
function cardNameConverter(cardName) {
    if (cardName === 'archer') return 'Archer';
    if (cardName === 'samurai') return 'Samurai';
    if (cardName === 'spearmen') return 'Spearmen';
    if (cardName === 'cavalry') return 'Cavalry';
};

// Replay game button
function replayGame() {
    document.getElementById('replay-button').style.display = 'none';
    document.getElementById('archer-button').disabled = false;
    document.getElementById('samurai-button').disabled = false;
    document.getElementById('spearmen-button').disabled = false;
    document.getElementById('cavalry-button').disabled = false;
    resultMessage.innerHTML = '';
    finalResult.innerHTML = '';
};

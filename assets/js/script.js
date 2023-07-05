// Wait to start game after DOM has finished loading
// Code used from Code Institute Love Maths project
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
});

// Player and Computer scores
var playerScoreCounter = 0;
const playerScore = document.getElementById("player-score");
var cpuScoreCounter = 0;
const cpuScore = document.getElementById("cpu-score");
const scoreBox = document.getElementById("score-box");

// Final result message
var finalResult = document.getElementById("final-result");

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
        draw(playerChoice, cpuChoice);
        console.log("draw");
    }

    if (cpuChoice === 'archer' && playerChoice === 'spearmen') {
        draw(playerChoice, cpuChoice);
        console.log("draw");
    }

    if (playerChoice === 'archer' && cpuChoice === 'spearmen') {
        draw(playerChoice, cpuChoice);
        console.log("draw");
    }

    if (cpuChoice === 'samurai' && playerChoice === 'cavalry') {
        draw(playerChoice, cpuChoice);
        console.log("draw");
    }

    if (playerChoice === 'samurai' && cpuChoice === 'cavalry') {
        draw(playerChoice, cpuChoice);
        console.log("draw");
    }

    if (cpuChoice === 'archer' && playerChoice === 'samurai') {
        loss(playerChoice, cpuChoice);
        console.log("player loss");
    }

    if (cpuChoice === 'samurai' && playerChoice === 'spearmen') {
        loss(playerChoice, cpuChoice);
        console.log("player loss");
    }

    if (cpuChoice === 'spearmen' && playerChoice === 'cavalry') {
        loss(playerChoice, cpuChoice);
        console.log("player loss");
    }

    if (cpuChoice === 'cavalry' && playerChoice === 'archer') {
        loss(playerChoice, cpuChoice);
        console.log("player loss");
    }
    if (cpuChoice === 'samurai' && playerChoice === 'archer') {
        victory(playerChoice, cpuChoice);
        console.log("player win");
    }
    if (cpuChoice === 'spearmen' && playerChoice === 'samurai') {
        victory(playerChoice, cpuChoice);
        console.log("player win");
    }
    if (cpuChoice === 'cavalry' && playerChoice === 'spearmen') {
        victory(playerChoice, cpuChoice);
        console.log("player win");
    }
    if (cpuChoice === 'archer' && playerChoice === 'cavalry') {
        victory(playerChoice, cpuChoice);
        console.log("player win");
    }

    playerVictory();
    cpuVictory();
    campaignWin();
    campaignLoss();

    console.log("playerChoice => " + playerChoice);
    console.log("cpuChoice => " + cpuChoice);
};

// Final game total win/loss 

function playerVictory() {
    if (playerScoreCounter === 5) {
        finalResult.innerHTML = `Congratulations, You have defended your Kingdom!`;
        console.log('Campaign Victory');
    }

};

function cpuVictory() {
    if (cpuScoreCounter === 5) {
        console.log('Campaign Defeat');
        finalResult.innerHTML = `You have lost control of your Kingdom`;
    }
};

// Round result message
var resultMessage = document.getElementById("result-message");

// result message functions
//win message
function victory(playerChoice, cpuChoice) {
    playerScoreCounter++;
    playerScore.innerHTML = playerScoreCounter;
    resultMessage.innerHTML = `Glorious Victory! The Shogun's ${cardNameConverter(playerChoice)} Defeated The Daimyo's ${cardNameConverter(cpuChoice)}.`;
    console.log("you win");
    console.log(playerScoreCounter);
}

//loss message
function loss(playerChoice, cpuChoice) {
    cpuScoreCounter++;
    cpuScore.innerHTML = cpuScoreCounter;
    resultMessage.innerHTML = `Shameful Defeat! The Daimyo's ${cardNameConverter(cpuChoice)} Defeated The Shogun's ${cardNameConverter(playerChoice)}.`;
    console.log("you loose");
    console.log(cpuScoreCounter);
}

//draw message
function draw(playerChoice, cpuChoice) {
    resultMessage.innerHTML = `Both sides were evenly matched! The Shogun's ${cardNameConverter(playerChoice)} Stalemates The Daimyo's ${cardNameConverter(cpuChoice)}`;
    console.log("no winner");
}



function campaignWin(playerVictory) {

};

function campaignLoss(cpuVictory) {

};

//Converter to capitalise card names 
function cardNameConverter(cardName) {
    if (cardName === "archer") return "Archer";
    if (cardName === "samurai") return "Samurai";
    if (cardName === "spearmen") return "Spearmen";
    if (cardName === "cavalry") return "Cavalry";
}


// Display Outcome function - first to 5 victories to win campaign

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


// let playGame = confirm("Are you ready to defend your Kingdom?");
// if (playGame) {}

    // function getFormDetails(event) {

    //     event.preventDefault();

    //     let name = document.getElementById('name');
    //     console.log('name');

    //     document.getElementById('name-result').textContent = name.value;
    // }


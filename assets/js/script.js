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

// Result message
var resultMessage = document.getElementById("result-message");

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

    console.log("playerChoice => " + playerChoice);
    console.log("cpuChoice => " + cpuChoice);
}


// result message functions
//win message
function victory(playerChoice, cpuChoice) {
    playerScoreCounter++;
    playerScore.innerHTML = playerScoreCounter;
    resultMessage.innerHTML = `The Shogun's ${cardNameConverter(playerChoice)} Defeats The Daimyo's ${cardNameConverter(cpuChoice)}. Glorious Victory!`;
    document.getElementById(playerChoice).classList.add('player-choice-green');
    console.log("you win");
    console.log(playerScoreCounter);
}

//loss message
function loss(playerChoice, cpuChoice) {
    cpuScoreCounter++;
    cpuScore.innerHTML = cpuScoreCounter;
    resultMessage.innerHTML = ` The Daimyo's ${cardNameConverter(cpuChoice)} Defeats The Shogun's ${cardNameConverter(playerChoice)}. Shameful Defeat!`;
    console.log("you loose");
    console.log(cpuScoreCounter);
}

//draw message
function draw(playerChoice, cpuChoice) {
    resultMessage.innerHTML = `Both sides were evenly matched! The Shogun's ${cardNameConverter(playerChoice)} Stalemated against The Daimyo's ${cardNameConverter(cpuChoice)}`;
    console.log("no winner");
}


//Converter to capitalise card names 
function cardNameConverter(cardName) {
    if (cardName === "archer") return "Archer";
    if (cardName === "samurai") return "Samurai";
    if (cardName === "spearmen") return "Spearmen";
    if (cardName === "cavalry") return "Cavalry";
}


function campaignVictory(playerChoice){
    for (let i = 0, i = 5, i++) {

    }
};

function campaingDefeat(cpuChoice){
    for (let i = 0, i = 5, i++) {

    }
};


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


let playerScore = 0;
let computerScore = 0;

const myTools = ["rock","paper","scissors"];
// Function returns random computer choice 

function getComputerChoice() {
    return myTools[Math.floor(Math.random() * myTools.length)];
};

// Function that plays one round of the game

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return "You won, " + playerSelection + " beats " + computerSelection + ".";
    } else if (playerSelection === computerSelection) {
        return "It\'s a draw.";
    } else if ( (computerSelection === 'rock' && playerSelection === 'scissors')||
                (computerSelection === 'paper' && playerSelection === 'rock')||
                (computerSelection === 'scissors' && playerSelection == 'paper') ) {
        return "You lose, " + computerSelection + " beats " + playerSelection + ".";
    } else {
        return "There is a disturbance in the Force.";
    }

};
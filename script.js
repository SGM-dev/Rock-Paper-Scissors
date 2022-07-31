let playerScore = 0;
let computerScore = 0;

const myTools = ["rock","paper","scissors"];
// Function returns random computer choice 

function getComputerChoice() {
    return myTools[Math.floor(Math.random() * myTools.length)];
};


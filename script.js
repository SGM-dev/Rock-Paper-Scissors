const optionBtn = document.querySelectorAll("div.optionBtn button");
const roundResults = document.querySelector("#roundResults");
const playerPoints = document.querySelector("#playerScore");
const computerPoints = document.querySelector("#computerScore");
const resetBtn = document.querySelector("#reset");

//refresh page for new game
resetBtn.addEventListener("click", () => location.reload());

//get player's choice
optionBtn.forEach((button) => {
  button.addEventListener("click", getPlayerChoice);
});

let myTools = ["rock", "paper", "scissors"];
let playerScore = 0;
let compScore = 0;
let playerChoice;

function computerPlay() {
    return myTools[Math.floor(Math.random() * myTools.length)];
}

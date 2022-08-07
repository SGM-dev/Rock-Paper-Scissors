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
};

function getPlayerChoice(e) {
    let playerSelection= (e.target.id);
    playerChoice = e.target.textContent;
    playRound(playerSelection, computerPlay());
  };

// define one round of game
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerPoints.textContent = ++playerScore;
    roundResults.textContent = `You win! ${playerChoice} beats ${computerSelection}.`;
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection == "paper")
  ) {
    computerPoints.textContent = ++compScore;
    roundResults.textContent = `You lose! ${computerSelection} beats ${playerChoice}.`;
  } else {
    roundResults.textContent = `Tie!`;
  }
  checkWinner();
};

const result = {
    computer: ["Computer wins!", "red"],
    player: ["Player wins!","green"],
    tie: ["It's a tie!","blue"]
};

function checkWinner() {
    if (compScore === 5 || playerScore === 5) {
        if (compScore === playerScore) {
            updateWinner('tie');
        } else {
            let win = `${(compScore > playerScore) ? 'computer': 'player'}`;
            updateWinner(win);
        }
    }
};




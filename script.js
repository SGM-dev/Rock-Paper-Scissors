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

// defines one round of game
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

// defines the game's result
const result = {
  computer: ["Computer wins!", "red"],
  player: ["Player wins!", "green"],
  tie: ["It's a tie!", "blue"],
};

// check winner
function checkWinner() {
  if (compScore === 5 || playerScore === 5) {
    if (compScore === playerScore) {
      updateWinner("tie");
    } else {
      let win = `${compScore > playerScore ? "computer" : "player"}`;
      updateWinner(win);
    }
  }
};

// after checking scores, update results and stop the game
function updateWinner(winner) {
  roundResults.textContent = result[winner][0];
  roundResults.style.color = result[winner][1];
  optionBtn.forEach((button) => {
    button.removeEventListener("click", getPlayerChoice);
  });
};

//get player scores
function getPlayerChoice(e) {
    let playerSelection = e.target.id;
    playerChoice = e.target.textContent;
    playRound(playerSelection, computerPlay());
  };
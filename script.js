let playerScore = 0;
let computerScore = 0;
let getPlayerChoice;

const myTools = ["rock", "paper", "scissors"];
// Function returns random computer choice

function getComputerChoice() {
  return myTools[Math.floor(Math.random() * myTools.length)];
}

// Function that plays one round of the game

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    alert(
      "You won, " +
        playerSelection +
        " beats " +
        computerSelection +
        "." +
        " Player: " +
        playerScore +
        " Computer: " +
        computerScore
    );
  } else if (playerSelection === computerSelection) {
    alert("It's a draw.");
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection == "paper")
  ) {
    computerScore++;
    alert(
      "You lose, " +
        computerSelection +
        " beats " +
        playerSelection +
        "." +
        " Player: " +
        playerScore +
        " Computer: " +
        computerScore
    );
  } else {
    return "There is a disturbance in the Force.";
  }
}

// create a 5 round game

function game() {
  for (let i = 0; i < 5; i++) {
    // get choices of player and computer

    let playerSelection;
    if (
      playerSelection != "rock" ||
      playerSelection != "paper" ||
      playerSelection != "scissors"
    ) {
      playerSelection = prompt(
        "Choose from rock, paper or scissors."
      ).toLowerCase();
    }

    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }

  // Display result

  if (playerScore > computerScore) {
    alert(
      "Player won. Refresh the page or run game() on the console to play again."
    );
  } else if (computerScore > playerScore) {
    alert(
      "Computer won. Refresh the page to play again or run game() on the console to play again."
    );
  } else {
    alert(
      "It's a draw. Refresh the page to play again or run game() on the console to play again."
    );
  }
}

window.onload = () => {
  game();
};

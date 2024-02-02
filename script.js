function getComputerChoice() {
  let choices = ["Paper", "Rock", "Scissors"];
  let randomElement = choices[Math.floor(Math.random() * choices.length)];
  return randomElement;
}

function getPlayerChoice() {
  let playerChoice = prompt("Paper, Rock or Scissors ? ").toLowerCase();
  return playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
}

function rockPaperScissorsRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (playerSelection === "Paper" && computerSelection === "Scissors" || playerSelection === "Rock" && computerSelection === "Paper" || playerSelection === "Scissors" && computerSelection === "Rock") {
    console.log(`You lose, ${computerSelection} beats ${playerSelection}.`);
    computerScore++;
  } else {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}.`);
    playerScore++;
  }
}

function playGame(rounds) {
  for (let i = 0; i < rounds; i++) {
    rockPaperScissorsRound(getPlayerChoice(), getComputerChoice());
  }

  if (playerScore === computerScore) {
    console.log("Win/win let's redo a match!");
    playGame(5);
  }
  else if (playerScore < computerScore) {
    console.log(`Winner is : Computer ${computerScore} / ${playerScore}`);
  } else {
    console.log(`Winner is : Player ${playerScore} / ${computerScore}`);
  }
}

let playerScore = 0;
let computerScore = 0;

playGame(5);

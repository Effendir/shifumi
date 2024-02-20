let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");
let wrapper = document.querySelector(".wrapper");
let resultMsg = document.querySelector(".result-msg");
let score = document.querySelector(".score");

function getComputerChoice() {
  let choices = ["Paper", "Rock", "Scissors"];
  let randomElement = choices[Math.floor(Math.random() * choices.length)];
  return randomElement;
}

function getPlayerChoice() {
  rockButton.addEventListener("click", () => {
    rockPaperScissorsRound("Rock", getComputerChoice());
  })
  paperButton.addEventListener("click", () => {
    rockPaperScissorsRound("Paper", getComputerChoice());
  })
  scissorsButton.addEventListener("click", () => {
    rockPaperScissorsRound("Scissors", getComputerChoice());
  })
}

function rockPaperScissorsRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    resultMsg.innerText = "It's a tie!";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors" || playerSelection === "Rock" && computerSelection === "Paper" || playerSelection === "Scissors" && computerSelection === "Rock") {
    computerScore++;
    resultMsg.innerText = `You lose, ${computerSelection} beats ${playerSelection}.`;
  } else {
    playerScore++;
    resultMsg.innerText = `You Win! ${playerSelection} beats ${computerSelection}.`;
  }
  score.innerText = `Score : Player - ${playerScore} / Computer - ${computerScore}`;
  checkScore(playerScore, computerScore);
}

let playerScore = 0;
let computerScore = 0;

function checkScore(player, computer) {
  if (player === 5) {
    score.innerText += " | You won the game with 5 points"
  } else if (computer === 5) {
    score.innerText += " | You lose that game, computer won with 5 points"
  }
}

getPlayerChoice();

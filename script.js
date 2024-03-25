let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");
let wrapper = document.querySelector(".wrapper");
let resultMsg = document.querySelector(".result-msg");
let score = document.querySelector(".score");
let round = 0;
let computerChoiceButton = document.querySelector(".computer-choice");
let retryButton =  document.querySelector(".retry");

function getComputerChoice() {
  let choices = ["paper", "rock", "scissors"];
  let randomElement = choices[Math.floor(Math.random() * choices.length)];
  computerChoiceButton.innerHTML = `<img src="images/${randomElement}.png" alt="${randomElement}">`;
  computerChoiceButton.classList.add('paused');
  return randomElement;
}

function getPlayerChoice() {
  rockButton.addEventListener("click", () => {
    rockPaperScissorsRound("rock", getComputerChoice());
    paperButton.style.display = "none";
    scissorsButton.style.display = "none";
  })
  paperButton.addEventListener("click", () => {
    rockPaperScissorsRound("paper", getComputerChoice());
    scissorsButton.style.display = "none";
    rockButton.style.display = "none";
  })
  scissorsButton.addEventListener("click", () => {
    rockPaperScissorsRound("scissors", getComputerChoice());
    rockButton.style.display = "none";
    paperButton.style.display = "none";
  })
}

function rockPaperScissorsRound(playerSelection, computerSelection) {
  round++;
  if (playerSelection === computerSelection) {
    resultMsg.innerText = `It's a tie! You both picked ${computerSelection}`;
    resultMsg.style.color = "yellow";
  } else if (playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "rock" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    resultMsg.innerText = `You lose, computer picked ${computerSelection}.`;
    resultMsg.style.color = "red";
  } else {
    playerScore++;
    resultMsg.innerText = `You Win! Computer picked ${computerSelection}.`;
    resultMsg.style.color = "green";
  }
  score.innerText = `Round ${round} : Player ${playerScore} / Computer ${computerScore}`;
  retryButton.style.display = "block";
}

retryButton.addEventListener("click", () => {
  scissorsButton.style.display = "flex";
  rockButton.style.display = "flex";
  paperButton.style.display = "flex";
  computerChoiceButton.innerHTML = `<img src="images/rock.png" alt="rock"><img src="images/paper.png" alt="paper"><img src="images/scissors.png" alt="scissors">`;
  computerChoiceButton.classList.remove('paused');
})

let playerScore = 0;
let computerScore = 0;

getPlayerChoice();

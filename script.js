let playerScore = 0;
let computerScore = 0;
let computerSelection;
const pScore = document.querySelector(".pScore");
const cScore = document.querySelector(".cScore");
const winOrLost = document.querySelector(".winOrLost");
const myArray = ["rock", "paper", "scissors"];

//this function returns string
function getComputerChoice() {
  let computerChoice = myArray[Math.floor(Math.random() * myArray.length)];
  return computerChoice;
}

//this function play one round
function playRound(playerselection, computerSelection) {
  console.log(computerSelection);
  if (
    (playerselection === "paper" && computerSelection === "paper") ||
    (playerselection === "scissors" && computerSelection === "scissors") ||
    (playerselection === "rock" && computerSelection === "rock")
  ) {
    console.log("It's a tie!");
  } else if (
    (playerselection === "paper" && computerSelection === "rock") ||
    (playerselection === "rock" && computerSelection === "scissors") ||
    (playerselection === "scissors" && computerSelection === "paper")
  ) {
    console.log("You win!");
    playerScore++;
  } else {
    console.log("You lost!");
    computerScore++;
  }
}

//.startGame button resets a score and starts new game
const playButton = document.querySelector(".startGame");
playButton.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  pScore.textContent = playerScore;
  cScore.textContent = computerScore;
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  winOrLost.textContent = "";
  document.querySelector(".scoreBox").style.display = "block";
});

//update fresh score and declare a winner
function applyNewScore() {
  pScore.textContent = playerScore;
  cScore.textContent = computerScore;
  if (playerScore == 5) {
    winOrLost.textContent = "Congratulations! You win the game!";
    winOrLost.style.display = "block";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  } else if (computerScore == 5) {
    winOrLost.textContent = "You lost the game, try again";
    winOrLost.style.display = "block";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }
}

const rock = document.querySelector(".rock");
rock.addEventListener("click", () => {
  getComputerChoice();
  computerSelection = getComputerChoice();
  playRound("rock", computerSelection);
  applyNewScore();
});

const paper = document.querySelector(".paper");
paper.addEventListener("click", () => {
  getComputerChoice();
  computerSelection = getComputerChoice();
  playRound("paper", computerSelection);
  applyNewScore();
});

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => {
  getComputerChoice();
  computerSelection = getComputerChoice();
  playRound("scissors", computerSelection);
  applyNewScore();
});

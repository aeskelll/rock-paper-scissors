let playerScore = 0;
let computerScore = 0;

//choice array
const myArray = ["rock", "paper", "scissors"];

//this function returns string
function getComputerChoice() {
  let computerChoice = myArray[Math.floor(Math.random() * myArray.length)];
  return computerChoice;
}

//this function play one round
function playRound(playerselection, computerSelection) {
  computerSelection = getComputerChoice();
  playerselection = prompt("Make your choice").toLowerCase();
  console.log(computerSelection);
  if (
    (playerselection === "paper" && computerSelection === "paper") ||
    (playerselection === "scissors" && computerSelection === "scissors") ||
    (playerselection === "rock" && computerSelection === "rock")
  ) {
    alert("It's a tie!");
  } else if (
    (playerselection === "paper" && computerSelection === "rock") ||
    (playerselection === "rock" && computerSelection === "scissors") ||
    (playerselection === "scissors" && computerSelection === "paper")
  ) {
    alert("You win!");
    playerScore++;
  } else {
    alert("You lost!");
    computerScore++;
  }
}

function game() {
  while (playerScore != 5 && computerScore != 5) {
    playRound();
    console.log(`Score: player ${playerScore}, computer ${computerScore}`);
  }
  if (playerScore === 5) {
    alert("You win this game!!!");
  } else if (computerScore === 5) {
    alert("You lose this game");
  }
  playerScore = 0;
  computerScore = 0;
}

let playerScore = 0;
let computerScore = 0;

const weapons = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * weapons.length);
  return weapons[randomIndex];
}

function getPlayerChoice() {
  let choice = prompt("Rock, paper, or scissors?").toLowerCase();
  
  while (!weapons.includes(choice)) {
    choice = prompt("Invalid input. Please choose rock, paper, or scissors:").toLowerCase();
  }
  
  return choice;
}

function playRound(playerChoice, computerChoice) {
  console.log("Computer choice: " + computerChoice);
  console.log("Player choice: " + playerChoice);

  if (playerChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${playerChoice} beats ${computerChoice}`);
    playerScore++;
  } else {
    console.log(`Computer wins! ${computerChoice} beats ${playerChoice}`);
    computerScore++;
  }
}

function playGame() {
  const rounds = parseInt(prompt("How many rounds would you like to play?"), 10);

  if (isNaN(rounds) || rounds <= 0) {
    console.log("Invalid input. Please enter a positive number of rounds.");
    return;
  }

  for (let i = 0; i < rounds; i++) {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
  }

  console.log("Your score: " + playerScore);
  console.log("Computer score: " + computerScore);

  if (playerScore === computerScore) {
    console.log("It's a tie game!");
  } else if (playerScore > computerScore) {
    console.log("Congratulations! You won!");
  } else {
    console.log("Computer wins. Better luck next time!");
  }
}

playGame();

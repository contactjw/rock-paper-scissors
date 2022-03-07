function computerSelection() {
    let randomInt = Math.floor((Math.random() * 3) + 1);
    switch (randomInt) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";    
    }
}

function playerSelection() {
    let playerChoice = window.prompt("Choose Rock, Paper, or Scissors: ");
    switch (playerChoice.toLowerCase()) {
        case "rock":
            return "Rock";
        case "paper":
            return "Paper";
        case "scissors":
            return "Scissors";
        default:
            return "invalid choice";    
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
        return "Tie you both chose " + playerSelection;
    else if (playerSelection === "Rock" && computerSelection === "Scissors")
        return "You Win! Rock beats Scissors";
    else if (playerSelection === "Rock" && computerSelection === "Paper")
        return "You Lose! Paper beats Rock";
    else if (playerSelection === "Paper" && computerSelection === "Rock")
        return "You Win! Paper beats Rock";
    else if (playerSelection === "Paper" && computerSelection === "Scissors")
        return "You Lose! Scissors beats Paper";
    else if (playerSelection === "Scissors" && computerSelection === "Paper")
        return "You Win! Scissors beats Paper";
    else if (playerSelection === "Scissors" && computerSelection === "Rock")
        return "You Lose! Rock beats Scissors";
}

const player = "Rock";
const computer = computerSelection();
console.log(playRound(player, computer));
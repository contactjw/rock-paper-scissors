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
    if (playerSelection === computerSelection) {
        console.log("Tie you both chose " + playerSelection);
        return 0;
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("You Win! Rock beats Scissors");
        return 1;
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("You Lose! Paper beats Rock");
        return 2;
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("You Win! Paper beats Rock");
        return 1;
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log("You Lose! Scissors beats Paper");
        return 2;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("You Win! Scissors beats Paper");
        return 1;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log("You Lose! Rock beats Scissors");
        return 2;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let winner = 0;
    for (let i = 0; i < 5; i++) {
        winner = playRound(playerSelection(), computerSelection());
        switch (winner) {
            case 1:
                playerScore++;
                break;
            case 2:
                computerScore++;
                break;
            default:
                break;
        }
    }
    if (playerScore > computerScore)
        console.log("You won with a score of " + playerScore);
    else if (playerScore < computerScore)
        console.log("You lose, the computer scored " + computerScore);
    else
        console.log("You tied with a score of " + playerScore);
}

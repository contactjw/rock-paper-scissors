let playerScore = 0;
let computerScore = 0;
let gameOver = false;


const playerScoreSelect = document.querySelector("#your-score");
const compScoreSelect = document.querySelector("#computer-score");
playerScoreSelect.textContent = "You: " + playerScore;
compScoreSelect.textContent = "Computer: " + computerScore;

const result = document.querySelector('#result');


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


const rock = document.querySelector("#rock");

rock.addEventListener('click', () => {
    playRound('Rock', computerSelection());
})

const paper = document.querySelector("#paper");

paper.addEventListener('click', () => {
    playRound('Paper', computerSelection());
})

const scissors = document.querySelector("#scissors");

scissors.addEventListener('click', () => {
    playRound('Scissors', computerSelection());
})

const restart = document.querySelector("#restart");

restart.addEventListener('click', () => {
    restartGame();
})


function playRound(playerSelection, computerSelection) {
    if (gameOver == false) {
        if (playerSelection === computerSelection) {
            result.textContent = "Tie you both chose " + playerSelection;
        }
        else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            result.textContent = "You Win! Rock beats Scissors";
            playerScore++;
        }
        else if (playerSelection === "Rock" && computerSelection === "Paper") {
            result.textContent = "You Lose! Paper beats Rock";
            computerScore++;    
        }
        else if (playerSelection === "Paper" && computerSelection === "Rock") {
            result.textContent = "You Win! Paper beats Rock";
            playerScore++;
        }
        else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            result.textContent = "You Lose! Scissors beats Paper";
            computerScore++;
        }
        else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            result.textContent = "You Win! Scissors beats Paper";
            playerScore++;
        }
        else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            result.textContent = "You Lose! Rock beats Scissors";
            computerScore++;
        }
        playerScoreSelect.textContent = "You: " + playerScore;
        compScoreSelect.textContent = "Computer: " + computerScore;
        console.log("Your score: " + playerScore);
        console.log("Computer Score: " + computerScore);
    }

    if (playerScore === 5) {
        result.textContent = "You won the whole game with a score of " + playerScore + "!";
        result.appendChild(document.createElement("br"));
        result.append("Click Restart if you'd like to play again.");
        gameOver = true;
        return;
    }
    else if (computerScore === 5) {
        result.textContent = "You lost the whole game, computer scored " + computerScore + "!";
        result.appendChild(document.createElement("br"));
        result.append("Click Restart if you'd like to play again.");
        gameOver = true;
        return;
    }
}


function restartGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSelect.textContent = "You: " + playerScore;
    compScoreSelect.textContent = "Computer: " + computerScore;
    gameOver = false;
    result.textContent = "Select your move!";
}

// // function playerSelection() {
// //     let playerChoice = window.prompt("Choose Rock, Paper, or Scissors: ");
// //     switch (playerChoice.toLowerCase()) {
// //         case "rock":
// //             return "Rock";
// //         case "paper":
// //             return "Paper";
// //         case "scissors":
// //             return "Scissors";
// //         default:
// //             return "invalid choice";    
// //     }
// // }

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     let winner = 0;
//     while (playerScore < 5 && computerScore < 5) {
//         winner = playRound(playerSelection(), computerSelection());
//         switch (winner) {
//             case 1:
//                 playerScore++;
//                 break;
//             case 2:
//                 computerScore++;
//                 break;
//             default:
//                 break;
//         }
//     }
//     if (playerScore > computerScore)
//         console.log("You won with a score of " + playerScore);
//     else if (playerScore < computerScore)
//         console.log("You lose, the computer scored " + computerScore);
//     else
//         console.log("You tied with a score of " + playerScore);
// }


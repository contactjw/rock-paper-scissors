let playerScore = 0;
let computerScore = 0;
let gameOver = false;


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
            console.log("Tie you both chose " + playerSelection);
        }
        else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            console.log("You Win! Rock beats Scissors");
            playerScore++;
        }
        else if (playerSelection === "Rock" && computerSelection === "Paper") {
            console.log("You Lose! Paper beats Rock");
            computerScore++;    
        }
        else if (playerSelection === "Paper" && computerSelection === "Rock") {
            console.log("You Win! Paper beats Rock");
            playerScore++;
        }
        else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            console.log("You Lose! Scissors beats Paper");
            computerScore++;
        }
        else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            console.log("You Win! Scissors beats Paper");
            playerScore++;
        }
        else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            console.log("You Lose! Rock beats Scissors");
            computerScore++;
        }
        console.log("Your score: " + playerScore);
        console.log("Computer Score: " + computerScore);
    }

    if (playerScore === 5) {
        console.log("You won the whole game with a score of " + playerScore);
        gameOver = true;
        return;
    }
    else if (computerScore === 5) {
        console.log("You lost the whole game, computer scored ") + computerScore;
        gameOver = true;
        return;
    }
}


function restartGame() {
    playerScore = 0;
    computerScore = 0;
    gameOver = false;
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


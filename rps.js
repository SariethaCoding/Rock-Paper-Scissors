
// Global vars to keep player and computer scores
let computerScore = 0;
let playerScore = 0;


// Randomly return either Rock Paper or Scissors as the computers' choice for the game
function getComputerChoice(){
    const game_options = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    //console.log(game_options[randomNumber]);
    return(game_options[randomNumber]);
}


function playRound(playerSelection, computerSelection){
    console.log(playerSelection, computerSelection);
    let pSelection = playerSelection.toLowerCase();
    let cSelection = computerSelection.toLowerCase();
    //console.log(pSelection);
    
    // Both picked the same - it's a draw
    if (pSelection === cSelection) {
        console.log("It's a draw! You both choose " + computerSelection);
    }


    else if (cSelection === "rock") {
        if (pSelection === "scissors") {
            // rock beats scissors, pc wins
            console.log("Rock beats Scissors - Computer wins!");
            computerScore = computerScore + 1;
        }
        else if (pSelection === "paper") {
            console.log("Paper covers Rock - Player wins!");
            playerScore = playerScore + 1;
        }
    }

    else if (cSelection === "paper")     {
        if (pSelection === "scissors") {
            console.log("Scissors cut Paper - Player wins!");
            playerScore = playerScore + 1;
        }
        else if (pSelection === "rock") {
            console.log("Paper covers Rock - Computer wins!");
            computerScore = computerScore + 1;
        }
    }

    else if (cSelection === "scissors") {
        if (pSelection === "paper") {
            console.log("Scissors cut Paper - Computer wins!");
            computerScore = computerScore + 1;
        }
        else if (pSelection === "rock") {
            console.log("Rock smashes Scissors - Player wins!");
            playerScore = playerScore + 1;
        }
    }

    
}




// Play 5 rounds
for (let i = 0; i >= 5; i++){
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Pick Rock, Paper or Scissors");
    playRound(playerSelection, computerSelection);
}

// print final scores
if (playerScore === computerScore) {
    console.log("It's a draw - you both scored " + playerScore);
}
else if (playerScore > computerScore) {
    console.log("Player Wins! Player score : " + playerScore + " vs Computer score : " + computerScore);
}
else if (computerScore > playerScore) {
    console.log("Computer Wins! Player score : " + playerScore + " vs Computer score : " + computerScore);
}



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



// plays one round of RPS
function playRound(playerSelection, computerSelection){
    
    let pSelection = playerSelection.toLowerCase();
    let cSelection = computerSelection.toLowerCase();
    console.log(pSelection + " vs " + cSelection);
    
    // Both picked the same - it's a draw
    if (pSelection === cSelection) {
        document.querySelector('#game').textContent = ("It's a draw! You both choose " + computerSelection);
        computerScore = computerScore + 1;
        playerScore = playerScore + 1;
    }


    else if (cSelection === "rock") {
        if (pSelection === "scissors") {
            // rock beats scissors, pc wins
            document.querySelector('#game').textContent = ("Rock beats Scissors - Computer wins!");
            computerScore = computerScore + 1;
        }
        else if (pSelection === "paper") {
            document.querySelector('#game').textContent = ("Paper covers Rock - Player wins!");
            playerScore = playerScore + 1;
        }
    }

    else if (cSelection === "paper")     {
        if (pSelection === "scissors") {
            document.querySelector('#game').textContent = ("Scissors cut Paper - Player wins!");
            playerScore = playerScore + 1;
        }
        else if (pSelection === "rock") {
            document.querySelector('#game').textContent = ("Paper covers Rock - Computer wins!");
            computerScore = computerScore + 1;
        }
    }

    else if (cSelection === "scissors") {
        if (pSelection === "paper") {
            document.querySelector('#game').textContent = ("Scissors cut Paper - Computer wins!");
            computerScore = computerScore + 1;
        }
        else if (pSelection === "rock") {
            document.querySelector('#game').textContent = ("Rock beats Scissors - Player wins!");
            playerScore = playerScore + 1;
        }
    }

    
    document.querySelector('#pc-score').textContent = "PC : " + computerScore;
    document.querySelector('#player-score').textContent = "Player : " + playerScore;

}



function playGame(playerChoice) {
        
        let computerSelection = getComputerChoice();
        let playerSelection = playerChoice;
        playRound(playerSelection, computerSelection);
    
    /*
    // print final scores
    if (playerScore === computerScore) {
        console.log("It's a draw - you both scored " + playerScore);
    }
    else if (playerScore > computerScore) {
        document.querySelector('#game').textContent = ("Player Wins! Player score : " + playerScore + " vs Computer score : " + computerScore);
        document.querySelector('#pc-score').textContent = "PC : " + computerScore;
    }
    else if (computerScore > playerScore) {
        console.log("Computer Wins! Player score : " + playerScore + " vs Computer score : " + computerScore);
    }
    */
}



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

    // Remove old image (by changing the class) and set the new image for selected R/P/S for PC
    document.getElementById("pcimg").classList.remove("scissors");
    document.getElementById("pcimg").classList.remove("rock");
    document.getElementById("pcimg").classList.remove("paper");
    document.getElementById("pcimg").classList.add(cSelection);

    // Remove old image (by changing the class) and set the new image for selected R/P/S for Player
   document.getElementById("playerimg").classList.remove("scissors");
   document.getElementById("playerimg").classList.remove("rock");
   document.getElementById("playerimg").classList.remove("paper");
   document.getElementById("playerimg").classList.add(pSelection);

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
    
    // End game after player/pc scores 20
    if ((playerScore === 2) || (computerScore === 2)) {
        //document.querySelector('#game').textContent = "GAME OVER";

   // print final scores
   if (playerScore === computerScore) {
    document.querySelector('#game').textContent = "GAME OVER | It's a draw!";
    }
    else if (playerScore > computerScore) {
        document.querySelector('#game').textContent = "GAME OVER | Player Wins!";
       
    }
    else if (computerScore > playerScore) {
        document.querySelector('#game').textContent = "GAME OVER | Computer Wins!";
    }


    }


    
    
}


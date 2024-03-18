
// Global vars to keep player and computer scores
let computerScore = 0;
let playerScore = 0;
let gameOver = false;



function resetGame(){
    computerScore = 0;
    playerScore = 0;

    document.querySelector('#pc-score').textContent = computerScore;
    document.querySelector('#player-score').textContent = playerScore;
    document.querySelector("#vs").textContent = "";

    document.querySelector('#game').textContent = "New Game Started"

    document.querySelector("#pcimg").classList = "noimg";
    document.querySelector("#playerimg").classList = "noimg";
 
    document.querySelector('.playbuttons').style.visibility = 'visible';

    gameOver = false;

}


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

    let playerWins = false;
    let pcWins = false;

    // Remove old image (by changing the class) and set the new image for selected R/P/S for PC
    document.querySelector("#pcimg").classList = cSelection;

    // Remove old image (by changing the class) and set the new image for selected R/P/S for Player
    document.querySelector("#playerimg").classList = pSelection;

    // Display the VS
    document.querySelector("#vs").textContent = "VS";

    //console.log(pSelection + " vs " + cSelection);
    
    // Both picked the same - it's a draw
    if (pSelection === cSelection) {
        playerWins = true;
        pcWins = true;
    }

    else if (cSelection === "rock") {
        if (pSelection === "scissors") {
            pcWins = true;            
        }
        else if (pSelection === "paper") {
            playerWins = true;
        }
    }

    else if (cSelection === "paper")     {
        if (pSelection === "scissors") {
            playerWins = true;
        }
        else if (pSelection === "rock") {
            pcWins = true;
        }
    }

    else if (cSelection === "scissors") {
        if (pSelection === "paper") {
            pcWins = true;
        }
        else if (pSelection === "rock") {
            playerWins = true;
        }
    }


    // Calculate scores, indicate winning hand and print winning text
    if(playerWins && pcWins) {
        document.querySelector('#playerimg').classList.add("winner");
        document.querySelector('#pcimg').classList.add("winner");
        document.querySelector('#game').textContent = ("It's a draw");
        playerScore = playerScore + 1;
        computerScore = computerScore + 1;
    }
    else if(playerWins) {
        playerScore = playerScore + 1;
        document.querySelector('#playerimg').classList.add("winner");
        document.querySelector('#game').textContent = ("Player wins round");
    }
    else if(pcWins) {
        computerScore = computerScore + 1;
        document.querySelector('#pcimg').classList.add("winner");
        document.querySelector('#game').textContent = ("Computer wins round");
    }
    
    
    document.querySelector('#pc-score').textContent = computerScore;
    document.querySelector('#player-score').textContent = playerScore;

}



function playGame(playerChoice) {
        
    if (!gameOver) {
        let computerSelection = getComputerChoice();
        let playerSelection = playerChoice;
        playRound(playerSelection, computerSelection);
    
        // End game after player/pc scores 5
        if ((playerScore === 5) || (computerScore === 5)) {
            //document.querySelector('#game').textContent = "GAME OVER";

        // print final scores
        if (playerScore === computerScore) {
            document.querySelector('#game').textContent = "GAME OVER\r\nIt's a draw";
            }
            else if (playerScore > computerScore) {
                document.querySelector('#game').textContent = "GAME OVER\r\nPlayer Wins";
            
            }
            else if (computerScore > playerScore) {
                document.querySelector('#game').textContent = "GAME OVER\r\nComputer Wins";
            }

            // Mark that the game is over and don't let the RPS buttons work
            gameOver = true;
                        
            document.querySelector('.playbuttons').style.visibility = 'hidden';

        }
    }

    
    
}


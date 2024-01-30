
// Randomly return either Rock Paper or Scissors as the computers' choice for the game
function getComputerChoice(){
    const game_options = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    //console.log(game_options[randomNumber]);
    return(game_options[randomNumber]);
}


function playRound(playerSelection, computerSelection){
    console.log(playerSelection, computerSelection);
}



let computerSelection = getComputerChoice();
let playerSelection = prompt("Pick Rock, Paper or Scissors");


playRound(playerSelection, computerSelection);
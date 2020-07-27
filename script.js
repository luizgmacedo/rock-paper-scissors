const options = ['rock', 'paper', 'scissors'];


//Generate a random option for the computer;
function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
}


//Compare the choices to decide the winner;
function playRound(playerSelection, computerSelection) {
    let winner = false;

    if (playerSelection === options[0] && computerSelection === options[1]) {
        winner = false;
        return winner;
    } 
    else if (playerSelection === options[0] && computerSelection === options[2]) {
        winner = true;
        return winner;
    } 
    else if (playerSelection === options[1] && computerSelection === options[0]) {
        winner = true;
        return winner;
    } 
    else if (playerSelection === options[1] && computerSelection === options[2]) {
        winner = false;
        return winner;
    }
    else if (playerSelection === options[2] && computerSelection === options[0]) {
        winner = false;
        return winner;
    }
    else if (playerSelection === options[2] && computerSelection === options[1]) {
        winner = true;
        return winner;
    }
    else if (playerSelection === computerSelection){
        winner = 'tie';
        console.log('Tie! You both choose ' + computerSelection);
    }

}

//PLay the game 5 times.
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {

        let playerSelection = prompt('What\'s your choice?').toLowerCase();
        let computerSelection = computerPlay();

        let winner = playRound(playerSelection, computerSelection);
        
        if (winner) {
            console.log("You WIN! " + playerSelection + " beats " + computerSelection);
            playerScore++;
        }
        else if (winner === false) {
            console.log("You Lose! " + computerSelection + " beats " + playerSelection);
            computerScore++;
        }
    }
    if (playerScore > computerScore){
        console.log("Player wins! Player Score: " + playerScore + " Computer Score: " + computerScore);
    } 
    else if (playerScore < computerScore) {
        console.log("Computer wins! Computer Score: " + computerScore + " Player Score: " + playerScore);
    } 
    else if (playerScore === computerScore) {
        console.log("You tied with the computer!");
    }
}

game();
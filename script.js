const options = ['rock', 'paper', 'scissors'];

const container = document.querySelector('.container');

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');


const message = document.querySelector('.message');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const finalResult = document.querySelector('.final-result');
const restartBtn = document.querySelector('.restart');

let playerScore = 0;
let computerScore = 0;

//Generate a random option for the computer;
function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
}


//Compare the choices to decide the winner of the round;
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
        message.textContent = 'You both choose ' + computerSelection;
    }

}

//Play the game until the player or  the computer make 5 points
function game(playerSelection) {
    let computerSelection = computerPlay();
    let winner = playRound(playerSelection, computerSelection);
    
    if (winner) {
        message.textContent = playerSelection + ' beats ' + computerSelection + '. You win!';
        playerScore++;
    }
    else if (winner === false) {
        message.textContent = computerSelection + ' beats ' + playerSelection + '. You lose!';
        computerScore++;
    }

    player.textContent = 'Player Score: ' + playerScore;
    computer.textContent = 'Computer Score: ' + computerScore;

    final();
}

restartBtn.style.display = 'none';

//Decide the final winner
function final() {
    if (playerScore == 5 || computerScore == 5) {
        rockBtn.style.display = 'none';
        paperBtn.style.display = 'none';
        scissorsBtn.style.display = 'none';
        restartBtn.style.display = 'block';
    }

    if (playerScore == 5){
        finalResult.textContent = 'Player Wins!';
        finalResult.style.color = 'aqua';
    } 
    else if (computerScore == 5) {
        finalResult.textContent = 'Computer Wins!';
        finalResult.style.color = 'red';
    } 
}

//How the player choose an option
function buttons() {
    rockBtn.addEventListener('click', () => {
        game(options[0]);
    });
    
    paperBtn.addEventListener('click', () => {
        game(options[1]);
    });
    
    scissorsBtn.addEventListener('click', () => {
        game(options[2]);
    });

}

function restart() {
    playerScore = 0;
    computerScore = 0;
    player.textContent = '';
    computer.textContent = '';
    message.textContent = '';
    finalResult.textContent = '';
    restartBtn.style.display = 'none';
    
    rockBtn.style.display = 'block';
    paperBtn.style.display = 'block';
    scissorsBtn.style.display = 'block';
}

restartBtn.addEventListener('click', restart);

buttons();
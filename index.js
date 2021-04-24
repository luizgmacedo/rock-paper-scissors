const options = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('button');
const container = document.querySelector('.container')

const messageBox = document.createElement('div');
messageBox.classList.add('message-box');

const message = document.createElement('p');
message.classList.add('message');

messageBox.appendChild(message);
container.appendChild(messageBox);

const restartBtn = document.createElement('button');
restartBtn.textContent = 'Restart';
restartBtn.classList.add('restart-btn');

let playerScore = 0;
let computerScore = 0;
let round = 1;

function computerPlay() {
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        message.textContent = `Its a tie! You both choose ${computerSelection}`;
        message.style.color = '#3498db';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors'
        || playerSelection == 'paper' && computerSelection == 'rock'
        || playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        message.textContent = `You won! ${playerSelection} beats ${computerSelection}`;
        message.style.color = '#2ecc71';
    } else {
        computerScore++;
        message.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        message.style.color = '#e74c3c';
    }
}

function game(playerSelection, computerSelection) {
    playRound(playerSelection, computerSelection);
    if (round == 5) {
        disableButtons();
        checkWinner();
        messageBox.appendChild(restartBtn);
        restartBtn.addEventListener('click', restartGame);
    }
}

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
        button.style.opacity = '70%';
        button.style.cursor = 'default';
    });
}

function checkWinner() {
    if (playerScore == computerScore) {
        message.textContent = `It's a tie! You both made ${playerScore} points`;
        message.style.color = '#3498db';
    } else if (playerScore > computerScore) {
        message.textContent = `You win! Score: Player ${playerScore} x ${computerScore} Computer`;
        message.style.color = '#2ecc71';
    } else {
        message.textContent = `You lost! Score: Player ${playerScore} x ${computerScore} Computer`;
        message.style.color = '#e74c3c';
    }
}

function restartGame() {
    message.textContent = '';
    buttons.forEach(button => {
        button.disabled = false;
        button.style.opacity = '100%';
        button.style.cursor = 'pointer';
    });
    round = 1;
    playerScore = 0;
    computerScore = 0;
    messageBox.removeChild(restartBtn);
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let playerSelection = button.className;
        let computerSelection = computerPlay();
        game(playerSelection, computerSelection);
        round++;
    });
});
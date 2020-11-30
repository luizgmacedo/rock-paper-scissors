//Buttons
const container = document.querySelector('.container');
const buttons = document.querySelectorAll('button');

const restartBtn = document.createElement('input');
restartBtn.type = 'button';
restartBtn.value = 'Restart';
restartBtn.style.display = 'none';
restartBtn.id = 'restartBtn';
container.appendChild(restartBtn);

let computerScore = 0;
let playerScore = 0;
const result = document.createElement('p');
result.id = 'result';

const options = ['rock', 'paper', 'scissors'];

//Function to generate a random option to the computer
function computerPlay() {
  const random = Math.floor(Math.random() * options.length);
  return options[random];
}

//Function to disable the buttons
function disableButtons() {
  buttons.forEach((button) => {
    button.disabled = true;
  });
  restartBtn.style.display = 'block';
  restartBtn.addEventListener('click', restartGame);

}

//Function to restart the game
function restartGame() {
  result.textContent = '';
  buttons.forEach((button) => {
    button.disabled = false;
  });

  restartBtn.style.display = 'none';
  result.style.opacity = '0';


  computerScore = 0;
  playerScore = 0;
}

//Play one round
function playRound(playerSelection) {

  let computerSelection = computerPlay();
  if (playerSelection == computerSelection) {
    result.textContent = "It's a tie! You both choose " + computerSelection;
    result.style.color = '#f9ca24';
    result.style.opacity = '1';
  } else if (playerSelection == 'rock' && computerSelection == 'paper' 
            || playerSelection == 'paper' && computerSelection == 'scissors' 
            || playerSelection == 'scissors' && computerSelection == 'rock') {
      result.textContent = 'You lose! ' + computerSelection + ' beats ' + playerSelection;
      result.style.color = '#eb4d4b';
      result.style.opacity = '1';

      if (computerScore == 5) {
        result.textContent = 'Game Over! Computer won!';
        disableButtons();
      }

      computerScore++;
  } else {
    result.textContent = 'You win! ' + playerSelection + ' beats ' + computerSelection;
    result.style.color = '#6ab04c';
    result.style.opacity = '1';

      if (playerScore == 5) {
        result.textContent = 'You won!';
        disableButtons();
      }

      playerScore++;
  }
  container.appendChild(result);
}

//Function to play the game
function playGame() {
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      playRound(button.id);
    })
  })
}
//Initialize the game
playGame();
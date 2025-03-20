function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

let computerScore = 0;
let humanScore = 0;

const buttons = document.querySelectorAll('button');
const choices = document.querySelector('#selections')
const results = document.querySelector('#results');

buttons.forEach(button => button.addEventListener('click', function(e){
    playRound(e.target.id, getComputerChoice());
    determineWinner();
}));

function playRound(humanChoice,computerChoice) {
    if (humanChoice == 'rock' && computerChoice == 'scissors' || humanChoice == 'paper' && computerChoice == 'rock' || humanChoice == 'scissors' && computerChoice == 'paper') {
        ++humanScore;
    }else if (humanChoice == 'rock' && computerChoice == 'paper' || humanChoice == 'paper' && computerChoice == 'scissors' || humanChoice == 'scissors' && computerChoice == 'rock'){
        ++computerScore
    }
    
    choices.textContent = (`Player chose: ${humanChoice} / Computer chose: ${computerChoice}`);
    results.textContent = (`Player Score: ${humanScore} / Computer Score: ${computerScore}`);
}

function determineWinner() {
    if (humanScore == 5) {
        results.textContent = ('Game Over. Player Wins!!')
    }else if (computerScore == 5) {
        results.textContent = ('Game Over. Computer Wins!!')
    }

    if (humanScore == 5 || computerScore == 5) {
        humanScore = 0;
        computerScore = 0;
    }
}
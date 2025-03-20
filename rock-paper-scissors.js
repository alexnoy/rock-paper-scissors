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

function playGame() {
    if (humanScore > computerScore) {
        console.log("Total player score:", humanScore, "total Computer score:", computerScore);
        return "Player Wins!!"
    }else if (humanScore < computerScore) {
        console.log("Total player score:", humanScore, "total Computer score:", computerScore);
        return "Computer Wins!!"
    }else {
        console.log("Total player score:", humanScore, "total Computer score:", computerScore);
        return "Tie Game!"
    }
}
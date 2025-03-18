function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

let computerScore = 0;
let humanScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function(e){
    playRound(e.target.id, getComputerChoice());
}));

function playRound(humanChoice,computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors") {
        ++humanScore;
        console.log("Player score:", humanScore, "Computer score:", computerScore);
        return "Player wins. rock beats scissors";
    }else if (humanChoice == "rock" && computerChoice == "paper") {
        ++computerScore;
        console.log("Player score:", humanScore, "Computer score:", computerScore);
        return "Computer wins. paper beats rock";
    }else if (humanChoice == "paper" && computerChoice == "rock") {
        ++humanScore;
        console.log("Player score:", humanScore, "Computer score:", computerScore);
        return "Player wins. paper beats rock";
    }else if (humanChoice == "paper" && computerChoice == "scissors") {
        ++computerScore;
        console.log("Player score:", humanScore, "Computer score:", computerScore);
        return "Computer wins. scissors beats paper";
    }else if (humanChoice == "scissors" && computerChoice == "paper") {
        ++humanScore;
        console.log("Player score:", humanScore, "Computer score:", computerScore);
        return "Player wins. scissors beats paper";
    }else if (humanChoice == "scissors" && computerChoice == "rock") {
        ++computerScore;
        console.log("Player score:", humanScore, "Computer score:", computerScore);
        return "Computer wins. rock beats scissors";
    }else {
        console.log("Player score:", humanScore, "Computer score:", computerScore);
        return "Tie. choices were the same.";
    }
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
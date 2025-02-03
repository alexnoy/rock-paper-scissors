let computerScore = 0;
let humanScore = 0;
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);

    if (num == 0) {
        return "rock";
    }else if (num == 1) {
        return "paper";
    }else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Select one: rock, paper, scissors");

    if (choice.toLowerCase() != "rock" && choice.toLowerCase() != "paper" && choice.toLowerCase() != "scissors") {
        return "Selection incorrect refresh to select again.";
    }else {
        return choice.toLowerCase();
    }
}
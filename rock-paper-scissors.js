function playGame() {
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
}
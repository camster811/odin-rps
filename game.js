let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let choice = "Default";
    let randomNum = Math.random();

    switch (true) {
        case (randomNum < .33):
            choice = "rock";
            break;
        case (randomNum < 0.66 && randomNum > 0.33):
            choice = "paper";
            break;
        case (0.66 < randomNum):
            choice = "scissors";
            break;
        default:
            break;
    }
    return choice;
}

function getHumanChoice() {
    let playerChoice = prompt("Please select Rock, Paper, or Scissors: ");

    if (playerChoice.toLowerCase() == "rock") {
        return playerChoice;
    }
    if (playerChoice.toLowerCase() == "paper") {
        return playerChoice;
    }
    if (playerChoice.toLowerCase() == "scissors") {
        return playerChoice;
    }
    else {
        console.log("Please select a valid option");
        playerChoice = prompt("Please select Rock, Paper, or Scissors: ");
        getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    switch (humanChoice.toLowerCase()) {
        case "rock":
            if (computerChoice.toLowerCase() == "paper") {
                console.log("You lose! Paper beats rock.")
                ++computerScore;
            } else if (computerChoice.toLowerCase() == "scissors") {
                console.log("You win! Rock beats scissors.")
                ++humanScore;
            } else {
                console.log("It's a tie!")
            }
            break;
        case "paper":
            if (computerChoice.toLowerCase() == "rock") {
                console.log("You win! Paper beats rock.")
                ++humanScore;
            } else if (computerChoice.toLowerCase() == "scissors") {
                console.log("You lose! Scissors beats paper.")
                ++computerScore;
            } else {
                console.log("It's a tie!")
            }
            break;
        case "scissors":
            if (computerChoice.toLowerCase() == "rock") {
                console.log("You lose! Rock beats scissors.")
                ++computerScore;
            } else if (computerChoice.toLowerCase() == "paper") {
                console.log("You win! Scissors beats paper.")
                ++humanScore;
            } else {
                console.log("It's a tie!")
            }
            break;
        default:
            break;
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice)
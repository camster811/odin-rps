let humanScore = 0;
let computerScore = 0;
const score = document.querySelector("#score")
const h1 = document.querySelector("#winner")
const update = document.querySelector("#update")
score.textContent = `Score: ${humanScore}-${computerScore}`


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

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            if (computerChoice == "paper") {
                update.textContent = "Lost round: paper beats rock"
                ++computerScore;
                score.textContent = `Score: ${humanScore}-${computerScore}`
            } else if (computerChoice == "scissors") {
                update.textContent = "Won round: rock beats scissors"
                ++humanScore;
                score.textContent = `Score: ${humanScore}-${computerScore}`
            } else {
                update.textContent = "It's a tie!"
            }
            break;
        case "paper":
            if (computerChoice == "rock") {
                update.textContent = "Won round: paper beats rock"
                ++humanScore;
                score.textContent = `Score: ${humanScore}-${computerScore}`
            } else if (computerChoice == "scissors") {
                update.textContent = "Lost round: scissors beats paper"
                ++computerScore;
                score.textContent = `Score: ${humanScore}-${computerScore}`
            } else {
                update.textContent = "It's a tie!"
            }
            break;
        case "scissors":
            if (computerChoice == "rock") {
                update.textContent = "Lost round: rock beats scissors"
                ++computerScore;
                score.textContent = `Score: ${humanScore}-${computerScore}`
            } else if (computerChoice == "paper") {
                update.textContent = "Won round: scissors beats paper"
                ++humanScore;
                score.textContent = `Score: ${humanScore}-${computerScore}`
            } else {
                update.textContent = "It's a tie!"
            }
            break;
        default:
            break;
    }
    if (humanScore === 5) {
        h1.textContent = `You win!`;
        update.textContent = '';
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        h1.textContent = `You lose!`;
        update.textContent = '';
        humanScore = 0;
        computerScore = 0;
    }
}


const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    h1.textContent = '';
    playerChoice = "rock";
    computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    h1.textContent = '';
    playerChoice = "paper";
    computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    h1.textContent = '';
    playerChoice = "scissors";
    computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
});


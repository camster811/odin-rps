function getComputerChoice() {
    let choice = "Default";

    let randomNum = Math.random();
    console.log(randomNum);

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

console.log(getComputerChoice());



function getHumanChoice(playerChoice) {
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
        console.log(getHumanChoice(playerChoice));
    }
}

let playerChoice = prompt("Please select Rock, Paper, or Scissors: ");
console.log(getHumanChoice(playerChoice));


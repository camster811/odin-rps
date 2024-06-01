function getComputerChoice() {
    let choice = "yo";

    let randomNum = Math.random();
    console.log(randomNum);

    switch (true) {
        case (randomNum < .33):
            choice = "Rock";
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

console.log(getComputerChoice())
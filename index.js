function getComputerChoice() {
    let array = ["rock", "paper", "scissors"];

    return array[Math.floor(Math.random() * 3)]
}


function play(userChoice) {
    let computerChoice = getComputerChoice();
    let result;

    switch (userChoice) {
        case computerChoice:
            result = "Draw"
            break;
        case "rock":
            if (computerChoice === "paper") {
                result = "You Lose."
            }
            else {
                result = "You Win!"
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                result = "You Lose."
            } else {
                result = "You Win!"
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                result = "You Lose."
            } else {
                result = "You Win!"
            }
            break;
        default:
            result = "Please choose a valid option."
            break;
    }

    return result;

}
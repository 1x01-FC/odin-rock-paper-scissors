const validChoices = ["rock", "paper", "scissors"];


function getComputerChoice() {
    return validChoices[Math.floor(Math.random() * 3)]
}


function playOneRound(playerInput) {
    let playerChoice = playerInput.toLowerCase();
    let computerChoice = getComputerChoice();
    let result;

    switch (playerChoice) {
        case computerChoice:
            result = `Draw! Both players selected ${computerChoice}.`
            break;
        case "rock":
            if (computerChoice === "paper") {
                result = "You Lose! Paper beats rock."
            }
            else {
                result = "You Win! Rock beats scissors."
            }
            break;
        case "paper":
            if (computerChoice === "scissors") {
                result = "You Lose! Scissors beats paper. "
            } else {
                result = "You Win! Paper beats rock."
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                result = "You Lose! Rock beats scissors"
            } else {
                result = "You Win! Scissors beats paper"
            }
            break;
        default:
            result = "Please choose a valid option."
            break;
    }

    return result;

}

function game() {
    let scoreLog = [];

    for (let round = 0; round < 5; round++) {
        let playerChoice;

        do {
            playerChoice = prompt("Rock, paper or scissors?").toLowerCase();
            if (!validChoices.includes(playerChoice)) {
                alert("Invalid choice! Please choose from 'rock', 'paper', or 'scissors'.");
            }
        } while (!validChoices.includes(playerChoice));

        let result = playOneRound(playerChoice);
        console.log(result);
        scoreLog.push(result);
    }

    let winCount = scoreLog.filter((log) => log.includes("Win")).length;
    let lossCount = scoreLog.filter((log) => log.includes("Lose")).length;
    let drawCount = 5 - (winCount + lossCount);

    if (winCount > lossCount) {
        return `You won ${winCount} - ${lossCount} with ${drawCount} draws.`
    } else if (winCount < lossCount) {
        return `You lost ${winCount} - ${lossCount} with ${drawCount} draws.`
    } else {
        return `You tied at ${winCount} - ${lossCount} with ${drawCount} draws.`
    }
}
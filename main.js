let humanScore = 0;
let computerScore = 0;
const maxScore = 5;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let computerChoice = "paper";

    switch (getRandomInt(3)) {
        case 0:
            computerChoice = "rock";
            return computerChoice;
        case 1:
            computerChoice = "paper";
            return computerChoice;
        case 2:
            computerChoice = "scissors";
            return computerChoice;
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or SCISSORS???");

    humanChoice = humanChoice.toLowerCase();

    switch (humanChoice) {
        case "rock":
            return humanChoice;
        case "paper":
            return humanChoice;
        case "scissors":
            return humanChoice;
    }
}

function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()) {

    let roundMsg = `You chose: ${humanChoice}\nComputer chose: ${computerChoice}\n\n`;

    switch (`${humanChoice}-${computerChoice}`) {
        case "rock-rock":
        case "paper-paper":
        case "scissors-scissors":
            roundMsg += "It's a tie!";
            break;

        case "rock-paper":
        case "paper-scissors":
        case "scissors-rock":
            computerScore++;
            roundMsg += "You Lose this round!";
            break;

        case "rock-scissors":
        case "scissors-paper":
        case "paper-rock":
            humanScore++;
            roundMsg += "You Win this round!";
            break;
    }

    roundMsg += `\n\nCurrent score:\n- You: ${humanScore}\n- Computer: ${computerScore}`;

    const resultsDiv = document.getElementById("results");
    resultsDiv.textContent = roundMsg;

    console.log(roundMsg);

    // Check if someone reached maxScore
    if (humanScore >= maxScore || computerScore >= maxScore) {
        const winner = humanScore >= maxScore ? "You won the game! " : "Computer won the game! ";
        resultsDiv.textContent += `\n\n${winner}`;

        // Reset scores for a new game
        humanScore = 0;
        computerScore = 0;
    }

}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
});






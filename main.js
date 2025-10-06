let humanScore = 0;
let computerScore = 0;

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

    let gameMsg = "You chose: " + humanChoice + "\n" + "Computer chose: " + computerChoice + " "
        + "\n" + "\n" + "Current score:" + "\n" + "- Computer: " + computerScore + "\n" + "- You:" + " "+ humanScore + "\n" + "\n"

    switch (`${humanChoice}-${computerChoice}`) {

        case "rock-rock":
        case "paper-paper":
        case "scissors-scissors":
            gameMsg += "It's a tie!";
            console.log(gameMsg);
            break;

        case "rock-paper":
        case "paper-scissors":
        case "scissors-rock":
            computerScore++;
            gameMsg += "You Lose!";
            console.log(gameMsg);
            break;

        case "rock-scissors":
        case "scissors-paper":
        case "paper-rock":
            humanScore++;
            gameMsg += "You Win!";
            console.log(gameMsg);
            break;
    }
}

playRound();


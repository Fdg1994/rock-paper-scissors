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

    switch (humanChoice) {
        case "rock":
            return humanChoice;
        case "paper":
            return humanChoice;
        case "scissors":
            return humanChoice;
    }
}


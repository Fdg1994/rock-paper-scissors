function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let computerChoice = "Paper";

    switch (getRandomInt(3)) {
        case 0:
            computerChoice = "Rock";
            return computerChoice;
        case 1:
            computerChoice = "Paper";
            return computerChoice;
        case 2:
            computerChoice = "Scissors";
            return computerChoice;

    }
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
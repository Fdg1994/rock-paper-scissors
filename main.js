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

function playRound(humanChoice, computerChoice) {

    let gameMsg = "test";
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        gameMsg = "You chose: " + " " + humanChoice + " " + "Computer chose: " + " " + computerChoice + " " + "Tie!"
            + " " + "Current score:" + " " + "Computer: " + " " + computerScore + " " + "You:" +  " " + humanScore
        console.log(gameMsg);


    }

    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        gameMsg = "You chose: " + " " + humanChoice + " " + "Computer chose: " + " " + computerChoice + " " + "You lose!"
            + " " + "Current score:" + " " + "Computer: " + " " + computerScore + " " + "You:" +  " " + humanScore
        console.log(gameMsg);

    }


    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        gameMsg = "You chose: " + " " + humanChoice + " " + "Computer chose: " + " " + computerChoice + " " + "You win!"
            + " " + "Current score:" + " " + "Computer: " + " " + computerScore + " " + "You:" +  " " + humanScore
        console.log(gameMsg);

    }


    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        gameMsg = "You chose: " + " " + humanChoice + " " + "Computer chose: " + " " + computerChoice + " " + "You win!"
            + " " + "Current score:" + " " + "Computer: " + " " + computerScore + " " + "You:" +  " " + humanScore
        console.log(gameMsg);

    }

    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
      gameMsg = "You chose: " + " " + humanChoice + " " + "Computer chose: " + " " + computerChoice + " " + "You lose!"
            + " " + "Current score:" + " " + "Computer: " + " " + computerScore + " " + "You:" +  " " + humanScore
        console.log(gameMsg);

    }

    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        gameMsg = "You chose: " + " " + humanChoice + " " + "Computer chose: " + " " + computerChoice + " " + "You win!"
            + " " + "Current score:" + " " + "Computer: " + " " + computerScore + " " + "You:" +  " " + humanScore
        console.log(gameMsg);

    }


    else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
      gameMsg = "You chose: " + " " + humanChoice + " " + "Computer chose: " + " " + computerChoice + " " + "You lose!"
            + " " + "Current score:" + " " + "Computer: " + " " + computerScore + " " + "You:" +  " " + humanScore
        console.log(gameMsg);
    }
}

playRound();


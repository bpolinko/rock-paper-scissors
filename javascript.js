// Create variable userChoice to store user selection and cpuChoice to store cpu selection
let userChoice; 
let cpuChoice;
// Create variable userScore to store user score and cpuScore to store cpu score
let cpuScore = 0;
let userScore = 0;
// Get name of user and store it in variable userName
const userName = prompt("What is your name");
if (userName != " " && userName != null) {
    document.getElementById("userName").innerHTML = userName + ":";
}

// Get CPUs choice randomly and store it in cpuChoice
function getCpuChoice() {
    let cpuRandom = Math.random();
    if (cpuRandom < 0.33334) {
        cpuChoice = "Rock";
    }
    else if ( cpuRandom > .66667) {
        cpuChoice = "Scissors";
    }
    else {
        cpuChoice = "Paper";
    }
}

// Decide the winner by comparing userChoice to cpuChoice, and display the result
function decideWinner() {
    if (userChoice == cpuChoice) {
        document.getElementById("result").innerHTML = "Tie!";
    }
    else if (userChoice == "Rock" && cpuChoice == "Paper") {
        document.getElementById("result").innerHTML = "You Lose that round!";
        cpuScore++; 
    }
    else if (userChoice == "Rock" && cpuChoice == "Scissors") {
        document.getElementById("result").innerHTML = "You Win that round!";
        userScore++;
    }
    else if (userChoice == "Paper" && cpuChoice == "Scissors") {
        document.getElementById("result").innerHTML = "You Lose that round!";
        cpuScore++;
    }
    else if (userChoice == "Paper" && cpuChoice == "Rock") {
        document.getElementById("result").innerHTML = "You Win that round!";
        userScore++;
    }
    else if (userChoice == "Scissors" && cpuChoice == "Rock") {
        document.getElementById("result").innerHTML = "You Lose that round!";
        cpuScore++;
    }
    else if (userChoice == "Scissors" && cpuChoice == "Paper") {
        document.getElementById("result").innerHTML = "You Win that round!";
        userScore++;
    }
}

function updateScore() {
    document.getElementById("userScore").innerHTML = userScore;
    document.getElementById("cpuScore").innerHTML = cpuScore;
}

function reset() {
if (userScore == 5) {
    document.getElementById("result").innerHTML = "You win the match! Play again?";
    userScore = 0;
    cpuScore = 0;
} 
else if (cpuScore == 5){
    document.getElementById("result").innerHTML = "You lose the match! Play again?";
    userScore = 0;
    cpuScore = 0;
}
}

// Take input from User and store it in userChoice, run functions getCpuChoice and decideWinner
function clickRock() {
    userChoice = "Rock";
    getCpuChoice();
    decideWinner();
    console.log(userChoice, cpuChoice);
    updateScore();
    reset();
}

function clickPaper() {
    userChoice = "Paper";
    getCpuChoice();
    decideWinner();
    console.log(userChoice, cpuChoice);
    updateScore();
    reset();
}

function clickScissors() {
    userChoice = "Scissors";
    getCpuChoice();
    decideWinner();
    console.log(userChoice, cpuChoice);
    updateScore();
    reset();
}



// figure out how to suppress initial function output

function getComputerChoice() {

    let a = 'Rock';
    let b = 'Paper';
    let c = 'Scissors';
    let d = Math.random()

    if (d <= .33) {
        return a;
    }
    else if (d > .33 & d <= .66) {
        return b;
    }
    else {
        return c;
    }
}

let playerSelection = prompt('Rock, paper, scissors, shoot!');
let computerSelection = getComputerChoice();


function rockPaperScissor(playerSelection, computerSelection) {

    let playerInput = playerSelection.toLowerCase();

    if (playerInput === "rock" & computerSelection === "Rock") {
        return ("It's a tie!");
    }

    else if (playerInput === "rock" & computerSelection === "Scissors") {
        return ("You win! Rock beats Scissors!");
    }

    else if (playerInput === "rock" & computerSelection === "Paper") {
        return ("You lose! Paper Beats Rock!");
    }

    else if (playerInput === "paper" & computerSelection === "Rock") {
        return ("You Win! Paper beats Rock!");
    }

    else if (playerInput === "paper" & computerSelection === "Scissors") {
        return ("You lose! Scissors beats Paper!");
    }

    else if (playerInput === "paper" & computerSelection === "Paper}") {
        return ("It's a tie!");
    }

    else if (playerInput === "scissors" & computerSelection === "Rock") {
        return ("You lose! Rock beats scissors!");
    }

    else if (playerInput === "scissors" & computerSelection === "Paper") {
        return ("You win! Scissors beats paper!");
    }
    
    else {
        return ("It's a tie!");
    }
}

console.log(getComputerChoice());
console.log(rockPaperScissor(playerSelection, computerSelection));

//pseudocode

//ask for player input
//compare to computer's random output
/* 
rock loses to paper
rock beats scissors
rock ties rock
paper loses to scissors
paper beats rock
paper ties paper
scissors loses to rock
scissors beats paper
scissors ties scissors
*/
//determine winner
//output win/lose message


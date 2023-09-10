//NEED TO CLEAN UP/MAKE MORE CONCISE (use arrays for choices)(consolidate outcomes ${})

let playerWin = 0;
let cpuWin = 0;

function playGame(){

function getComputerChoice() {

    const a = 'rock';
    const b = 'paper';
    const c = 'scissors';
    const d = Math.random()

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

function rockPaperScissor(playerSelection, computerSelection) {

    let playerInput = playerSelection;

    if (playerInput == computerSelection) {
        return ("It's a tie!");
    }

    else if (playerInput === "rock" & computerSelection === "scissors") {
        playerWin++;
        return ("You win! Rock beats Scissors!");
    }

    else if (playerInput === "paper" & computerSelection === "rock") {
        playerWin++;
        return ("You Win! Paper beats Rock!");
    }

    else if (playerInput === "scissors" & computerSelection === "paper") {
        playerWin++;
        return ("You win! Scissors beats paper!");
    }

    else if (playerInput === "rock" & computerSelection === "paper") {
        cpuWin++;
        return ("You lose! Paper Beats Rock!");
    }

    else if (playerInput === "paper" & computerSelection === "scissors") {
        cpuWin++;
        return ("You lose! Scissors beats Paper!");
    }

    else if (playerInput === "scissors" & computerSelection === "rock") {
        cpuWin++;
        return ("You lose! Rock beats scissors!");
    }

    else {
        return ("No cheating! Try again!")

    }
}

getComputerChoice();

let playerSelection = prompt('Rock, paper, scissors, shoot!');
let computerSelection = getComputerChoice();

console.log(rockPaperScissor(playerSelection, computerSelection));

}

for (let i = 0; i < 5; i++) {
    playGame();
}


if (playerWin > cpuWin) {
     console.log("Player Wins!");
}

else if(playerWin < cpuWin) {
    console.log("CPU Wins!");
}

else {
    console.log("Tie round!!");
}

console.log('Player Wins: ' + playerWin);
console.log('CPU Wins: ' + cpuWin);





/*pseudocode
run function 5 time without refresh!!!
keep running count of outcome for player a and player b!!!

compare win count after 5 games and declare winner
//once function is done running 5 times, compare playerWin vs cpuWin and decalre winner

*/
//NEED TO CLEAN UP/MAKE MORE CONCISE (use arrays for choices)(consolidate outcomes ${})

const rock = document.createElement('button');
const pape = document.createElement('button');
const scis = document.createElement('button');
const results = document.createElement('div');
const score = document.createElement('div');
const reset = document.createElement('button');

rock.textContent = "rock";
pape.textContent = "paper";
scis.textContent = "scissor";
results.textContent = 'results';
score.textContent = 'score';
reset.textContent = 'RESET'

results.className = 'results'
score.className = 'score'

const div = document.querySelector('.choices');

div.appendChild(rock);
div.appendChild(pape);
div.appendChild(scis);
div.appendChild(results);
div.appendChild(score);
div.appendChild(reset);

const buttons = document.querySelectorAll('button');
const buttonItems = Array.from(buttons);

function assignChoice() {
    playerInput = this.innerText;
    results.textContent = playerInput
    rockPaperScissor(playerInput, computerSelection);
}
buttonItems.forEach(function clickResult (e) {
    e.addEventListener('click', assignChoice);
});

reset.addEventListener('click', () => {
    playerWin = 0;
    cpuWin = 0;
});

function getComputerChoice() {

    const a = 'rock';
    const b = 'paper';
    const c = 'scissor';
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

let computerSelection = '';
let playerWin = 0;
let cpuWin = 0;
let roundsPlayed = 0;

function rockPaperScissor(playerInput, computerSelection) {

    roundsPlayed++;
    getComputerChoice();

    computerSelection = getComputerChoice();

    if (playerInput == computerSelection) {
        results.textContent = "It's a tie!";
    }

    else if (playerInput === "rock" & computerSelection === "scissor") {
        playerWin++;
        results.textContent = "You win! Rock beats Scissors!";
    }

    else if (playerInput === "paper" & computerSelection === "rock") {
        playerWin++;
        results.textContent = "You Win! Paper beats Rock!";
    }

    else if (playerInput === "scissor" & computerSelection === "paper") {
        playerWin++;
        results.textContent = "You win! Scissors beats paper!";
    }

    else if (playerInput === "rock" & computerSelection === "paper") {
        cpuWin++;
        results.textContent =  "You lose! Paper Beats Rock!";
    }

    else if (playerInput === "paper" & computerSelection === "scissor") {
        cpuWin++;
        results.textContent =  "You lose! Scissors beats Paper!";
    }

    else if (playerInput === "scissor" & computerSelection === "rock") {
        cpuWin++;
        results.textContent =  "You lose! Rock beats scissors!";
    }

    else {
        results.textContent =  "No cheating! Try again!";

    }
    
    score.textContent = `Player ${playerWin} : ${cpuWin} CPU`;
    
    if (playerWin === 5) {
        alert("Player Wins!");
        playerWin = 0;
        cpuWin = 0;
   }
   
   else if(cpuWin === 5) {
       alert("CPU Wins!");
       playerWin = 0;
       cpuWin = 0;
   }
}
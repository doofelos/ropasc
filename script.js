function getComputerchoice() {

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

console.log(getComputerchoice())
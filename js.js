let scoreKeeper = 0;

window.alert("Welcome to Rock, Paper, Scissor. Open your dev tools console and re-load the website to see the game results.");

function randomChoice(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


function computerPlay() {
    let chooser = randomChoice(1, 4);

    if (chooser === 3) {
        let pcChoice = "PAPER";
        console.log("Computer chose "+ pcChoice +"!");
        return pcChoice;
    }

    else if (chooser === 2) {
        let pcChoice = "ROCK";
        console.log("Computer chose "+ pcChoice +"!");
        return pcChoice;  
    }

    else {
        
        let pcChoice = "SCISSOR";
        console.log("Computer chose "+ pcChoice +"!");
        return pcChoice;
    }

    
}

function playerPlay() {
    let playerChoice = window.prompt("Please choose Rock, Paper or Scissor!: ");
    console.log("Player chose "+ playerChoice.toUpperCase() +"!");
    return playerChoice;
}



function singleRound(player, computer) {

    let point = undefined;

    if (player.toUpperCase() == computer) {
        console.log("This round was a draw!");
        point = 0.5;
        return point;
    }

    else {
        if (player.toUpperCase() == "ROCK" && computer == "PAPER"){
            console.log("This round the human lost!");
            point = 0;
            return point;
        }

        else if (player.toUpperCase() == "PAPER" && computer == "SCISSOR"){
            console.log("This round the human lost!");
            point = 0;
            return point;
        }

        else if (player.toUpperCase() == "SCISSOR" && computer == "ROCK"){
            console.log("This round the human lost!");
            point = 0;
            return point;
        }


        else {
            console.log("This round the human won!");
            point = 1;
            return point;
        }

    }
    
}








for(let i = 0; i <= 4; i++){

    let scorePl = playerPlay();

    let scorePc = computerPlay();

    let roundResult = singleRound(scorePl, scorePc);

    console.log(roundResult);

    scoreKeeper = scoreKeeper + roundResult;   
}




function didIWin(results){
    let scoreCheck = 0;
    scoreCheck = results;
    if (results > 2.5){
        console.log("You win the match! Final score is: " + scoreCheck+ "/5. Congratulations!");
    }

    else if (results == 2.5){
        console.log("You tie the match! Final score is: " + scoreCheck+ "/5. Formidable opponent!");
    }

    else {
        console.log("You lose! Final score is: " + scoreCheck+ "/5. Dirty, sad, ugly loser!");
    }
}

didIWin(scoreKeeper);
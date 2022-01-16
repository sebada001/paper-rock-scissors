
var pointPlayer = 0;
var pointPc = 0;

window.alert("Welcome to Rock, Paper, Scissors. Open your dev tools console and re-load the website to see the game results.");

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

    if (player.toUpperCase() == computer) {
        console.log("This round was a draw!");
        pointPlayer += 0.5;
        pointPc += 0.5;
        
    }

    else {
        if (player.toUpperCase() == "ROCK" && computer == "PAPER"){
            console.log("This round the human lost!");
            pointPc += 1;
        }
        else if (player.toUpperCase() == "PAPER" && computer == "SCISSOR"){
            console.log("This round the human lost!");
            pointPc += 1;
        }
        else if (player.toUpperCase() == "SCISSOR" && computer == "ROCK"){
            console.log("This round the human lost!");
            pointPc += 1;
        }
        else {
            console.log("This round the human won!");
            pointPlayer += 1;

        }
    }   
}








for(let i = 0; i <= 4; i++){

    let scorePl = playerPlay();

    let scorePc = computerPlay();

    singleRound(scorePl, scorePc);

    console.log(pointPlayer + " is the player's score" );
    
    if (pointPlayer >= 3) break;
}


function didIWin(){

    if (pointPlayer > pointPc){
        console.log("You win the match! Final score is: " + pointPlayer+ "/5. Congratulations!");
        return true;
    }

    else if (pointPlayer == pointPc){
        console.log("You tie the match! Final score is: " + pointPlayer+ "/5. Formidable opponent!");
        return true;
    }

    else {
        console.log("You lose! Final score is: " + pointPlayer+ "/5. Dirty, sad, ugly loser!");
        return false;
    }
}

didIWin();


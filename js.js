
var pointPlayer = 0;
var pointPc = 0;
var playerPick = null;
var pcPick = null;

var audio = document.querySelectorAll(".audio")

var audioArray = Array.from(audio);

audioArray.forEach(ele =>{
    ele.volume = 0.4;
})

const pickPlayer = document.querySelector(".pick-player");
const pickPc = document.querySelector(".pick-pc");

const gon = document.querySelector(".gon");
const player = document.querySelector(".player");


const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const candleOne = document.querySelector(".one");
const candleTwo = document.querySelector(".two");
const candleThree = document.querySelector(".three");
const candleFour = document.querySelector(".four");
const candleFive = document.querySelector(".five");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
rock.addEventListener("click", () => {
    pcPick = computerPlay();
    playerPick = "ROCK";
    pickPlayer.innerHTML = "ROCK!";
    singleRound();  
    setTimeout(checkDifference, 250, pointPlayer, pointPc); 
    sleep(500);
    
})

paper.addEventListener("click", () => {
    pcPick = computerPlay();
    playerPick = "PAPER";
    pickPlayer.innerHTML = "PAPER!";
    singleRound();
    setTimeout(checkDifference, 250, pointPlayer, pointPc); 
})

scissors.addEventListener("click", () => {
    pcPick = computerPlay();
    playerPick = "SCISSOR";
    pickPlayer.innerHTML = "SCISSORS!";
    singleRound();  
    setTimeout(checkDifference, 250, pointPlayer, pointPc);  
})

function checkDifference(playa, peezee){
    console.log(playa-peezee);
    if (playa == peezee){
        gon.src= "/img/gon_neutral.jpg";
        player.src= "/img/player_play.jpg";
        
    }
    else if ((playa - peezee) === 1){
        gon.src= "/img/gon_lost.jpg";
        player.src= "/img/player_winning.jpg";
    }
    else if ((playa - peezee) == 2){
        gon.src= "/img/gon_lost_2.jpg";
        player.src= "/img/player_win.jpg";
    }

    else if ((peezee - playa) == 1){
        gon.src= "/img/gon_happy.png";
        player.src= "/img/player_worry.jpg";
    }

    else if ((peezee - playa) == 2){
        gon.src= "/img/gon_happy_1.png"
        player.src= "/img/player_lose.jpg";
    }


}

//rgb(236, 96, 14)

function checkScorePl(pl){
    if (pl == 1){
        document.documentElement.style.setProperty('--color-candle', 'rgb(236, 96, 14)');
        candleOne.style.webkitAnimationPlayState = "running";


    }
    else if (pl == 2){
        document.documentElement.style.setProperty('--color-candle', 'rgb(236, 96, 14)');
        candleTwo.style.webkitAnimationPlayState = "running";

    }

    else if (pl == 3){
        document.documentElement.style.setProperty('--color-candle', 'rgb(236, 96, 14)');
        candleThree.style.webkitAnimationPlayState = "running";
        //ends
        
        rock.style.display = "none";
        paper.style.display = "none";
        scissors.style.display = "none";
        setTimeout(youWin, 600);
        setTimeout(endGame, 3000);
    }

    else{
        return;
    }

}

function youLose(){
    pickPlayer.innerHTML = "YOU LOSE";
    pickPc.innerHTML = "YOU LOSE";
    pickPlayer.style.display = "none";
    pickPc.style.marginLeft = "-65px";
    pickPc.style.marginTop = "135px";
}

function youWin(){
    pickPlayer.innerHTML = "YOU WIN";
    pickPc.innerHTML = "YOU WIN";
    pickPc.style.display = "none";
    pickPlayer.style.marginLeft = "10px";
    pickPlayer.style.marginTop = "135px";
}

function endGame(){
    window.location.href = "/doom.html";
}

function lostGame(){
    window.location.href = "/lose.html";
}

function checkScorePc(pc){
    if (pc == 1){
        document.documentElement.style.setProperty('--color-candle', 'greenyellow');
        candleFive.style.webkitAnimationPlayState = "running";
    }
    else if (pc == 2){
        document.documentElement.style.setProperty('--color-candle', 'greenyellow');
        candleFour.style.webkitAnimationPlayState = "running";
    }

    else if (pc == 3){
        document.documentElement.style.setProperty('--color-candle', 'greenyellow');
        candleThree.style.webkitAnimationPlayState = "running";
        //ends
        
        rock.style.display = "none";
        paper.style.display = "none";
        scissors.style.display = "none";
        setTimeout(youLose, 600);
        setTimeout(lostGame, 3000);
    }

    else{
        return;
    }

}

function randomChoice(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function computerPlay() {
    let chooser = randomChoice(1, 4);
    if (chooser === 3) {
        console.log("Computer chose PAPER!");
        pickPc.innerHTML = "PAPER!";
        return "PAPER";
    }
    else if (chooser === 2) {
        console.log("Computer chose ROCK!");
        pickPc.innerHTML = "ROCK!";
        return "ROCK";  
    }
    else { 
        console.log("Computer chose SCISSORS!");
        pickPc.innerHTML = "SCISSORS!";
        return "SCISSOR";
    }
}


function singleRound(player, computer) {

    if (playerPick == pcPick) {
        console.log("This round was a draw!");
        pointPlayer += 0;
        pointPc += 0;
    }
    else {
        if (playerPick == "ROCK" && pcPick == "PAPER"){
            console.log("This round the human lost!");
            pointPc += 1;
            checkScorePc(pointPc);

        }
        else if (playerPick == "PAPER" && pcPick == "SCISSOR"){
            console.log("This round the human lost!");
            pointPc += 1;
            checkScorePc(pointPc);
        }
        else if (playerPick == "SCISSOR" && pcPick == "ROCK"){
            console.log("This round the human lost!");
            pointPc += 1;
            checkScorePc(pointPc);
        }
        else {
            console.log("This round the human won!");
            pointPlayer += 1;
            checkScorePl(pointPlayer);
            console.log(pointPlayer +" <<pl>>  <<pc>> "+ pointPc);

        }
    }   
}


// window.alert("Welcome to Rock, Paper, Scissors. Open your dev tools console and re-load the website to see the game results.");







    









// for(let i = 0; i <= 4; i++){

//     let scorePl = playerPlay();

//     let scorePc = computerPlay();

//     singleRound(scorePl, scorePc);

//     console.log(pointPlayer + " is the player's score" );
    
//     if (pointPlayer >= 3) break;
// }


// function didIWin(){

//     if (pointPlayer > pointPc){
//         console.log("You win the match! Final score is: " + pointPlayer+ "/5. Congratulations!");
//         return true;
//     }

//     else if (pointPlayer == pointPc){
//         console.log("You tie the match! Final score is: " + pointPlayer+ "/5. Formidable opponent!");
//         return true;
//     }

//     else {
//         console.log("You lose! Final score is: " + pointPlayer+ "/5. Dirty, sad, ugly loser!");
//         return false;
//     }
// }

// didIWin();


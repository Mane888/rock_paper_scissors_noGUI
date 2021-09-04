//begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay(){
 let randomComputerNumber = Math.floor(Math.random()*100);
 if (randomComputerNumber <= 33){
   return("rock");
 }
 else if (randomComputerNumber <= 66){
 return("paper");
}
 else {
  return("scissors")
}
}


function playerChoose(){
  let playerInput = prompt("Please choose Rock, Paper or Scissors", "Rock").toLowerCase();
  return(playerInput);
}


//test the return with console.log()
const computerSelection = computerPlay();
  console.log(computerSelection);
const playerSelection = playerChoose();
  console.log(playerSelection);

//Write a function that plays a single round of Rock Paper Scissors.

function playRound(){

if (playerSelection === "rock"){
    if (computerSelection === "paper"){
        return("You lost!Paper beats Rock");
    }
    else if (computerSelection === "scissors"){
        return("You won!Rock beats Scissors");
    }
    else if (computerSelection === "rock"){
      return("It's a tie")
    }
  }


if (playerSelection === "paper"){
  if (computerSelection === "rock"){
      return("You won!Paper beats Rock");
  }
  else if (computerSelection === "scissors"){
      return("You lost!Scissors beats Paper");
  }
  else if (computerSelection === "paper"){
    return("It's a tie")
  }
}


if (playerSelection === "scissors"){
  if (computerSelection === "rock"){
      return("You lost!Rock beats Scissors");
  }
  else if (computerSelection === "paper"){
      return("You won!Scissors beats Paper");
  }
  else if (computerSelection === "scissors"){
    return("It's a tie")
  }
}
}
console.log(playRound())




//The function should take two parameters - the playerSelection and computerSelection
//and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
//Important note: you want to return the results of this function call, not console.log() them. To test this
//function console.log the results..
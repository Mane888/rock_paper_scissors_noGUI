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


//a function for player input that is case-insensitive
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


//Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
function game(){
  
}
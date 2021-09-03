//begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay(){
 let randomComputerNumber = Math.floor(Math.random()*100);
 if (randomComputerNumber <= 33){
   return("Rock");
 }
 else if (randomComputerNumber <= 66){
 return("Paper");
}
 else {
  return("Scissors")
}
}
console.log(computerPlay())

/**function playerChoose(){
  let playerInput = prompt("Please choose Rock, Paper or Scissors", "Paper");
  return(playerInput);
}*/


//test the return with console.log()

//Write a function that plays a single round of Rock Paper Scissors.
const playerSelection = "Rock";
console.log(playerSelection)
const computerSelection = computerPlay();
function playRound(computerSelection, playerSelection){

  

if (computerSelection === "Rock"){
  if (playerSelection === "Rock"){
    return("It's a tie!");
}
  else if (playerSelection === "Paper"){
    return("You won! Paper beats Rock");
}
  else if (playerSelection === "Scissors"){
    return("You lost!Rock beats Scissors");
}
  else {
    return("Sometinh went wrong");
  }
}

else if (computerSelection === "Paper"){
  if (playerSelection === "Rock"){
    return("You lost!Paper beats Rock");
}
  else if (playerSelection === "Paper"){
    return("It's a tie!");
}
  else if (playerSelection === "Scissors"){
    return("You won!Scissors beats Paper");
}
}

else if (computerSelection === "Scissors"){
  if (playerSelection === "Rock"){
    return("You won!Rock beats Scissors");
  }
  else if (playerSelection === "Paper"){
    return("You lost!Scissors beats Paper");
  }
  else if (playerSelection === "Scissors"){
    return("It's a tie!");
  }
}
}
console.log(playRound(computerSelection, playerSelection))




//The function should take two parameters - the playerSelection and computerSelection
//and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
//Important note: you want to return the results of this function call, not console.log() them. To test this function console.log the results...
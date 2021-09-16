let playerScoreCount = 0;

let computerScoreCount = 0;


const buttons = document.querySelectorAll('button');

buttons.forEach(button => {button.addEventListener('click', function(e){

    if(e.target.id == "rock"){
      playerChoice = e.target.id;
      console.log(playerChoice);
      playRound(playerChoice, computerPlay());
      }
    else if(e.target.id == "paper"){
      playerChoice = e.target.id;
      console.log(playerChoice);
      playRound(playerChoice, computerPlay());
    }
    else if(e.target.id == "scissors"){
      playerChoice = e.target.id;
      console.log(playerChoice);
      playRound(playerChoice, computerPlay());
    }
  })
});
/*
if (playRound() === "tie"){
  console.log("It's a tie");
  return(++playerScoreCount, ++computerScoreCount);
}
else if (playRound() === "won"){
  console.log("You win");
  return(++playerScoreCount);
}
  else if (playRound() === "lost"){
    console.log("You loose");
    return(++computerScoreCount);

}*/

function playRound(humanChoice, computerSelection){

  if (humanChoice === "rock"){
     if (computerSelection === "paper"){
      console.log("You lost!Paper beats Rock")
      return("lost");
      }
        else if (computerSelection === "scissors"){
          console.log("You won!Rock beats Scissors");
          return("won");
        }
            else if (computerSelection === "rock"){
              console.log("It's a tie");
              return("tie");
            }
    }
      
      
  if (humanChoice === "paper"){
     if (computerSelection === "rock"){
      console.log("You won!Paper beats Rock");
      return("won");
      }
        else if (computerSelection === "scissors"){
          console.log("You lost!Scissors beats Paper");
          return("lost");
        }
            else if (computerSelection === "paper"){
             console.log("It's a tie");
             return("tie");
            }
    }
      
      
  if (humanChoice === "scissors"){
     if (computerSelection === "rock"){
      console.log("You lost!Rock beats Scissors");
      return("lost");
      }
        else if (computerSelection === "paper"){
          console.log("You won!Scissors beats Paper");
          return("won");
        }
            else if (computerSelection === "scissors"){
             console.log("It's a tie");
             return("tie");
            }
    }

   

}




function computerPlay(){
  let randomComputerNumber = Math.floor(Math.random()*100);
    if (randomComputerNumber <= 33){
      console.log("rock");
      return("rock");
    }
    else if (randomComputerNumber <= 66){
      console.log("paper");
    return("paper");
    }
    else {
      console.log("scissors");
     return("scissors")
    }

}


  

/*
let playerScoreCount = 0;

let computerScoreCount = 0;

//Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
function game(){

//computers choice for ‘Rock’, ‘Paper’ or ‘Scissors’
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
 
 
//player input that is case-insensitive
function playerChoose(){
  let playerInput = prompt("Please choose Rock, Paper or Scissors", "Rock").toLowerCase();
  return(playerInput);
}
 
 
//test the return with console.log()
 const computerSelection = computerPlay();
   console.log(computerSelection);
 const playerSelection = playerChoose();
   console.log(playerSelection);
 

//compare inputs and return outcome 
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



//point awarding system 
if (playRound() === "It's a tie"){
    console.log("It's a tie");
    return(++playerScoreCount, ++computerScoreCount);
}
  else if (playRound().substring(4, 5) === "w"){
    console.log("You win");
    return(++playerScoreCount);
  }
    else if (playRound().substring(4, 5) === "l"){
      console.log("You loose");
      return(++computerScoreCount);
  }
  
}

// 5 game loop with score after each iterration
for(i = 0; i < 5; i++){
game();
console.log("Player",playerScoreCount);
console.log("Computer", computerScoreCount);
}

//message for the match outcome
if(playerScoreCount === computerScoreCount){
  console.log("This match resultet in a tie.");
  }
   else if(playerScoreCount > computerScoreCount){
    console.log("Humans rule!");
  }
     else if(playerScoreCount < computerScoreCount){
     console.log("Skynet is coming!");
}
*/


let playerScoreCount = 0;

let computerScoreCount = 0;

let whoWonTheGame;


let scorePl = document.querySelector('.scorePl');
let scorePc = document.querySelector('.scorePc');
let winner = document.querySelector('.winner');
let restartBtn = document.querySelector('.restartBtn');
const buttons = document.querySelectorAll('button');
let computerHand = document.querySelector('.pcChoice');
let playerHands = document.querySelectorAll('.btn');
const playButtons = document.querySelector('.playButtons');

//player hand animations and interactions
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseover', () => {
      computerHand.src = 'images/hand.png';
      computerHand.style.animation = 'shake 2s ease infinite';
  });
  //stop animation after click event and continue after 1.5sec
  btn.addEventListener('click', function(){
    computerHand.style.animation = '';
      setTimeout(function(){
        computerHand.style.animation = 'shake 2s ease infinite';
        computerHand.src = 'images/hand.png';
      }, 700);
  });
  //stop animation while not hovering over player hands
  btn.addEventListener('mouseleave', () => {
    computerHand.style.animation = 'none';
  });
  //clicking feedback through button scale manipulation
  btn.addEventListener('click', function(event){
    this.style.animation = 'btnScale 0.2s ease-in-out';
      setTimeout(function(){
        event.target.style.animation = '';
      },200);
  });
});

//prevents click-spaming same button while other animations are running
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function(){
  btn.classList.add('cannotClick');
    setTimeout(function(){
      btn.classList.remove('cannotClick')
    }, 500);
  });
});

//click event listeners for player buttons plus checking if someone already won
buttons.forEach(button => {button.addEventListener('click', function(e){
    
    if(e.target.id == "rock"){
      playerChoice = e.target.id;
      console.log(playerChoice);
      let computerChoicePic = computerPlay();
      playRound(playerChoice, computerChoicePic)
      ;
      computerHand.src = `images/${computerChoicePic}.png`;
    }
    else if(e.target.id == "paper"){
      playerChoice = e.target.id;
      console.log(playerChoice);
      let computerChoicePic = computerPlay();
      playRound(playerChoice, computerChoicePic);     
      computerHand.src = `images/${computerChoicePic}.png`;
    }
    else if(e.target.id == "scissors"){
      playerChoice = e.target.id;
      console.log(playerChoice);
      let computerChoicePic = computerPlay();
      playRound(playerChoice, computerChoicePic);
      computerHand.src = `images/${computerChoicePic}.png`;
    }
    
  })
});

//play a round + check if someone won already
function playRound(humanChoice, computerSelection){

  if (humanChoice === "rock"){
     if (computerSelection === "paper"){
        ++computerScoreCount;
        scorePc.innerHTML = computerScoreCount;
        scoreUpdatePc();
      }
        else if (computerSelection === "scissors"){
          ++playerScoreCount;
          scorePl.innerHTML = playerScoreCount;
          scoreUpdatePl();
        }
            else if (computerSelection === "rock"){
              ++playerScoreCount;
              ++computerScoreCount;
              scorePl.innerHTML = playerScoreCount;
              scorePc.innerHTML = computerScoreCount;
              scoreUpdatePl();
              scoreUpdatePc();
            }
    }
    
      
      
  if (humanChoice === "paper"){
     if (computerSelection === "rock"){
        ++playerScoreCount;
        scorePl.innerHTML = playerScoreCount;
        scoreUpdatePl();        
      }
        else if (computerSelection === "scissors"){
          ++computerScoreCount;
          scorePc.innerHTML = computerScoreCount;
          scoreUpdatePc();
        }
            else if (computerSelection === "paper"){
              ++playerScoreCount;
              ++computerScoreCount;
              scorePl.innerHTML = playerScoreCount;
              scorePc.innerHTML = computerScoreCount;
              scoreUpdatePl();
              scoreUpdatePc();
            }
    }
      
      
  if (humanChoice === "scissors"){
     if (computerSelection === "rock"){
        ++computerScoreCount;
        scorePc.innerHTML = computerScoreCount;
        scoreUpdatePc();
      }
        else if (computerSelection === "paper"){
          ++playerScoreCount;
          scorePl.innerHTML = playerScoreCount;
          scoreUpdatePl();          
        }
            else if (computerSelection === "scissors"){
                ++playerScoreCount;
                ++computerScoreCount;
                scorePl.innerHTML = playerScoreCount;
                scorePc.innerHTML = computerScoreCount;
                scoreUpdatePl();
                scoreUpdatePc();
            }
        
    }
    whoWon();
};



//computer random pick logic
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

};

//message who won the game + restart button fade in
function whoWon(){
  if ((playerScoreCount === 5) && (computerScoreCount === 5)){
    whoWonTheGame = 'Ohh...It\'s a tie!'
    winner.textContent = whoWonTheGame;
    showWinner();
    showButton();
    hideInputs();
  }
  else if (playerScoreCount == 5){
    whoWonTheGame =  'Player Won';
    winner.textContent = whoWonTheGame;
    showWinner();
    showButton();
    hideInputs();
  }
  else if (computerScoreCount == 5){
    whoWonTheGame = 'Computer Won';
    winner.textContent = whoWonTheGame;
    showWinner();
    showButton();
    hideInputs();
  }
};

//hide player input options after a game concludes
function hideInputs(){
  playButtons.classList.add('hideInputs');
  };

//stops countig points after someone has 5 !!!NOT WORKING!!!
function stopGame(){
  if(playerScoreCount == 5 || computerScoreCount == 5){
    return;
  }
};

//game restart button fade in
function showButton(){
  restartBtn.classList.add('showBtn');
};

//winner message fade in
function showWinner(){
  winner.classList.add('showWinner');
};

//restart game function attached to button click
document.getElementById("restart").addEventListener("click", function() {
  location.reload();
});

//color and scale indication for who got a point after a round and who won
function scoreUpdatePl(){
  if(playerScoreCount == 5){
    scorePl.style.transform = 'scale(1.5)';
    scorePl.style.color = 'red';
    return;
  }
  scorePl.style.transform = 'scale(1.5)';
  scorePl.style.color = 'red';
  setTimeout(function(){
    scorePl.style.transform = 'scale(1)';
    scorePl.style.color = 'rgba(255, 255, 255, 0.89)';
  },700);
};
//color and scale indication for who got a point after a round and who won
function scoreUpdatePc(){
  if(computerScoreCount == 5){
    scorePc.style.transform = 'scale(1.5)';
    scorePc.style.color = 'red';
    return;
  }
  scorePc.style.transform = 'scale(1.5)';
  scorePc.style.color = 'red';
  setTimeout(function(){
    scorePc.style.transform = 'scale(1)';
    scorePc.style.color = 'rgba(255, 255, 255, 0.89)';
  },700);
};


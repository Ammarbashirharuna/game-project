let playerScore = 0
let computerScore = 0
let winner = ''


function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3)
 if (randomNumber === 0){
     console.log("ROCK")
 }else if (randomNumber === 1){
     console.log("PAPER")
 }else if (randomNumber === 2){
     console.log("SCISSORS")
 } else{
     console.log("BOOM")
 }
          console.log(randomNumber); 
         
 }
  
 
 getComputerChoice();


function playround(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        roundwinner = 'tie'   
    }
    if( (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') ||
    (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') ||
    (playerSelection == 'PAPER' && computerSelection == 'ROCK')
     ) {
        playerScore++
        roundwinner = 'player'
    } 
    if(
        (computerSelection == 'ROCK' && playerSelection == 'SCISSORS') ||
        (computerSelection == 'SCISSORS' && computerSelection == 'PAPER') ||
        (computerSelection == 'PAPER' && playerSelection)
    
    
    ){
        computerScore++
        roundwinner = 'computer';
    }

   
    
}
updateMessege(roundwinner, playerSelection,computerSelection)

function Game(){
   return playerScore === 5 || computerScore === 5
}






const playerSelection = 'rock'
const computerSelection = getComputerChoice();
console.log(playround(playerSelection,computerSelection));


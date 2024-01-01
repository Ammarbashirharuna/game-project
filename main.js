


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



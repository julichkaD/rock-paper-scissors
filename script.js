const yourChoice = document.querySelector(".your-choice");
const computerChoice = document.querySelector("#computer-choice");
const result = document.querySelector("#result");
const choice = document.querySelector(".my-pick");
const btn_one_round = document.getElementsByClassName("btn-one-round")[0];
const btn_three_round = document.getElementsByClassName("btn-three-round")[0];
const container = document.getElementsByClassName("container")[0];
const final_winner = document.getElementById("final_winner");

let mode = 1;
let remaining_rounds; 

//ONE ROUND
btn_one_round.addEventListener("click", func_one_round);
function func_one_round() {
  container.style.display = "block";
  mode = 1;
  remaining_rounds = 1;
  btn_three_round.disabled=true;
}

//THREE ROUNDS
btn_three_round.addEventListener("click", func_three_round);
function func_three_round() {
  container.style.display = "block";
  mode = 2;
  remaining_rounds = 3;
  btn_one_round.disabled = true;
}

let items=["rock","paper","scissors"];
 computerScore=0;
 playerScore=0; 
 tieScore=0;

 const playRound = function (e) {
//   console.log(e.target);
//   console.log("clicked",playerScore, computerScore, tieScore);

  let randomItem = Math.floor(Math.random()*3);
  console.log(randomItem);
    alert(e.target.innerHTML)
  if(items[randomItem] ==="rock" && e.target.innerHTML==="paper") {
  console.log('Paper wins')
    result.innerHTML='Result: Player Wins!!'
    playerScore++;
    computerChoice.innerHTML="Computer Choice: rock"
    yourChoice.innerHTML="Your Choice: paper";
  }
  if(items[randomItem]==="rock" && e.target.innerHTML==="scissors") {
    console.log('Rock won')
    result.innerHTML="Result: Computer Wins!!"
    computerScore++;
    computerChoice.innerHTML="Computer Choice: rock"
    yourChoice.innerHTML="Your Choice: scissors";
  }
  if(items[randomItem]==="rock" && e.target.innerHTML==="rock") {
    console.log("You tie")
    result.innerHTML="Result: and the Winner is... Friendship :)"
    tieScore++;
    computerChoice.innerHTML="Computer Choice: rock"
    yourChoice.innerHTML="Your Choice: rock"
  }


  if(items[randomItem]==="paper" && e.target.innerHTML==="paper") {
    console.log('You tie')
    result.innerHTML="Result: and the Winner is... Friendship :)"
    tieScore++;
    computerChoice.innerHTML="Computer Choice: paper"
    yourChoice.innerHTML="Your Choice: paper"
  }
  if(items[randomItem]==="paper" && e.target.innerHTML==="scissors") {
    console.log('You won')
    result.innerHTML='Result: Player Wins!!'
    playerScore++;
    computerChoice.innerHTML="Computer Choice: paper"
    yourChoice.innerHTML="Your Choice: scissors"
  }
  if(items[randomItem]==="paper" && e.target.innerHTML==="rock") {
    console.log('You lost')
    result.innerHTML="Result: Computer Wins!!"
    computerScore++;
    computerChoice.innerHTML="Computer Choice: paper"
    yourChoice.innerHTML="Your Choice: rock"
  }

  if(items[randomItem]==="scissors" && e.target.innerHTML==="paper") {
    console.log('Comp won')
    result.innerHTML="Result: Computer Wins!!"
    computerScore++;
    computerChoice.innerHTML="Computer Choice: scissors"
    yourChoice.innerHTML="Your Choice: paper"
  }
  if(items[randomItem]==="scissors" && e.target.innerHTML==="scissors") {
    console.log('You tie')
    result.innerHTML="Result: and the Winner is... Friendship :)"
    tieScore++;
    computerChoice.innerHTML="Computer Choice: scissors"
    yourChoice.innerHTML="Your Choice: scissors"
  }
  if(items[randomItem]==="scissors" && e.target.innerHTML==="rock") {
    console.log('You won')
    result.innerHTML='Result: Player Wins!!'
    playerScore++;
    computerChoice.innerHTML="Computer Choice: scissors"
    yourChoice.innerHTML="Your Choice: rock"
  }
  remaining_rounds--

  document.getElementById('player-score').innerHTML = playerScore;
  document.getElementById('computer-score').innerHTML = computerScore;

  if (mode === 1) {
    if(remaining_rounds <= 0){
        if(computerScore > playerScore){
          final_winner.innerText=` The final winner : Computer`
        }else{
          final_winner.innerText=` The final winner : Player`
        }
        return
    }
  } else if (mode === 2) {
    if (computerScore === 2 || playerScore === 2) {
      if(computerScore > playerScore){
        final_winner.innerText=` The final winner : Computer`
      }else{
        final_winner.innerText=` The final winner : Player`
      }
      return
    }
  }
}


choice.addEventListener("click",function(e){
  
  if (mode === 1) {
    playRound(e);
  } else if (mode === 2) {
    // add your code for best of 3 here, you can use the playRound code as part of it
    // playRound(e);
    playRound(e);
    // playRound(e);
  }
    
});

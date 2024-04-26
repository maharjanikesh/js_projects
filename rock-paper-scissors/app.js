const computerChoiceDisplay = document.getElementById('computer');
const userChoiceDisplay = document.getElementById('user');
const resultDisplay = document.getElementById('result');
const possibleChoice = document.querySelectorAll('button');
let userChoice
let computerChoice
let result

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    computerGenerateChoice()
    getResult()
} ))

function computerGenerateChoice(){
    const randomNumber = Math.floor(Math.random() * 3 )+1

    if (randomNumber === 1){
        computerChoice = 'rock'
        
    }
    if (randomNumber === 2){
        computerChoice = 'paper'

    }
    if (randomNumber === 3){
        computerChoice = 'scissor'

    }

    computerChoiceDisplay.innerHTML = computerChoice
}


function getResult(){
    if(computerChoice === userChoice){
        result = `It's a draw`
    }
    else if(computerChoice === 'rock' && userChoice === 'scissor'){
        result = 'you lost'
    }
    else if(computerChoice === 'paper' && userChoice === 'rock'){ 
        result = 'you lost'
    }
    else if(computerChoice === 'scissor' && userChoice === 'paper'){ 
        result = 'you lost'
    }
    else{
        result = 'you win'
    }
    resultDisplay.innerHTML = result
}
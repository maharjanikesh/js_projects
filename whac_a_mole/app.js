const squares = document.querySelectorAll(".square")
const mole = document.querySelector(".mole")
const timeleft = document.querySelector("#time-left")
const score = document.querySelector("#score")

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomPosition = squares[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    hitPosition = randomPosition.id
}

squares.forEach(square =>{
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole(){
    timerId = setInterval(randomSquare, 500)
}

moveMole()


function countDown(){
    currentTime--
    timeleft.textContent = currentTime

    if(currentTime == 0){
        clearInterval(timerId)
        clearInterval(countDownTimerId)
        alert ('Game Over!Your final score is '+ result)
    }
}
let countDownTimerId = setInterval(countDown ,1000) 
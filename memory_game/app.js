const cardArray = [
    {
        name : 'Cheeseburger',
        img :'images/cheeseburger.png'
    },
    
    {
        name : 'Fries',
        img :'images/fries.png'
    },
    
    {
        name : 'Hotdog',
        img :'images/hotdog.png'
    },
    
    {
        name : 'Milkshake',
        img :'images/milkshake.png'
    },
    
    {
        name : 'Pizza',
        img :'images/pizza.png'
    },
    
    {
        name : 'Icecream',
        img :'images/ice-cream.png'
    },

    {
        name : 'Cheeseburger',
        img :'images/cheeseburger.png'
    },

    {
        name : 'Fries',
        img :'images/fries.png'
    },

    {
        name : 'Hotdog',
        img :'images/hotdog.png'
    },

    {
        name : 'Milkshake',
        img :'images/milkshake.png'
    },

    {
        name : 'Pizza',
        img :'images/pizza.png'
    },

    {
        name : 'Icecream',
        img :'images/ice-cream.png'
    }

    
]


cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard(){
    for(let i =0; i<cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', "images/blank.png")
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
    }
}

createBoard()


function checkMatch(){

    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    const cards = document.querySelectorAll('img')
    console.log('check for match')
    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        alert('you have clicked the same image!!')
    }

    if (cardsChosen[0] == cardsChosen[1]){
        alert('You have found a match!!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry try again!')
    }

    resultDisplay.innerHTML = cardsWon.length;
    cardsChosen = []
    cardsChosenIds = []

    if ( cardsWon.length == cardArray.length/2 ){
        resultDisplay.innerHTML = 'Congratulations you have found them all!';
    }

}

function flipCard(){
    console.log(cardArray)
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    console.log('clicked', cardId)
    console.log(cardsChosen)
    this.setAttribute('src', cardArray[cardId].img)

    if ( cardsChosen.length === 2){
        setTimeout( checkMatch, 500)
    }
}
document.addEventListener('DOMContentLoaded', ()=> {



// cards six in arrays
const cardsArray = [
    {
        name:'children',
        image: 'IMAGES/Card2Children.jpg',  
    },

    {   name:'children',
        image: 'IMAGES/Card2Children.jpg',  
    },

    {   name: 'child1',
        image: 'IMAGES/Card1Yvette.jpg',
    },

    {   name: 'child1',
        image: 'IMAGES/Card1Yvette.jpg',
    },

    {   name: 'child2',
        image: 'IMAGES/Card5Alexsa.jpg',
    },

    {   name: 'child2',
        image: 'IMAGES/Card5Alexsa.jpg',
    },

    {   name: 'child3',
        image: 'IMAGES/Card6Junito.jpg',
    },

    {   name: 'child3',
        image: 'IMAGES/Card6Junito.jpg',
    },

    {   name: 'parents',
        image: 'IMAGES/Card4Parents.jpg',
    },

    {   name: 'parents',
        image: 'IMAGES/Card4Parents.jpg',
    },

    {   name: 'gizmo',
        image: 'IMAGES/Card3Gizmo.jpg',
    },

    {   name: 'gizmo',
        image: 'IMAGES/Card3Gizmo.jpg',
    },

]


// random card sort
cardsArray.sort(() => 0.5 - Math.random())

// game board

const gameBoard = document.querySelector('.gameBoard')
const resultDisplay = document.querySelectorAll('#result')
var cardsChosen = []
var cardsChosenID = []
var cardsWon = []


function createBoard() {
    for (let i = 0; i < cardsArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'IMAGES/Back of Cards.jpg')
        card.setAttribute('data-id', i)

        card.addEventListener('click', flipCard)

        gameBoard.appendChild(card)

    }
}


/* Check for a match */
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneID = cardsChosenID[0]
    const optionTwoID = cardsChosenID[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You have a match')
        cards[optionOneID].setAttribute('src', 'IMAGES/matched.jpg')
        cards[optionTwoID].setAttribute('src', 'IMAGES/matched.jpg')

        cardsWon.push(cardsChosen)
    }else {
        cards[optionOneID].setAttribute('src', 'IMAGES/Back of Cards.jpg')
        cards[optionTwoID].setAttribute('src', 'IMAGES/Back of Cards.jpg')
        alert('No match, try again')

    }

    cardsChosen = []
    cardsChosenID = []
    resultDisplay.textContent = cardsWon.length 
    if (cardsWon.length === cardsArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found the most match cards!'
    }

    }









/* Flip Cards over */
function flipCard() {
    // get the ID from the image
    let cardID = this.getAttribute('data-id')
    // pushes corresponding card name into the cards chosen array
    cardsChosen.push(cardsArray[cardID].name)
    // pushes the card ID into cards chosen ID array
    cardsChosenID.push(cardID)
    // sets image to the card clicked on
    this.setAttribute('src', cardsArray[cardID].image)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)

    }

}





createBoard()



})
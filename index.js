let player = {
    name: "Vasilis",
    chips: 140
}

let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard() {
    let randomNum = Math.floor((Math.random() * 13) + 1)
    if (randomNum === 1) {
        return 11
    }else if (randomNum > 10) {
        return 10
    } else {
        return randomNum
    }
}

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum += firstCard + secondCard
    isAlive = true
    renderGame()
}



function renderGame() {
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You have got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You are out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
  
}

//Επαναφορά όλων των τιμών στην αρχική τους κατάσταση
function resetGame() {
    cards = []
    sum = 0
    hasBlackjack = false
    isAlive = false
    message = "Want to play a round?"

    //Ενημέρωση του UI
    message.textContent = message
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: "
}

function newCard() {
    if (hasBlackjack === false && isAlive === true) {
        let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}


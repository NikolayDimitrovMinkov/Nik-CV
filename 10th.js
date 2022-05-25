let player = {
    name: "Nicky: ",
    chips:  200
}
let cards = [] //array//order list of items
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.querySelector("#message_el");
let sumEl = document.querySelector("#sum_el");
let cardsEl = document.querySelector("#cards_el");
let playerEl = document.querySelector("#player_el")
let blabla = document.querySelector('#blabla');

playerEl.innerHTML = player.name + ": $" + player.chips

function getRendomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    }else {
        return randomNumber
    }
    
}


function startGame() {
    blabla.innerHTML = "";
    isAlive = true
    let firstCard = getRendomCard()
    let secondCard = getRendomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    if(isAlive === true && hasBlackJack === false ) {
        cardsEl.innerHTML = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.innerHTML += cards[i] + " "
    }
    sumEl.innerHTML = "Sum: " + sum
    if (sum < 20) {
        message = "Do you want to draw a new card"
    }else if (sum === 21) {
        message = "You've got a BlackJack!" 
        hasBlackJack = true
        newAfterWin()
       
        
    }else {
        message = "You're out of the game" 
        isAlive = false
    }
    messageEl.innerHTML = message
    
    }
    
    
}

function newCard() {
    let card = getRendomCard()
    sum += card
    cards.push(card)
    renderGame()
    
}


function newAfterWin() {
    hasBlackJack = false
    isAlive = false
    blabla.innerHTML = "ANOTHER GAME?" 
    console.log(blabla);
}





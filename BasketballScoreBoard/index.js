let homeScore = document.getElementById('home-score-el')
let guestScore = document.getElementById('guest-score-el')

let homeCount = 0
let guestCount = 0

function addOne(){
    homeCount += 1
    homeScore.textContent = homeCount
}

function addTwo(){
    homeCount += 2
    homeScore.textContent = homeCount
}

function addThree(){
    homeCount += 3
    homeScore.textContent = homeCount
}

function addOneGuest(){
    guestCount += 1
    guestScore.textContent = guestCount
}

function addTwoGuest(){
    guestCount += 2
    guestScore.textContent = guestCount
}

function addThreeGuest(){
    guestCount += 3
    guestScore.textContent = guestCount
}

function resetGame(){
    guestCount = 0
    homeCount = 0
    homeScore.textContent = homeCount
    guestScore.textContent = guestCount
}

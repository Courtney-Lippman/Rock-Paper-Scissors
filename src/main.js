// ~~~~~~Variables~~~~
//~~Home view DOM variables~~~
var homeClassicSection = document.querySelector('.js-home-classic-section')
var homeDifficultSection = document.querySelector('.js-home-difficult-section')
var chooseYourGameText = document.querySelector('.js-choose-your-game-text')

//~~~Misc variables
var fightersList
var game

// ~~~~~Event Listeners~~~~~~
//~~~Home Page~~~
homeClassicSection.addEventListener('click', selectGame)
homeDifficultSection.addEventListener('click', selectGame)
// Can I put two event listeners that point to the same function like this? Yes, but is there a better way?

//~~~~~Event Handlers and Other Functions~~~~~

function selectGame (event) {
  if (
    event.target.parentElement.classList.contains('js-classic') ||
      event.target.classList.contains('js-classic')
  ) {
    game = new Game('classic')
    takeAwayPutBackHomeView()
    displayClassicFighters()
    console.log('You are a genius!')
  } else if (
    event.target.parentElement.classList.contains('js-difficult') ||
      event.target.classList.contains('js-difficult')
  ) {
    game = new Game('difficult')
    takeAwayPutBackHomeView()
    displayDifficultFighters()
    console.log("You're very intelligent!")
  }

  selectFighterList()
  console.log(fightersList)
}

function selectFighterList () {
  if (game.selectedGameType === 'classic') {
    fightersList = [ 'rock', 'paper', 'scissors' ]
  } else {
    fightersList = [ 'rock', 'paper', 'scissors', 'alien', 'lizard' ]
  }
}

function takeAwayPutBackHomeView () {
  homeClassicSection.classList.toggle('hidden')
  homeDifficultSection.classList.toggle('hidden')
  chooseYourGameText.innerText = 'Choose Your Fighter!'
}

function displayClassicFighters () {
  //Display images for rock paper and scissors
  //Display them in a way that makes them clickable
}

function displayDifficultFighters () {
  //Display images for rock, paper, scissors, lizard, alien
  //Display them in a way that makes them clickable
}
















// selectFighterList()
// game.human.takeTurn('scissors')
// game.computer.takeTurn()
// game.checkForWinner()
// <'👩Human won this round!👩'
// game.human.takeTurn('scissors')
// game.computer.takeTurn()
// game.checkForWinner()
// <"😢It's a draw!😢"
// game.human.takeTurn('scissors')
// game.computer.takeTurn()
// game.checkForWinner()
// <'💻Computer won this round!💻'
// game.human.takeTurn('scissors')
// game.computer.takeTurn()
// game.checkForWinner()
// < '💻Computer won this round!💻'
// game.human.takeTurn('scissors')
// game.computer.takeTurn()
// game.checkForWinner()
// <"😢It's a draw!😢"
// game.human.takeTurn('scissors')
// game.computer.takeTurn()
// game.checkForWinner()
// <'💻Computer won this round!💻'
// game.computer.wins
// <4
// game.human.wins
// <1
// To Play the Game in the Console:
// game.human.takeTurn()
// game.computer.takeTurn()
// game.checkForWinner()

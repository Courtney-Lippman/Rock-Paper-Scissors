// ~~~~~~Variables~~~~
var homeClassicSection = document.querySelector('.js-home-classic-section')
var homeDifficultSection = document.querySelector('.js-home-difficult-section')
var chooseYourGameText = document.querySelector('.js-choose-your-game-text')
var classicMainSection = document.querySelector('.js-classic-main-section')
var difficultMainSection = document.querySelector('.js-difficult-main-section')
var winnerMainSection = document.querySelector('.js-winner-main-section')
var humanSideWins = document.querySelector('.js-human-side-wins')
var computerSideWins = document.querySelector('.js-computer-side-wins')
var changeGameButton = document.querySelector('.js-change-game-button')
var fightersList
var game
var winsTally = [0,0]

// ~~~~~Event Listeners~~~~~~
// ~~~Home Page~~~
homeClassicSection.addEventListener('click', selectGame)
homeDifficultSection.addEventListener('click', selectGame)
// ~~~Fighter Page~~~
classicMainSection.addEventListener('click', selectFighter)
difficultMainSection.addEventListener('click', selectFighter)
changeGameButton.addEventListener('click', goBackToMainView)
// Can I put two event listeners that point to the same function like this? Yes, but is there a better way?
// ~~~~~Event Handlers and Other Functions~~~~~
function selectGame () {
  if (
    event.target.parentElement.classList.contains('js-classic') ||
      event.target.classList.contains('js-classic')
  ) {
    game = new Game('classic')
    game.human.wins = winsTally[0]
    game.computer.wins = winsTally[1]
    winsTally.pop()
    winsTally.pop()
    selectFighterList()
    takeAwayHomeView()
    displayClassicFighters()
  } else if (
    event.target.parentElement.classList.contains('js-difficult') ||
      event.target.classList.contains('js-difficult')
  ) {
    game = new Game('difficult')
    game.human.wins = winsTally[0]
    game.computer.wins = winsTally[1]
    winsTally.pop()
    winsTally.pop()
    selectFighterList()
    takeAwayHomeView()
    displayDifficultFighters()
  }
}

function selectFighterList () {
  if (game.selectedGameType === 'classic') {
    fightersList = [
      {
        name: 'rock',
        beats: 'scissors',
        img: '<img class="js-0" src="assets/happy-rocks.png" alt= "Happy rock">'
      },
      {
        name: 'paper',
        beats: 'rock',
        img: '<img class="js-1" src="assets/happy-paper.png" alt="Happy paper">'
      },
      {
        name: 'scissors',
        beats: 'paper',
        img: '<img class="js-2" src="assets/happy-scissors.png" alt="Scissors">'
      }
    ]
  } else {
    fightersList = [
      {
        name: 'rock',
        beats: 'scissors lizard',
        img: '<img class="js-0" src="assets/happy-rocks.png" alt= "Happy rock">'
      },
      {
        name: 'paper',
        beats: 'rock alien',
        img: '<img class="js-1" src="assets/happy-paper.png" alt="Happy paper">'
      },
      {
        name: 'scissors',
        beats: 'paper lizard',
        img: '<img class="js-2" src="assets/happy-scissors.png" alt="Scissors">'
      },
      {
        name: 'alien',
        beats: 'scissors rock',
        img: '<img class="js-3" src="assets/happy-alien.png" alt="Happy alien">'
      },
      {
        name: 'lizard',
        beats: 'paper alien',
        img: '<img class="js-4" src="assets/flat-lizard.png" alt="Lizard">'
      }
    ]
  }
}

function takeAwayHomeView () {
  homeClassicSection.classList.add('hidden')
  homeDifficultSection.classList.add('hidden')
  chooseYourGameText.innerText = 'Choose Your Fighter!'
}

function displayClassicFighters () {
  // difficultMainSection.classList.add('hidden')
  classicMainSection.classList.remove('hidden')
  difficultMainSection.innerHTML = ''
  classicMainSection.innerHTML = `<div class="display-classic-fighters">${fightersList[0].img}${fightersList[1].img}${fightersList[2].img}</div>`
}

function displayDifficultFighters () {
  // classicMainSection.classList.add('hidden')
  difficultMainSection.classList.remove('hidden')
  classicMainSection.innerHTML = ''
  difficultMainSection.innerHTML = `<div class="display-difficult-fighters">${fightersList[0].img}${fightersList[1].img}${fightersList[2].img}${fightersList[3].img}${fightersList[4].img}</div>`
}

function selectFighter () {
  if (event.target.classList.contains('js-0')) {
    game.human.takeTurn(fightersList[0])
    game.computer.takeTurn()
  } else if (event.target.classList.contains('js-1')) {
    game.human.takeTurn(fightersList[1])
    game.computer.takeTurn()
  } else if (event.target.classList.contains('js-2')) {
    game.human.takeTurn(fightersList[2])
    game.computer.takeTurn()
  } else if (event.target.classList.contains('js-3')) {
    game.human.takeTurn(fightersList[3])
    game.computer.takeTurn()
  } else if (event.target.classList.contains('js-4')) {
    game.human.takeTurn(fightersList[4])
    game.computer.takeTurn()
  }
  determineAndShowWinner()
}

function determineAndShowWinner () {
  game.checkForWinner()
  if (game.winner === 'no one') {
    chooseYourGameText.innerText = "\uD83D\uDE22It's a draw!\uD83D\uDE22"
  } else {
    chooseYourGameText.innerText = `${game.winner.token}${game.winner.name} won this round!${game.winner.token}`
  }
  changeToWinnerView()
  winnerMainSection.innerHTML = `<div>${game.human.fighter.img}${game.computer.fighter.img}</div>`
  humanSideWins.innerText = `${game.human.wins}`
  computerSideWins.innerText = `${game.computer.wins}`
  setTimeout(hideWinnerShowSelectfighterView, 2000)
  // the above side wins may need to be moved depending on how I do the reset.
}

function changeToWinnerView () {
  difficultMainSection.classList.add('hidden')
  classicMainSection.classList.add('hidden')
  winnerMainSection.classList.remove('hidden')
}

function hideWinnerShowSelectfighterView () {
  chooseYourGameText.innerText = 'Choose Your Fighter!'
  winnerMainSection.classList.add('hidden')
  difficultMainSection.classList.remove('hidden')
  classicMainSection.classList.remove('hidden')
  changeGameButton.classList.remove('hidden')
}

function goBackToMainView () {
  keepWinningTally()
  difficultMainSection.classList.add('hidden')
  classicMainSection.classList.add('hidden')
  changeGameButton.classList.add('hidden')
  homeClassicSection.classList.remove('hidden')
  homeDifficultSection.classList.remove('hidden')
  chooseYourGameText.innerText = 'Choose Your Game!'
}
function keepWinningTally () {
  winsTally.push(game.human.wins)
  winsTally.push(game.computer.wins)
  humanSideWins.innerText = `${winsTally[0]}`
  computerSideWins.innerText = `${winsTally[1]}`
}
//* *******The info below will be in the functions for the event listeners****
// When a img is clicked, the image should correlate with the index number of the current fightersList aka if user clicks alien img then fighterList[3] is selected and placed in the takeTurn like so maybe.... game.human.takeTurn(fighterList[3]) console.log(fighterList[3]) to make sure that it is indeed a string of 'alien'
// at the same time game.computer.takeTurn() should be invoked
// this may need to be a new function (maybe not) but then game.checkForWinner() should then be invoked!

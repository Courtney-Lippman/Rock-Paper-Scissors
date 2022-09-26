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
var human = new Player('Human', '\uD83D\uDC69', 0)
var computer = new Player('Computer', '\uD83D\uDCBB', 0)

homeClassicSection.addEventListener('click', selectGame)
homeDifficultSection.addEventListener('click', selectGame)
classicMainSection.addEventListener('click', selectFighter)
difficultMainSection.addEventListener('click', selectFighter)
changeGameButton.addEventListener('click', goBackToMainView)

function selectGame () {
  if (
    event.target.parentElement.classList.contains('js-classic') ||
      event.target.classList.contains('js-classic')
  ) {
    game = new Game('classic', human, computer)
    selectFighterList()
    takeAwayHomeView()
    displayClassicFighters()
  } else if (
    event.target.parentElement.classList.contains('js-difficult') ||
      event.target.classList.contains('js-difficult')
  ) {
    game = new Game('difficult', human, computer)
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
  classicMainSection.classList.remove('hidden')
  difficultMainSection.innerHTML = ''
  classicMainSection.innerHTML = `<div class="display-classic-fighters">${fightersList[0].img}${fightersList[1].img}${fightersList[2].img}</div>`
}

function displayDifficultFighters () {
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
  humanSideWins.innerText = `${human.wins}`
  computerSideWins.innerText = `${computer.wins}`
}

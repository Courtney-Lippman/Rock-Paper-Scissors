// ~~~~~~Variables~~~~
// ~~Home view DOM variables~~~
var homeClassicSection = document.querySelector('.js-home-classic-section')
var homeDifficultSection = document.querySelector('.js-home-difficult-section')
var chooseYourGameText = document.querySelector('.js-choose-your-game-text')

// ~~~Classic view DOM Variables~~~
var classicMainSection = document.querySelector('.js-classic-main-section')
var difficultMainSection = document.querySelector('.js-difficult-main-section')
// ~~~Misc variables
var fightersList
var game

// ~~~~~Event Listeners~~~~~~
// ~~~Home Page~~~
homeClassicSection.addEventListener('click', selectGame)
homeDifficultSection.addEventListener('click', selectGame)
// ~~~Fighter Page~~~
classicMainSection.addEventListener('click', selectFighter)
difficultMainSection.addEventListener('click', selectFighter)
// Can I put two event listeners that point to the same function like this? Yes, but is there a better way?
// ~~~~~Event Handlers and Other Functions~~~~~
function selectGame (event) {
  if (
    event.target.parentElement.classList.contains('js-classic') ||
      event.target.classList.contains('js-classic')
  ) {
    game = new Game('classic')
    selectFighterList()
    takeAwayPutBackHomeView()
    displayClassicFighters()
    console.log('You are a genius!')
  } else if (
    event.target.parentElement.classList.contains('js-difficult') ||
      event.target.classList.contains('js-difficult')
  ) {
    game = new Game('difficult')
    selectFighterList()
    takeAwayPutBackHomeView()
    displayDifficultFighters()
    console.log("You're very intelligent!")
  }
}

// function selectFighterList () {
//   if (game.selectedGameType === 'classic') {
//     fightersList = [ 'rock', 'paper', 'scissors' ]
//   } else {
//     fightersList = [ 'rock', 'paper', 'scissors', 'alien', 'lizard' ]
//   }
// }
function selectFighterList () {
  if (game.selectedGameType === 'classic') {
    fightersList = [
      {
        name: 'rock',
        // beats: [ fighterList[2]] maybe just string name instead
        img: '<img class="js-0" src="assets/happy-rocks.png" alt= "Happy rock">'
      },
      {
        name: 'paper',
        // beats: [ fightersList[0] ]
        img: '<img class="js-1" src="assets/happy-paper.png" alt="Happy paper">'
      },
      {
        name: 'scissors',
        // beats: [ fightersList[1] ]
        img: '<img class="js-2" src="assets/happy-scissors.png" alt="Scissors">'
      }
    ]
  } else {
    fightersList = [
      {
        name: 'rock',
        // beats: [ fightersList[2], fightersList[4] ]
        img: '<img class="js-0" src="assets/happy-rocks.png" alt= "Happy rock">'
      },
      {
        name: 'paper',
        // beats: [ fightersList[0], fightersList[3] ]
        img: '<img class="js-1" src="assets/happy-paper.png" alt="Happy paper">'
      },
      {
        name: 'scissors',
        // beats: [ fightersList[1], fightersList[4] ]
        img: '<img class="js-2" src="assets/happy-scissors.png" alt="Scissors">'
      },
      {
        name: 'alien',
        // beats: [ fightersList[2], fightersList[0] ]
        img: '<img class="js-3" src="assets/happy-alien.png" alt="Happy alien">'
      },
      {
        name: 'lizard',
        // beats: [ fightersList[1], fightersList[3] ]
        img: '<img class="js-4" src="assets/flat-lizard.png" alt="Lizard">'
      }
    ]
  }
}

function takeAwayPutBackHomeView () {
  homeClassicSection.classList.toggle('hidden')
  homeDifficultSection.classList.toggle('hidden')
  chooseYourGameText.innerText = 'Choose Your Fighter!'
}

function displayClassicFighters () {
  console.log(fightersList[0])
  classicMainSection.innerHTML = `<div class="display-classic-fighters">${fightersList[0].img}${fightersList[1].img}${fightersList[2].img}</div>`
  // classicMainSection.innerHTML = `<div class="display-classic-fighters"><img class="js-0" src="assets/happy-rocks.png" alt= "Happy rock"><img class="js-1" src="assets/happy-paper.png" alt="Happy paper"><img class="js-2" src="assets/happy-scissors.png" alt="Scissors"></div>`
  // Display images for rock paper and scissors
  // access element that already exists on the html page. Make a variable for it.
  // use .innerHTML and put in the images <img> (be careful of whitespace here!)
  // Display them in a way that makes them clickable
  // add event Listener to parent element that already exists **see halloween codepen for more info on how to do this!***
}

function displayDifficultFighters () {
  console.log(fightersList[0])
  difficultMainSection.innerHTML = `<div class="display-difficult-fighters">${fightersList[0].img}${fightersList[1].img}${fightersList[2].img}${fightersList[3].img}${fightersList[4].img}</div>`
}

function selectFighter (event) {
  if (event.target.classList.contains('js-0')) {
    // maybe push the img into an array?
    console.log(fightersList[0])
    // gives us 'rock'
    game.human.takeTurn(fightersList[0])
    game.computer.takeTurn()
    console.log(game.human)
    // gives us 'rock'
    console.log(game.computer) // gives us random
  } else if (event.target.classList.contains('js-1')) {
    console.log(fightersList[1])
    // gives us 'paper'
    game.human.takeTurn(fightersList[1])
    game.computer.takeTurn()
    console.log(game.human)
    // gives us 'paper'
    console.log(game.computer)
  } else if (event.target.classList.contains('js-2')) {
    console.log(fightersList[2])
    // gives us 'scissors'
    game.human.takeTurn(fightersList[2])
    game.computer.takeTurn()
    console.log(game.human)
    // gives us 'scissors'
    console.log(game.computer)
  } else if (event.target.classList.contains('js-3')) {
    console.log(fightersList[3])
    // gives us 'scissors'
    game.human.takeTurn(fightersList[3])
    game.computer.takeTurn()
    console.log(game.human)
    // gives us 'scissors'
    console.log(game.computer)
  } else if (event.target.classList.contains('js-4')) {
    console.log(fightersList[4])
    // gives us 'scissors'
    game.human.takeTurn(fightersList[4])
    game.computer.takeTurn()
    console.log(game.human)
    // gives us 'scissors'
    console.log(game.computer)
  }
}

function determineAndShowWinner () {
  console.log(game.checkForWinner())
}
//* *******The info below will be in the functions for the event listeners****
// When a img is clicked, the image should correlate with the index number of the current fightersList aka if user clicks alien img then fighterList[3] is selected and placed in the takeTurn like so maybe.... game.human.takeTurn(fighterList[3]) console.log(fighterList[3]) to make sure that it is indeed a string of 'alien'
// at the same time game.computer.takeTurn() should be invoked
// this may need to be a new function (maybe not) but then game.checkForWinner() should then be invoked!

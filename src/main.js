var fightersList
var game = new Game('classic') //here is where the selected game will change

function selectFighterList () {
  if (game.selectedGameType === 'classic') {
    fightersList = [ 'rock', 'paper', 'scissors' ]
  } else {
    fightersList = [ 'rock', 'paper', 'scissors', 'alien', 'lizard' ]
  }
}
selectFighterList()
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

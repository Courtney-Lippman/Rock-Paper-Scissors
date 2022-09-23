class Game {
  constructor (selectedGameType) {
    this.gameBoardData = []
    this.selectedGameType = selectedGameType
    this.human = new Player('Human', '\uD83D\uDC69', 0)
    this.computer = new Player('Computer', '\uD83D\uDCBB', 0)
  }

  checkForWinner () {
    var humanFighter = this.human.fighter
    var computerFighter = this.computer.fighter
    if (humanFighter === computerFighter) {
      return "\uD83D\uDE22It's a draw!\uD83D\uDE22" // will want to access innerText for the choose-your-game-text and add this statement.
      // how will we update the data model so that it knows that this game was a draw? Do we need to?
    } else if (
      humanFighter === 'rock' &&
        (computerFighter === 'scissors' || computerFighter === 'lizard')
    ) {
      this.human.wins += 1
      return '\uD83D\uDC69Human won this round!\uD83D\uDC69'
    } else if (
      humanFighter === 'scissors' &&
        (computerFighter === 'paper' || computerFighter === 'lizard')
    ) {
      this.human.wins += 1
      return '\uD83D\uDC69Human won this round!\uD83D\uDC69'
    } else if (
      humanFighter === 'paper' &&
        (computerFighter === 'rock' || computerFighter === 'alien')
    ) {
      this.human.wins += 1
      return '\uD83D\uDC69Human won this round!\uD83D\uDC69'
    } else if (
      computerFighter === 'rock' &&
        (humanFighter === 'scissors' || humanFighter === 'lizard')
    ) {
      this.computer.wins += 1
      return '\uD83D\uDCBBComputer won this round!\uD83D\uDCBB'
    } else if (
      computerFighter === 'scissors' &&
        (humanFighter === 'paper' || humanFighter === 'lizard')
    ) {
      this.computer.wins += 1
      return '\uD83D\uDCBBComputer won this round!\uD83D\uDCBB'
    } else if (
      computerFighter === 'paper' &&
        (humanFighter === 'rock' || humanFighter === 'alien')
    ) {
      this.computer.wins += 1
      return '\uD83D\uDCBBComputer won this round!\uD83D\uDCBB'
    }
    // There has got to be a way to make this conditional less repetitive!
  }
  resetGameBoard () {
    this.gameBoardData = []
    // I am not sure what else I need here.
  }
}
// module.exports = Game
// Two Player instances ✅
// A way to keep track of the data for the game board ✅
// A way to keep track of the selected game type ✅
// A way to check the Game’s board data for win conditions ✅
// A way to detect when a game is a draw (no one has won) ✅
// A way to reset the Game’s board to begin a new game -- work in progress!

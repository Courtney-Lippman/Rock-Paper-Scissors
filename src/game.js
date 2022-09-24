class Game {
  constructor (selectedGameType) {
    this.selectedGameType = selectedGameType
    this.human = new Player('Human', '\uD83D\uDC69', 0)
    this.computer = new Player('Computer', '\uD83D\uDCBB', 0)
    this.winner = 'unknown'
  }

  checkForWinner () {
    var humanFighter = this.human.fighter
    var computerFighter = this.computer.fighter
    if (humanFighter.name === computerFighter.name) {
      this.winner = 'no one'
      return "\uD83D\uDE22It's a draw!\uD83D\uDE22" // will want to access innerText for the choose-your-game-text and add this statement.
      // how will we update the data model so that it knows that this game was a draw? Do we need to?
    } else if (humanFighter.beats.includes(computerFighter.name)) {
      this.human.wins += 1
      this.winner = this.human
      return '\uD83D\uDC69Human won this round!\uD83D\uDC69'
    } else if (computerFighter.beats.includes(humanFighter.name)) {
      this.computer.wins += 1
      this.winner = this.computer
      return '\uD83D\uDCBBComputer won this round!\uD83D\uDCBB'
    }
  }
  resetGameBoard () {
    this.selectedFightersImgs = []
    this.selectedGameType = selectedGameType
    this.human = new Player('Human', '\uD83D\uDC69', 0)
    this.computer = new Player('Computer', '\uD83D\uDCBB', 0)
    // I am not sure what I need here. This is my best guess right now.
  }
}
// module.exports = Game
// Two Player instances ✅
// A way to keep track of the data for the game board ✅
// A way to keep track of the selected game type ✅
// A way to check the Game’s board data for win conditions ✅
// A way to detect when a game is a draw (no one has won) ✅
// A way to reset the Game’s board to begin a new game -- work in progress!
